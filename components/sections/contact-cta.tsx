import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function ContactCTA() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16">
            <div
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/30 blur-[100px]"
              aria-hidden="true"
            />
            <h2 className="relative font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Have a system worth digitizing?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-muted">
              Let&apos;s talk about what&apos;s slow, manual, or fragile in your
              current process — and what it would take to fix it properly.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary" showArrow>
                Book Consultation
              </Button>
              <Button href="/projects" variant="secondary">
                See the work first
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
