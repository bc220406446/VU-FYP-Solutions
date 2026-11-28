import { NextResponse } from "next/server";
import { z } from "zod";
import { createAdminClient } from "@/lib/supabase/server";
import { siteConfig } from "@/config/site";

const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  email: z.string().trim().email("Please enter a valid email address."),
  whatsapp: z
    .string()
    .trim()
    .min(11, "Please enter a valid WhatsApp number.")
    .max(11, "Complete Number is already added. Please check again."),
  serviceRequired: z.string().trim().min(1, "Please select a service."),
  additionalRemarks: z.string().trim().optional().default(""),
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const parsed = inquirySchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      whatsapp: formData.get("whatsapp"),
      serviceRequired: formData.get("serviceRequired"),
      additionalRemarks: formData.get("additionalRemarks") ?? "",
    });

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0]?.message ?? "Invalid input.";
      return NextResponse.json({ error: firstIssue }, { status: 400 });
    }

    const { name, email, whatsapp, serviceRequired, additionalRemarks } =
      parsed.data;

    const uploadedFile = formData.get("file");
    let attachmentName: string | null = null;
    let attachmentUrl: string | null = null;

    const hasFile = uploadedFile instanceof File && uploadedFile.size > 0;

    if (hasFile) {
      if (uploadedFile.size > MAX_FILE_SIZE_BYTES) {
        return NextResponse.json(
          { error: "Uploaded file must be 10 MB or smaller." },
          { status: 400 }
        );
      }
      attachmentName = uploadedFile.name;
    }

    // 1. Save to Supabase Storage & Database
    let savedToDatabase = false;
    const hasSupabaseAdmin =
      Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) &&
      Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);

    if (hasSupabaseAdmin) {
      const supabase = createAdminClient();

      if (hasFile && uploadedFile instanceof File) {
        const safeFileName = uploadedFile.name.replace(/[^a-zA-Z0-9._-]/g, "_");
        const storagePath = `${Date.now()}-${safeFileName}`;
        const arrayBuffer = await uploadedFile.arrayBuffer();

        const { error: uploadError } = await supabase.storage
          .from("contact-attachments")
          .upload(storagePath, arrayBuffer, {
            contentType: uploadedFile.type || "application/octet-stream",
            upsert: false,
          });

        if (!uploadError) {
          const { data: publicUrlData } = supabase.storage
            .from("contact-attachments")
            .getPublicUrl(storagePath);
          attachmentUrl = publicUrlData.publicUrl;
        } else {
          console.error("Supabase Storage upload error:", uploadError.message);
        }
      }

      const { error: insertError } = await supabase
        .from("contact_inquiries")
        .insert({
          name,
          email,
          whatsapp,
          service_required: serviceRequired,
          additional_remarks: additionalRemarks || null,
          attachment_name: attachmentName,
          attachment_url: attachmentUrl,
        });

      if (insertError) {
        console.error("Supabase DB insert error:", insertError.message);
        return NextResponse.json(
          { error: "Could not save inquiry to database: " + insertError.message },
          { status: 500 }
        );
      }

      savedToDatabase = true;
    }

    // 2. Send Email Notification via Resend (when RESEND_API_KEY is configured)
    let emailSent = false;
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const emailHtml = `
          <h2>New Project Inquiry - VU FYP Solutions</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>WhatsApp:</strong> ${escapeHtml(whatsapp)}</p>
          <p><strong>Service Required:</strong> ${escapeHtml(serviceRequired)}</p>
          <p><strong>Additional Remarks:</strong> ${escapeHtml(additionalRemarks || "None")}</p>
          ${
            attachmentName
              ? `<p><strong>Attachment:</strong> ${escapeHtml(attachmentName)}${
                  attachmentUrl ? ` (<a href="${attachmentUrl}">Download File</a>)` : ""
                }</p>`
              : ""
          }
        `;

        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from:
              process.env.RESEND_FROM_EMAIL ||
              "VU FYP Solutions <onboarding@resend.dev>",
            to: [siteConfig.contact.email],
            reply_to: email,
            subject: `New Inquiry: ${serviceRequired} - ${name}`,
            html: emailHtml,
          }),
        });

        emailSent = res.ok;
        if (!res.ok) {
          console.error("Resend API error:", await res.text());
        }
      } catch (mailErr) {
        console.error("Email send error:", mailErr);
      }
    }

    return NextResponse.json({
      success: true,
      savedToDatabase,
      emailSent,
    });
  } catch (err) {
    console.error("Contact API unexpected error:", err);
    return NextResponse.json(
      { error: "Unable to process your inquiry right now. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
