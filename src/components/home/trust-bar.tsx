import React from "react";
import {
  Mortarboard02Icon,
  CheckmarkCircle02Icon,
  UserGroupIcon,
  ShieldCheckIcon,
} from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";

export function TrustBar() {
  const trustPoints = [
    {
      icon: Mortarboard02Icon,
      title: "FYP Focused",
      desc: "CS619 & CS519",
    },
    {
      icon: CheckmarkCircle02Icon,
      title: "End-to-End Support",
      desc: "Documentation to Delivery",
    },
    {
      icon: UserGroupIcon,
      title: "Supervisor Guidance",
      desc: "Project-aligned work",
    },
    {
      icon: ShieldCheckIcon,
      title: "Reliable & Transparent",
      desc: "Clear scope and communication",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="rounded-xl border border-border bg-white p-6 shadow-subtle">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-border/80">
          {trustPoints.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3.5 ${
                index !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""
              }`}
            >
              <div className="h-11 w-11 rounded-lg bg-brand-deepTeal text-white flex items-center justify-center shrink-0">
                <AppIcon icon={item.icon} size={22} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm text-brand-deepInk leading-tight">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-neutral-slateText mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
