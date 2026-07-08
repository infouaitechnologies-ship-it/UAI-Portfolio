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
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none";

  const variants = {
    primary:
      "bg-primary text-white shadow-[0_0_0_1px_rgba(79,70,229,0.4),0_8px_24px_-8px_rgba(79,70,229,0.6)] hover:bg-primary-soft hover:shadow-[0_0_0_1px_rgba(99,102,241,0.5),0_10px_30px_-6px_rgba(99,102,241,0.7)] hover:-translate-y-0.5",
    secondary:
      "glass text-text hover:border-white/30 hover:-translate-y-0.5",
    ghost: "text-muted hover:text-text",
  };

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowUpRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
