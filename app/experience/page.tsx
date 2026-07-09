import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { experience, education, award } from "@/data/experience";

export const metadata: Metadata = {
  title: "Track Record",
  description:
    "The engineering track record behind UAI Technologies — delivering government, HR, and fintech platforms with ASP.NET, React, and SQL Server.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <section className="pt-16 pb-10 md:pt-24">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionLabel>Track Record</SectionLabel>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Where the work happened
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              The engineering background that shaped how UAI Technologies
              builds — delivered across government, HR, and fintech systems
              before we brought that experience in-house.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="max-w-3xl">
          <div className="relative flex flex-col gap-10 border-l border-border pl-8 sm:pl-10">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.1} className="relative">
                <span
                  className="absolute -left-[calc(2rem+5px)] top-1.5 size-3 rounded-full border-2 border-accent bg-bg sm:-left-[calc(2.5rem+5px)]"
                  aria-hidden="true"
                />
                <GlassCard className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h2 className="font-display text-xl font-semibold">{job.role}</h2>
                    <span className="text-xs font-medium uppercase tracking-wide text-accent">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-muted">
                    {job.company}
                    {job.location ? ` · ${job.location}` : ""}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{job.summary}</p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {job.responsibilities.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary-soft" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {job.relatedProjectSlug && (
                    <Link
                      href={`/projects/${job.relatedProjectSlug}`}
                      className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-text"
                    >
                      See the related case study
                      <ArrowUpRight className="size-4" />
                    </Link>
                  )}
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container className="max-w-3xl">
          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal>
              <GlassCard className="h-full p-6">
                <h3 className="font-display font-semibold">Education</h3>
                <p className="mt-2 text-sm text-muted">{education.degree}</p>
                <p className="text-sm text-muted">{education.institution}</p>
                <p className="mt-1 text-xs text-muted-2">
                  {education.period} · GPA {education.gpa}
                </p>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.1}>
              <GlassCard className="h-full p-6">
                <h3 className="font-display font-semibold">Recognition</h3>
                <p className="mt-2 text-sm font-medium text-text">{award.title}</p>
                <p className="text-sm text-muted">{award.issuer}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-2">
                  {award.description}
                </p>
              </GlassCard>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
