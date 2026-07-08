import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";

const marks = [
  "Punjab IT Board",
  "Cybersoft North America",
  "Top Edge Technologies",
  "e-Auction",
  "Hrango",
  "Qontango",
];

export function TrustedBy() {
  return (
    <section className="border-y border-border bg-bg-soft/60 py-10">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-2">
            Systems built and shipped at
          </p>
        </Reveal>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {marks.map((mark, i) => (
            <Reveal key={mark} delay={i * 0.05}>
              <span className="font-display text-sm font-medium tracking-wide text-muted/80 transition-colors hover:text-text sm:text-base">
                {mark}
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
