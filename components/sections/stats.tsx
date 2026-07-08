import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const stats = [
  { value: 2, suffix: "+", label: "Years of professional experience" },
  { value: 6, suffix: "", label: "Projects shipped end to end" },
  { value: 4, suffix: "", label: "Industries served" },
  { value: 20, suffix: "+", label: "Technologies across the stack" },
];

export function Stats() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center">
              <div className="font-display text-4xl font-semibold text-gradient sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
