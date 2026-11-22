"use client";

import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";
import { cn } from "@/lib/utils";

export interface IconProps extends React.ComponentPropsWithoutRef<"svg"> {
  icon: IconSvgElement;
  size?: number | string;
  strokeWidth?: number;
  className?: string;
  alt?: string;
}

/**
 * DeveloperBano Standardized Icon Component
 * Enforces uniform icon sizing, outline styling, and accessibility across the design system.
 */
export function AppIcon({
  icon,
  size = 20,
  strokeWidth = 1.5,
  className,
  alt,
  ...props
}: IconProps) {
  return (
    <HugeiconsIcon
      icon={icon}
      size={size}
      strokeWidth={strokeWidth}
      className={cn("inline-block shrink-0 align-middle text-current", className)}
      aria-hidden={!alt}
      aria-label={alt}
      role={alt ? "img" : "presentation"}
      {...props}
    />
  );
}
