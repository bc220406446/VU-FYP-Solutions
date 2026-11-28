"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight01Icon, Tick02Icon } from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";

const SERVICE_OPTIONS = [
  "Complete CS619 Project Handling",
  "Complete CS519 Project Handling",
  "CS619 - SRS Document",
  "CS619 - Design Document",
  "CS619 - Prototype Development",
  "CS619 - Final Deliverable Development",
  "CS519 - Documentation",
  "CS519 - Final Deliverable Development",
  "Viva Preparation Only",
  "Full Semester LMS Handling",
  "Half Semester LMS Handling",
  "Individual LMS Activity",
  "Other / Custom Requirement",
] as const;

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name (at least 2 characters)."),
  email: z.string().trim().email("Please enter a valid email address."),
  whatsapp: z
    .string()
    .trim()
    .min(11, "Please enter a valid WhatsApp number.")
    .max(11, "Complete Number is already added. Please check again."),
  serviceRequired: z.string().min(1, "Please select a service."),
  additionalRemarks: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

interface SubmitResult {
  savedToDatabase: boolean;
  emailSent: boolean;
}

export function ContactForm() {
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<SubmitResult | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
      serviceRequired: SERVICE_OPTIONS[0],
      additionalRemarks: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] ?? null;
    setFileError(null);
    if (selected && selected.size > 10 * 1024 * 1024) {
      setFileError("File size must be 10 MB or less.");
      setFile(null);
      return;
    }
    setFile(selected);
  };

  const onSubmit = async (data: ContactFormValues) => {
    setServerError(null);
    setSubmitResult(null);
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("whatsapp", data.whatsapp);
      formData.append("serviceRequired", data.serviceRequired);
      formData.append("additionalRemarks", data.additionalRemarks ?? "");
      if (file) {
        formData.append("file", file);
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        setServerError(result.error || "Failed to submit inquiry.");
        return;
      }

      setSubmitResult({
        savedToDatabase: Boolean(result.savedToDatabase),
        emailSent: Boolean(result.emailSent),
      });

      reset();
      setFile(null);
    } catch {
      setServerError("Network error while submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-xl border border-border bg-white p-6 sm:p-8 shadow-card space-y-6">
      <div className="space-y-1.5">
        <h2 className="text-xl sm:text-2xl font-bold font-heading text-brand-deepInk">
          Send Your Requirements
        </h2>
        <p className="text-xs sm:text-sm text-neutral-slateText font-sans">
          Fill in your project or phase details below and our team will review
          your inquiry and get back to you.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label
              htmlFor="contact-name"
              className="block text-xs sm:text-sm font-sans font-medium text-brand-deepInk"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="e.g. Ali Raza"
              {...register("name")}
              className="w-full rounded-lg border border-border bg-neutral-warmWhite/50 px-3.5 py-2.5 text-sm font-sans text-brand-deepInk placeholder:text-neutral-mutedGrey focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-deepTeal/30 focus:border-brand-deepTeal transition-colors"
            />
            {errors.name && (
              <p className="text-xs font-sans text-red-600">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="contact-email"
              className="block text-xs sm:text-sm font-sans font-medium text-brand-deepInk"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="e.g. ali@gmail.com"
              {...register("email")}
              className="w-full rounded-lg border border-border bg-neutral-warmWhite/50 px-3.5 py-2.5 text-sm font-sans text-brand-deepInk placeholder:text-neutral-mutedGrey focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-deepTeal/30 focus:border-brand-deepTeal transition-colors"
            />
            {errors.email && (
              <p className="text-xs font-sans text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* WhatsApp & Service Required Dropdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label
              htmlFor="contact-whatsapp"
              className="block text-xs sm:text-sm font-sans font-medium text-brand-deepInk"
            >
              WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-whatsapp"
              type="tel"
              placeholder="e.g. 03001234567"
              {...register("whatsapp")}
              className="w-full rounded-lg border border-border bg-neutral-warmWhite/50 px-3.5 py-2.5 text-sm font-sans text-brand-deepInk placeholder:text-neutral-mutedGrey focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-deepTeal/30 focus:border-brand-deepTeal transition-colors"
            />
            {errors.whatsapp && (
              <p className="text-xs font-sans text-red-600">
                {errors.whatsapp.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="contact-service"
              className="block text-xs sm:text-sm font-sans font-medium text-brand-deepInk"
            >
              Service Required <span className="text-red-500">*</span>
            </label>
            <select
              id="contact-service"
              {...register("serviceRequired")}
              className="w-full rounded-lg border border-border bg-neutral-warmWhite/50 px-3.5 py-2.5 text-sm font-sans text-brand-deepInk focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-deepTeal/30 focus:border-brand-deepTeal transition-colors"
            >
              {SERVICE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.serviceRequired && (
              <p className="text-xs font-sans text-red-600">
                {errors.serviceRequired.message}
              </p>
            )}
          </div>
        </div>

        {/* File Upload */}
        <div className="space-y-1.5">
          <label
            htmlFor="contact-file"
            className="block text-xs sm:text-sm font-sans font-medium text-brand-deepInk"
          >
            File Upload{" "}
            <span className="text-neutral-mutedGrey font-normal">
              (Assignment File)
            </span>
          </label>
          <input
            id="contact-file"
            type="file"
            accept=".pdf,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg,.zip"
            onChange={handleFileChange}
            className="w-full rounded-lg border border-border bg-neutral-warmWhite/50 px-3.5 py-2 text-xs sm:text-sm font-sans text-brand-deepInk file:mr-3 file:rounded-md file:border-0 file:bg-brand-deepTeal/10 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-brand-deepTeal hover:file:bg-brand-deepTeal/20 cursor-pointer"
          />
          {file && (
            <p className="text-xs font-sans text-brand-deepTeal">
              Selected: {file.name} ({(file.size / 1024).toFixed(0)} KB)
            </p>
          )}
          {fileError && (
            <p className="text-xs font-sans text-red-600">{fileError}</p>
          )}
        </div>

        {/* Additional Remarks */}
        <div className="space-y-1.5">
          <label
            htmlFor="contact-remarks"
            className="block text-xs sm:text-sm font-sans font-medium text-brand-deepInk"
          >
            Additional Remarks
          </label>
          <textarea
            id="contact-remarks"
            rows={4}
            placeholder="Share your project title, deadline, or any supervisor instructions..."
            {...register("additionalRemarks")}
            className="w-full rounded-lg border border-border bg-neutral-warmWhite/50 px-3.5 py-2.5 text-sm font-sans text-brand-deepInk placeholder:text-neutral-mutedGrey focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-deepTeal/30 focus:border-brand-deepTeal transition-colors resize-y"
          />
        </div>

        {serverError && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-xs sm:text-sm text-red-700 font-sans">
            {serverError}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-brand-deepTeal hover:bg-brand-darkNavy disabled:opacity-60 text-white font-sans font-medium text-sm transition-colors shadow-sm cursor-pointer"
        >
          <span>{isSubmitting ? "Submitting..." : "Submit Inquiry"}</span>
          <AppIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
        </button>

        {submitResult && (
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 flex items-start gap-2.5 text-xs sm:text-sm text-emerald-900 font-sans">
            <p className="p-2 mt-0.5 shrink-0 text-emerald-600 font-medium">
              Thank you! Your inquiry has been submitted successfully. We will
              contact you shortly.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
