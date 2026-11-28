import { NextResponse } from "next/server";
import { z } from "zod";
import { createAdminClient } from "@/lib/supabase/server";
import { siteConfig } from "@/config/site";

const reviewSchema = z.object({
  projectTitle: z
    .string()
    .trim()
    .min(2, "Please enter your project title."),
  supervisorName: z
    .string()
    .trim()
    .min(2, "Please enter your supervisor name."),
  rating: z.coerce
    .number()
    .int()
    .min(1, "Please select a rating.")
    .max(5, "Rating must be between 1 and 5."),
  supervisorBehaviour: z.enum(["Polite", "Strict", "Moody"]),
  experience: z
    .string()
    .trim()
    .min(15, "Please share at least a few details about your viva experience."),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = reviewSchema.safeParse(body);

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0]?.message ?? "Invalid input.";
      return NextResponse.json({ error: firstIssue }, { status: 400 });
    }

    const {
      projectTitle,
      supervisorName,
      rating,
      supervisorBehaviour,
      experience,
    } = parsed.data;

    const hasSupabaseAdmin =
      Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) &&
      Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);

    if (!hasSupabaseAdmin) {
      return NextResponse.json(
        { error: "Database is not configured yet." },
        { status: 500 }
      );
    }

    const supabase = createAdminClient();
    const { error: insertError } = await supabase
      .from("supervisor_reviews")
      .insert({
        project_title: projectTitle,
        supervisor_name: supervisorName,
        rating,
        supervisor_behaviour: supervisorBehaviour,
        experience,
        status: "pending",
      });

    if (insertError) {
      console.error("Supabase review insert error:", insertError.message);
      return NextResponse.json(
        { error: "Could not save experience: " + insertError.message },
        { status: 500 }
      );
    }

    // Send email notification via Resend (when RESEND_API_KEY is configured)
    let emailSent = false;
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const emailHtml = `
          <h2>New Viva Experience Submitted (Pending Approval)</h2>
          <p><strong>Project Title:</strong> ${escapeHtml(projectTitle)}</p>
          <p><strong>Supervisor Name:</strong> ${escapeHtml(supervisorName)}</p>
          <p><strong>Rating:</strong> ${rating} / 5</p>
          <p><strong>Behaviour:</strong> ${escapeHtml(supervisorBehaviour)}</p>
          <p><strong>Experience:</strong></p>
          <p style="white-space: pre-line;">${escapeHtml(experience)}</p>
          <p><em>Status is currently <strong>pending</strong>. Approve it in Supabase Table Editor to publish on /supervisor-reviews.</em></p>
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
            subject: `New Viva Review (${supervisorBehaviour}, ${rating}/5) - ${projectTitle}`,
            html: emailHtml,
          }),
        });

        emailSent = res.ok;
        if (!res.ok) {
          console.error("Resend review email error:", await res.text());
        }
      } catch (mailErr) {
        console.error("Review email send error:", mailErr);
      }
    }

    return NextResponse.json({ success: true, emailSent });
  } catch (err) {
    console.error("Reviews API unexpected error:", err);
    return NextResponse.json(
      { error: "Unable to submit experience right now. Please try again." },
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
