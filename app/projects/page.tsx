import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { projects, additionalProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies covering government market systems, HR platforms, and financial recovery software built by Umer Farooq.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-16 pb-10 md:pt-24">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionLabel>Projects</SectionLabel>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Case studies from real, shipped systems
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Three flagship platforms, covered in depth, plus a few smaller
              builds from earlier on.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="flex flex-col gap-16">
          {projects.map((project, i) => (
            <Reveal key={project.slug}>
              <Link href={`/projects/${project.slug}`} className="group block">
                <GlassCard
                  className={`grid gap-0 overflow-hidden md:grid-cols-2 ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[16/10] md:aspect-auto">
                    <Image
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 sm:p-10">
                    <span className="text-xs font-medium uppercase tracking-wide text-accent">
                      {project.industry}
                    </span>
                    <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                      {project.shortTitle}
                    </h2>
                    <p className="mt-3 text-sm text-muted-2">
                      {project.role} · {project.duration}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted">
                      {project.summary}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="mt-7 inline-flex items-center gap-1 text-sm font-medium text-text">
                      Read full case study
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </GlassCard>
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <Reveal>
            <SectionLabel>Earlier Work</SectionLabel>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              Additional projects
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {additionalProjects.map((project, i) => (
              <Reveal key={project.title} delay={i * 0.1}>
                <GlassCard className="flex h-full flex-col p-6">
                  <h3 className="font-display text-lg font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-2">{project.period}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-text"
                    >
                      Visit site
                      <ExternalLink className="size-3.5" />
                    </a>
                  )}
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
