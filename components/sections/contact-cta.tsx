import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function ContactCTA() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="border border-border-strong bg-[var(--color-invert-bg)] px-8 py-16 text-center text-[var(--color-invert-text)] sm:px-16">
            <h2 className="font-serif-display text-3xl font-medium tracking-tight sm:text-4xl">
              Have a process worth digitizing?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-invert-text)]/70">
              Let&apos;s talk about what&apos;s slow, manual, or fragile in your
              current operations — and what a properly built system would
              take to deliver.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/contact"
                variant="secondary"
                showArrow
                className="border-[var(--color-invert-text)]/25 text-[var(--color-invert-text)] hover:bg-[var(--color-invert-text)]/10"
              >
                Schedule a Discovery Call
              </Button>
              <Button
                href="/projects"
                variant="ghost"
                className="text-[var(--color-invert-text)]/70 hover:text-[var(--color-invert-text)]"
              >
                See our case studies
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
