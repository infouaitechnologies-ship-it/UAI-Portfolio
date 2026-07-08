import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass rounded-2xl transition-colors duration-300 hover:border-white/20",
        className
      )}
    >
      {children}
    </div>
  );
}
