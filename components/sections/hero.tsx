"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";

const proofPoints = [
  { value: "6", label: "Business systems shipped end to end" },
  { value: "6", label: "Industries, from government to retail" },
  { value: "0", label: "Handoffs — one team, start to finish" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border pb-16 pt-14 md:pb-24 md:pt-20">
      <div
        className="pointer-events-none absolute inset-0 grid-texture opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_75%)]"
        aria-hidden="true"
      />

      <Container className="relative grid items-start gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>Enterprise Software Consulting</SectionLabel>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 max-w-xl text-4xl font-medium leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.15rem]"
          >
            We replace manual operations with software built for how your business actually runs.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
          >
            UAI Technologies designs and builds enterprise applications —
            ERP, HR, inventory, and financial systems — for businesses and
            government organizations ready to move past spreadsheets and
            disconnected tools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="/contact" variant="primary" showArrow>
              Schedule a Discovery Call
            </Button>
            <Button href="/projects" variant="secondary">
              Review Our Case Studies
            </Button>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8"
          >
            {proofPoints.map((point) => (
              <div key={point.label}>
                <dt className="sr-only">{point.label}</dt>
                <dd className="font-serif-display text-3xl font-medium text-text">
                  {point.value}
                </dd>
                <p className="mt-1 text-xs leading-snug text-muted-2">
                  {point.label}
                </p>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-surface rounded-xl p-7"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-2">
            What we take on
          </p>
          <ul className="mt-5 flex flex-col gap-4">
            {[
              ["ERP & Business Management", "Operations, records, and reporting in one system."],
              ["HR & Workforce Systems", "Attendance, scheduling, and staff records, structured."],
              ["Government & Public-Sector", "Auditable platforms for regulated operations."],
              ["Financial & Recovery Platforms", "Transactional systems built for accuracy at scale."],
            ].map(([title, desc]) => (
              <li key={title} className="border-b border-border pb-4 last:border-0 last:pb-0">
                <p className="text-sm font-medium text-text">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{desc}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </section>
  );
}
