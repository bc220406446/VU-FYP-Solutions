import Link from "next/link";
import { AlertCircleIcon, Home01Icon } from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-16 text-center">
      <div className="w-full max-w-md rounded-lg border border-border bg-card p-8 shadow-card">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-deep-teal/10 text-brand-deep-teal">
          <AppIcon icon={AlertCircleIcon} size={28} strokeWidth={1.75} alt="Page not found" />
        </div>

        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Error 404
        </span>

        <h1 className="mt-2 text-2xl font-bold font-heading text-brand-deep-ink">
          Page Not Found
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-neutral-slateText">
          The requested page could not be located. It may have been moved, renamed, or is temporarily unavailable.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-brand-deepTeal px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-deepTeal/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-deepTeal"
          >
            <AppIcon icon={Home01Icon} size={18} strokeWidth={1.75} />
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
