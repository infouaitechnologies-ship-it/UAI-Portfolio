"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What kind of projects do you take on?",
    answer:
      "Enterprise and business-critical systems — government platforms, HR and workforce tools, financial/recovery systems, and healthcare scheduling — where the backend, data model, and reliability matter as much as the interface.",
  },
  {
    question: "Do you work with clients outside Pakistan?",
    answer:
      "Yes. I've worked directly with U.S.-based collection agencies on the Qontango platform, and I'm set up to work async across time zones with clear milestones and regular check-ins.",
  },
  {
    question: "What does your tech stack look like?",
    answer:
      "Backend work is primarily ASP.NET (Core & MVC), C#, and SQL Server, often with Dapper or Entity Framework. On the frontend I use React, and this site itself is built with Next.js 15, TypeScript, and Tailwind CSS.",
  },
  {
    question: "Do you handle the whole project, or just development?",
    answer:
      "On e-Auction I owned everything — architecture, database, backend, frontend integration, and production support. On team projects like Hrango and Qontango, I've owned specific modules end to end within a larger codebase. Either way, I can scope, build, and support.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a consultation through the contact page. I'll ask about your current process, where it's breaking down, and what a working first version should cover — then follow up with a scoped plan.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28">
      <Container className="max-w-3xl">
        <Reveal className="text-center">
          <SectionLabel className="justify-center">FAQ</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Common questions
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-border rounded-2xl border border-border">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-text">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "size-5 shrink-0 text-muted transition-transform duration-300",
                      isOpen && "rotate-180 text-accent"
                    )}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
