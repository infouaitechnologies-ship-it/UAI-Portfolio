"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border bg-bg/80 backdrop-blur-xl" : "border-b border-transparent"
      )}
    >
      <Container>
        <nav className="flex h-18 items-center justify-between py-4" aria-label="Primary">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight text-text"
          >
            Umer<span className="text-accent">.</span>Farooq
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium text-muted transition-colors hover:text-text",
                    pathname === link.href && "text-text"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button href="/contact" variant="primary" showArrow>
              Book a Consultation
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-text md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-border bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-muted hover:bg-white/5 hover:text-text"
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/contact" variant="primary" className="mt-2 justify-center">
                Book a Consultation
              </Button>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 px-3 text-xs text-muted-2"
              >
                {site.email}
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
