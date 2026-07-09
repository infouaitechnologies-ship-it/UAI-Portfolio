import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";

const steps = [
  {
    number: "01",
    title: "Discovery & Business Analysis",
    description:
      "We study the workflow being replaced — market operations, HR processes, inventory, collections — and where it actually breaks down, before writing a line of code.",
  },
  {
    number: "02",
    title: "Solution Architecture",
    description:
      "Database schema, module boundaries, and role-based access get designed up front, so the system scales without a rewrite later.",
  },
  {
    number: "03",
    title: "Build & Quality Assurance",
    description:
      "Backend, APIs, and interface get built together in tight iterations, with working software and structured testing at every stage.",
  },
  {
    number: "04",
    title: "Deployment & Training",
    description:
      "We handle production deployment and walk your team through the system, so day one is smooth, not a surprise.",
  },
  {
    number: "05",
    title: "Long-Term Support",
    description:
      "Production support and iteration continue after launch — your system evolves as your operation does, not just once.",
  },
];

export function Process() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="mt-4 max-w-lg text-3xl font-medium tracking-tight sm:text-4xl">
            A consulting process built for systems that have to keep running
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <GlassCard className="h-full p-6">
                <span className="font-serif-display text-2xl font-medium text-accent">
                  {step.number}
                </span>
                <h3 className="mt-4 font-serif-display text-lg font-medium">
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
