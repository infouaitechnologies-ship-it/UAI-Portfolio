import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-soft">
      <Container className="grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} — Home`}>
            <Image
              src={site.logoMark}
              alt=""
              width={32}
              height={32}
              className="size-8 rounded-lg"
            />
            <span className="font-display text-lg font-semibold text-text">
              UAI<span className="text-accent">.</span>Technologies
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {site.tagline} We build ASP.NET business applications, HR systems,
            and ERP platforms for growing companies.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-sm text-muted">
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-text">
              <Mail className="size-4 text-accent" aria-hidden="true" />
              {site.email}
            </a>
            <a href={`tel:${site.phones[0].replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-text">
              <Phone className="size-4 text-accent" aria-hidden="true" />
              {site.phones[0]}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-accent" aria-hidden="true" />
              {site.location}
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-2">
            Navigate
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted hover:text-text">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-2">
            Connect
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-text"
              >
                <Linkedin className="size-4 text-accent" aria-hidden="true" />
                LinkedIn
              </a>
            </li>
            <li>
              <Link href="/privacy" className="text-sm text-muted hover:text-text">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 text-xs text-muted-2 md:flex-row">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p>Custom business software, built and supported end to end.</p>
      </Container>
    </footer>
  );
}
