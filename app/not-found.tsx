import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center py-24">
      <Container className="text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-accent">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          This page isn&apos;t in the system.
        </h1>
        <p className="mt-4 text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Button href="/" variant="primary" className="mt-8 inline-flex">
          Back to home
        </Button>
      </Container>
    </section>
  );
}
