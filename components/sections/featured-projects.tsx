import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionLabel>Case Studies</SectionLabel>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
              Featured platforms, built end to end
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/projects" variant="ghost" showArrow>
              View all projects
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <Link href={`/projects/${project.slug}`} className="group block h-full">
                <GlassCard className="flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                    <Image
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-medium uppercase tracking-wide text-accent">
                      {project.industry}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-semibold">
                      {project.shortTitle}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {project.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-text">
                      Read case study
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </GlassCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
