import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills across frontend, backend, database, cloud, DevOps, architecture, testing, and UI/UX for Umer Farooq.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  return (
    <>
      <section className="pt-16 pb-10 md:pt-24">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionLabel>Skills</SectionLabel>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Tools of the trade
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              A working full-stack toolkit, weighted toward backend
              architecture and database design.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, i) => (
              <Reveal key={group.category} delay={(i % 3) * 0.08}>
                <GlassCard className="h-full p-6">
                  <h2 className="font-display text-lg font-semibold text-accent">
                    {group.category}
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border px-3 py-1.5 text-sm text-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
