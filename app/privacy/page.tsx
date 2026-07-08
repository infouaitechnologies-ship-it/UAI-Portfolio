import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for umerfarooq.dev.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-2xl">
        <SectionLabel>Legal</SectionLabel>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted-2">Last updated: July 2026</p>

        <div className="mt-10 flex flex-col gap-8 text-muted">
          <div>
            <h2 className="font-display text-lg font-semibold text-text">
              What this site collects
            </h2>
            <p className="mt-2 leading-relaxed">
              This site does not use tracking cookies or third-party
              analytics by default. If you use the contact form, the details
              you enter (name, email, project description) are sent directly
              to my email via your own email client — they are not stored on
              a server by this site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-text">
              How contact information is used
            </h2>
            <p className="mt-2 leading-relaxed">
              Information you send through the contact form or by email is
              used only to respond to your inquiry. It is not shared with
              third parties or used for marketing without your consent.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-text">
              Hosting and infrastructure
            </h2>
            <p className="mt-2 leading-relaxed">
              This site is a static Next.js application. Depending on the
              hosting provider used, standard server logs (such as IP address
              and request metadata) may be collected automatically by the
              hosting infrastructure, independent of this site&apos;s own
              code.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-text">
              Contact
            </h2>
            <p className="mt-2 leading-relaxed">
              Questions about this policy can be sent to{" "}
              <a href={`mailto:${site.email}`} className="text-accent hover:underline">
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
