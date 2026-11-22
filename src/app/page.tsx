import { AppIcon } from "@/components/shared/icon";
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";

export default function RootPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-md rounded-lg border border-border bg-card p-8 shadow-card">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-deepTeal/10 text-brand-deepTeal">
          <AppIcon icon={CheckmarkCircle02Icon} size={24} strokeWidth={2} />
        </div>
        <h1 className="text-xl font-bold font-heading text-brand-deepInk">
          DeveloperBano
        </h1>
        <p className="mt-2 font-mono text-xs text-brand-primaryTeal font-medium">
          Foundation & Design System Initialized
        </p>
        <p className="mt-3 text-xs leading-relaxed text-neutral-slateText">
          Global tokens, color palette, typography, icon library, and Next.js App Router foundations are configured. Ready for page-specific development.
        </p>
      </div>
    </main>
  );
}
