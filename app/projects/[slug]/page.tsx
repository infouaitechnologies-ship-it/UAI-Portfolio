import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { projects, getProjectBySlug } from "@/data/projects";
import { site } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.shortTitle,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.shortTitle} — Case Study`,
      description: project.summary,
      images: [{ url: project.images[0].src }],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    creator: { "@type": "Organization", name: site.name },
    about: project.industry,
    description: project.summary,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="pt-12 pb-10 md:pt-16">
        <Container>
          <Reveal>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-text"
            >
              <ArrowLeft className="size-4" />
              All case studies
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-wide text-accent">
                {project.industry}
              </span>
              {project.liveNote && (
                <span className="text-xs text-muted-2">{project.liveNote}</span>
              )}
            </div>

            <h1 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              {project.summary}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-2">Role</p>
                <p className="mt-1 text-sm font-medium text-text">{project.role}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-2">Duration</p>
                <p className="mt-1 text-sm font-medium text-text">{project.duration}</p>
              </div>
              <div className="col-span-2 sm:col-span-2">
                <p className="text-xs uppercase tracking-wide text-muted-2">Industry</p>
                <p className="mt-1 text-sm font-medium text-text">{project.industry}</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-6">
        <Container>
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-border">
              <Image
                src={project.images[0].src}
                alt={project.images[0].alt}
                fill
                priority
                sizes="100vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-14">
            <Reveal>
              <SectionLabel>The Problem</SectionLabel>
              <ul className="mt-5 flex flex-col gap-3">
                {project.problem.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary-soft" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <SectionLabel>The Solution</SectionLabel>
              <p className="mt-5 leading-relaxed text-muted">{project.solution}</p>
            </Reveal>

            <Reveal>
              <SectionLabel>System Architecture</SectionLabel>
              <p className="mt-5 leading-relaxed text-muted">{project.architecture}</p>
            </Reveal>

            <Reveal>
              <SectionLabel>Core Modules & Features</SectionLabel>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.modules.map((mod) => (
                  <div
                    key={mod}
                    className="rounded-xl border border-border px-4 py-3 text-sm text-muted"
                  >
                    {mod}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <SectionLabel>Our Responsibilities</SectionLabel>
              <ul className="mt-5 flex flex-col gap-3">
                {project.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <SectionLabel>Challenges & Solutions</SectionLabel>
              <div className="mt-5 flex flex-col gap-4">
                {project.challenges.map((challenge) => (
                  <GlassCard key={challenge.title} className="p-6">
                    <h3 className="font-display font-semibold text-text">
                      {challenge.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {challenge.detail}
                    </p>
                  </GlassCard>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <SectionLabel>Screens</SectionLabel>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {project.images.map((image) => (
                  <figure
                    key={image.src}
                    className="overflow-hidden rounded-2xl border border-border"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <figcaption className="bg-bg-soft px-4 py-3 text-xs text-muted-2">
                      {image.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <SectionLabel>Business Impact</SectionLabel>
              <ul className="mt-5 flex flex-col gap-3">
                {project.outcome.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary-soft" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6 lg:sticky lg:top-24 lg:h-fit">
            <GlassCard className="p-6">
              <h3 className="font-display font-semibold">Technology Stack</h3>
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
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="font-display font-semibold">Interested in something similar?</h3>
              <p className="mt-2 text-sm text-muted">
                Let&apos;s talk about what your system needs.
              </p>
              <Button href="/contact" variant="primary" className="mt-5 w-full justify-center" showArrow>
                Schedule a Discovery Call
              </Button>
            </GlassCard>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="pb-24">
          <Container>
            <Reveal>
              <SectionLabel>Related Projects</SectionLabel>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                More case studies
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {related.map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}`} className="group">
                  <GlassCard className="flex items-center justify-between gap-4 p-6">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-accent">
                        {p.industry}
                      </p>
                      <h3 className="mt-1 font-display font-semibold">{p.shortTitle}</h3>
                    </div>
                    <ArrowUpRight className="size-5 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-text" />
                  </GlassCard>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
