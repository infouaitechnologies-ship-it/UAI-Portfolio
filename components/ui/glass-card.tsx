import { cn } from "@/lib/utils";

/**
 * Card — a quiet, bordered surface used throughout the site.
 * Named GlassCard for import compatibility, but intentionally has
 * no blur or glow: a solid surface, a hairline border, a soft shadow.
 */
export function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("card-surface rounded-xl", className)}>
      {children}
    </div>
  );
}

export const Card = GlassCard;
