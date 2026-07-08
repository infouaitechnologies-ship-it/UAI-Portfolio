import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent",
        className
      )}
    >
      <span className="h-px w-6 bg-accent/60" aria-hidden="true" />
      {children}
    </span>
  );
}
