import {
  Factory,
  HeartPulse,
  Landmark,
  Wheat,
  Building2,
  Store,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";

const industries = [
  {
    label: "Government & Public Sector",
    icon: Landmark,
    description: "Auditable, role-based platforms for regulated, multi-stakeholder operations.",
  },
  {
    label: "Agriculture & Trading",
    icon: Wheat,
    description: "Market, auction, and commodity systems built for high transaction volume.",
  },
  {
    label: "Manufacturing",
    icon: Factory,
    description: "Inventory, production, and workflow systems that track real-world operations.",
  },
  {
    label: "Healthcare",
    icon: HeartPulse,
    description: "Scheduling and records systems that hold up under compliance requirements.",
  },
  {
    label: "Finance & Recovery",
    icon: Building2,
    description: "Transactional platforms where data integrity and reporting accuracy are non-negotiable.",
  },
  {
    label: "Growing Businesses",
    icon: Store,
    description: "Replacing spreadsheets with a single system of record as headcount scales.",
  },
];

export function Industries() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <Reveal className="max-w-lg">
          <SectionLabel>Industries We Serve</SectionLabel>
          <h2 className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl">
            Software for the operations behind your industry
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <Reveal key={industry.label} delay={i * 0.05}>
              <GlassCard className="flex h-full flex-col gap-3 px-6 py-6">
                <industry.icon className="size-5 text-accent" aria-hidden="true" />
                <span className="text-sm font-medium text-text">
                  {industry.label}
                </span>
                <p className="text-sm leading-relaxed text-muted">
                  {industry.description}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
