import type { Metadata } from "next";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { ContactForm } from "@/components/sections/contact-form";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Umer Farooq to discuss a custom software project, government platform, or enterprise system.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24">
      <Container className="grid gap-12 lg:grid-cols-[1fr_0.85fr]">
        <Reveal>
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s talk about your project
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Whether it&apos;s a new system or fixing a fragile one, tell me
            what you&apos;re working with and I&apos;ll follow up with next
            steps.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-3 text-sm text-muted hover:text-text"
            >
              <Mail className="size-4 text-accent" />
              {site.email}
            </a>
            <a
              href={`tel:${site.phones[0].replace(/\s/g, "")}`}
              className="inline-flex items-center gap-3 text-sm text-muted hover:text-text"
            >
              <Phone className="size-4 text-accent" />
              {site.phones.join(" · ")}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-muted hover:text-text"
            >
              <Linkedin className="size-4 text-accent" />
              LinkedIn
            </a>
            <span className="inline-flex items-center gap-3 text-sm text-muted">
              <MapPin className="size-4 text-accent" />
              {site.location}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <GlassCard className="p-6 sm:p-8">
            <ContactForm />
          </GlassCard>
        </Reveal>
      </Container>
    </section>
  );
}
