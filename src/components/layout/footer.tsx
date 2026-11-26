import React from "react";
import Link from "next/link";
import {
  SourceCodeIcon,
  WhatsappIcon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const whatsappUrl = buildWhatsAppUrl({
    message: "Hello VU FYP Solutions, I have an inquiry about my Final Year Project.",
  });

  return (
    <footer className="w-full bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-lg bg-brand-deepTeal text-white flex items-center justify-center shadow-sm">
                <AppIcon icon={SourceCodeIcon} size={22} strokeWidth={2} />
              </div>
              <span className="font-heading font-bold text-lg text-brand-deepInk tracking-tight">
                VU FYP <span className="text-brand-deepTeal">Solutions</span>
              </span>
            </Link>

            <p className="text-sm text-neutral-slateText font-sans leading-relaxed max-w-sm">
              Your Final Year Project Development Partner for Virtual University CS619 and CS519 students.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-brand-deepInk">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm font-sans text-neutral-slateText">
              <li>
                <Link href="/" className="hover:text-brand-deepTeal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-brand-deepTeal transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-deepTeal transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-brand-deepInk">
              Resources
            </h4>
            <ul className="space-y-2 text-sm font-sans text-neutral-slateText">
              <li>
                <Link href="/supervisor-reviews" className="hover:text-brand-deepTeal transition-colors">
                  Supervisor Reviews
                </Link>
              </li>
              <li>
                <Link href="/helping-material" className="hover:text-brand-deepTeal transition-colors">
                  Helping Material
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-brand-deepTeal transition-colors">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-brand-deepInk">
                Legal
              </h4>
              <ul className="space-y-2 text-sm font-sans text-neutral-slateText">
                <li>
                  <Link href="/terms" className="hover:text-brand-deepTeal transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-brand-deepTeal transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer Bar */}
      <div className="w-full bg-brand-deepInk text-neutral-lightGrey text-xs py-4 px-4 border-t border-brand-slate">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>© 2026 VU FYP Solutions. All rights reserved.</p>
          <p className="text-neutral-mutedGrey">
            Not affiliated with or endorsed by Virtual University of Pakistan (VU).
          </p>
        </div>
      </div>
    </footer>
  );
}
