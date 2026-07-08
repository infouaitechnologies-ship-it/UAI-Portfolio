import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { education, award } from "@/data/experience";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Umer Farooq is a full-stack engineer from Lahore, Pakistan, building government, HR, and fintech platforms with ASP.NET, React, and SQL Server.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Own the whole system",
    description:
      "From SQL Server schema to the screen a user clicks on — I think in systems, not just features.",
  },
  {
    title: "Reliability over flash",
    description:
      "Government and financial platforms don't get to fail quietly. I build for correctness first.",
  },
  {
    title: "Ship, then support",
    description:
      "Production support and debugging are part of the job, not an afterthought handed to someone else.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-16 pb-10 md:pt-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <Reveal>
            <SectionLabel>About</SectionLabel>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Software engineer, based in Lahore, working on systems that
              governments and enterprises depend on.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              I&apos;m {site.name}, a full-stack engineer specializing in
              ASP.NET and React. My work spans a government market-management
              platform I designed and built independently, an HR system used
              to manage attendance and staff records, and a debt-recovery
              platform serving U.S. collection agencies — each one built
              around a real, unglamorous operational problem.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              I care about problem-solving and clean architecture more than
              trends. Most of my work sits on the backend and database layer,
              which means I spend a lot of time thinking about what happens
              when a system is under real load, not just what it looks like
              in a demo.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/projects" variant="primary" showArrow>
                See the projects
              </Button>
              <Button href="/contact" variant="secondary">
                Get in touch
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <GlassCard className="p-8">
              <h2 className="font-display text-lg font-semibold">Education</h2>
              <p className="mt-2 text-sm text-muted">{education.degree}</p>
              <p className="text-sm text-muted">{education.institution}</p>
              <p className="mt-1 text-xs text-muted-2">
                {education.period} · GPA {education.gpa}
              </p>

              <div className="mt-6 border-t border-border pt-6">
                <h2 className="font-display text-lg font-semibold">Recognition</h2>
                <p className="mt-2 text-sm font-medium text-text">{award.title}</p>
                <p className="text-sm text-muted">{award.issuer}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-2">
                  {award.description}
                </p>
              </div>

              <div className="mt-6 border-t border-border pt-6">
                <h2 className="font-display text-lg font-semibold">Languages</h2>
                <p className="mt-2 text-sm text-muted">English · Urdu</p>
              </div>
            </GlassCard>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionLabel>What I Value</SectionLabel>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight">
              Principles that show up in the code
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <GlassCard className="h-full p-6">
                  <h3 className="font-display text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {value.description}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
