import { NextResponse } from "next/server";
import { z } from "zod";
import { createAdminClient } from "@/lib/supabase/server";
import { siteConfig } from "@/config/site";

const remarkSchema = z.object({
  studentName: z.string().trim().min(2, "Please enter your name."),
  projectName: z.string().trim().min(2, "Please enter your project name."),
  projectType: z.enum(["CS519", "CS619"]),
  remarks: z
    .string()
    .trim()
    .min(10, "Please share at least a short remark about your experience."),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = remarkSchema.safeParse(body);

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0]?.message ?? "Invalid input.";
      return NextResponse.json({ error: firstIssue }, { status: 400 });
    }

    const { studentName, projectName, projectType, remarks } = parsed.data;

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
      .from("student_remarks")
      .insert({
        student_name: studentName,
        project_name: projectName,
        project_type: projectType,
        remarks,
        status: "pending",
      });

    if (insertError) {
      console.error("Supabase student remark insert error:", insertError.message);
      return NextResponse.json(
        { error: "Could not save remarks: " + insertError.message },
        { status: 500 }
      );
    }

    // Send email notification via Resend (when RESEND_API_KEY is configured)
    let emailSent = false;
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const emailHtml = `
          <h2>New Student Remark Submitted (Pending Approval)</h2>
          <p><strong>Name:</strong> ${escapeHtml(studentName)}</p>
          <p><strong>Project Name:</strong> ${escapeHtml(projectName)}</p>
          <p><strong>Project Type:</strong> ${escapeHtml(projectType)}</p>
          <p><strong>Remarks:</strong></p>
          <p style="white-space: pre-line;">${escapeHtml(remarks)}</p>
          <p><em>Status is currently <strong>pending</strong>. Approve it in Supabase Table Editor to publish on /student-projects.</em></p>
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
            subject: `New Student Remark (${projectType}) - ${studentName}`,
            html: emailHtml,
          }),
        });

        emailSent = res.ok;
        if (!res.ok) {
          console.error("Resend remark email error:", await res.text());
        }
      } catch (mailErr) {
        console.error("Remark email send error:", mailErr);
      }
    }

    return NextResponse.json({ success: true, emailSent });
  } catch (err) {
    console.error("Student remarks API unexpected error:", err);
    return NextResponse.json(
      { error: "Unable to submit remarks right now. Please try again." },
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
