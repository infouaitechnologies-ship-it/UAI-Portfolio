import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, government systems, HR platforms, financial recovery systems, and backend architecture — services offered by Umer Farooq.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-16 pb-10 md:pt-24">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionLabel>Services</SectionLabel>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              What I build
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Every service below is grounded in something I&apos;ve actually
              shipped — not a generic capability list. If your project doesn&apos;t
              fit neatly into one category, that&apos;s normal; most real systems
              don&apos;t.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={(i % 2) * 0.1}>
                <GlassCard className="flex h-full flex-col p-7">
                  <h2 className="font-display text-xl font-semibold">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <ul className="mt-5 flex flex-1 flex-col gap-2">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  {service.relatedProjectSlug && (
                    <Link
                      href={`/projects/${service.relatedProjectSlug}`}
                      className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-text"
                    >
                      See it in practice
                      <ArrowUpRight className="size-4" />
                    </Link>
                  )}
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <Reveal>
            <GlassCard className="flex flex-col items-center gap-6 px-8 py-14 text-center sm:px-16">
              <h2 className="font-display text-3xl font-semibold tracking-tight">
                Not sure which service fits?
              </h2>
              <p className="max-w-lg text-muted">
                Tell me what&apos;s slow or manual in your process right now —
                I&apos;ll help you figure out the right scope.
              </p>
              <Button href="/contact" variant="primary" showArrow>
                Book Consultation
              </Button>
            </GlassCard>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
