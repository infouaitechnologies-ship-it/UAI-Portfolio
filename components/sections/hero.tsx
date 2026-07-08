"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import { NodeNetwork } from "@/components/ui/node-network";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-20">
      <div
        className="pointer-events-none absolute inset-0 grid-glow [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/25 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-accent/20 blur-[110px]"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Full-Stack Software Engineer</SectionLabel>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]"
          >
            <span className="text-gradient">Enterprise systems</span> for teams
            that can&apos;t afford downtime.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            I design and build the software behind government market
            operations, HR platforms, and financial recovery systems —
            architecture, backend, and interface, built and supported by one
            engineer end to end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="/projects" variant="primary" showArrow>
              View Projects
            </Button>
            <Button href="/contact" variant="secondary">
              Book Consultation
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="glass animate-float rounded-3xl p-4 sm:p-6">
            <NodeNetwork />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
