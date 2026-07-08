import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";

const steps = [
  {
    number: "01",
    title: "Discover & Scope",
    description:
      "I dig into the actual workflow being replaced — market operations, HR processes, collections — before writing a line of code.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "Database schema, module boundaries, and role-based access get designed up front, so the system scales without a rewrite.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Backend, APIs, and interface get built together in tight iterations, with working software to review at every stage.",
  },
  {
    number: "04",
    title: "Ship & Support",
    description:
      "Testing, deployment, and production support are part of the job — not handed off once the code is written.",
  },
];

export function Process() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionLabel>How I Work</SectionLabel>
          <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
            A process built for systems that have to keep running
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1}>
              <GlassCard className="h-full p-6">
                <span className="font-display text-3xl font-semibold text-primary-soft/70">
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
