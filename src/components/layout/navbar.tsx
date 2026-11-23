"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BashIcon,
  Mortarboard02Icon,
  Moon02Icon,
  Menu01Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Supervisor Reviews", href: "/supervisor-reviews" },
    { label: "Helping Material", href: "/helping-material" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="h-9 w-9 rounded-lg bg-brand-deepTeal text-white flex items-center justify-center shadow-sm group-hover:bg-brand-primaryTeal transition-colors">
            <AppIcon icon={BashIcon} size={22} strokeWidth={2} />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg leading-tight text-brand-deepInk tracking-tight flex items-center gap-1">
              VU FYP <span className="text-brand-deepTeal">Solutions</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-sm font-sans font-medium transition-all duration-150",
                  isActive
                    ? "bg-brand-deepTeal text-white shadow-xs font-semibold"
                    : "text-neutral-slateText hover:text-brand-deepInk hover:bg-neutral-warmWhite"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side controls: Theme toggle & Mobile menu button */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle dark mode"
            className="p-2 rounded-full text-neutral-slateText hover:text-brand-deepInk hover:bg-neutral-warmWhite transition-colors"
          >
            <AppIcon icon={Moon02Icon} size={20} strokeWidth={1.75} />
          </button>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-neutral-slateText hover:text-brand-deepInk hover:bg-neutral-warmWhite transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <AppIcon
              icon={mobileMenuOpen ? Cancel01Icon : Menu01Icon}
              size={24}
              strokeWidth={2}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-border px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-2.5 rounded-md text-sm font-sans font-medium transition-colors",
                  isActive
                    ? "bg-brand-deepTeal text-white font-semibold"
                    : "text-neutral-slateText hover:bg-neutral-warmWhite hover:text-brand-deepInk"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
