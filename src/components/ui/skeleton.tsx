import { cn } from "@/lib/utils";

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * DeveloperBano Standardized Skeleton Loader
 * Accessible placeholder for content loading states.
 */
export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-neutral-lightGrey/60",
        className
      )}
      aria-hidden="true"
      {...props}
    />
  );
}
