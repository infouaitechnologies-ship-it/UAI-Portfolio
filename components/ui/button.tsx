import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  showArrow?: boolean;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  showArrow = false,
  external = false,
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition-all duration-250 focus-visible:outline-none";

  const variants = {
    primary:
      "bg-[var(--color-invert-bg)] text-[var(--color-invert-text)] hover:opacity-85",
    secondary:
      "border border-border-strong text-text hover:bg-surface-2",
    ghost: "text-muted hover:text-text",
  };

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowUpRight
          className="size-4 transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, variants[variant], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {content}
    </Link>
  );
}
