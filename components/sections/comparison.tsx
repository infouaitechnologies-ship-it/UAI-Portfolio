import { Check, X, Minus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Row = {
  label: string;
  offTheShelf: "yes" | "no" | "partial";
  custom: "yes" | "no" | "partial";
};

const rows: Row[] = [
  { label: "Ownership of the system", offTheShelf: "no", custom: "yes" },
  { label: "Fits your exact workflow", offTheShelf: "partial", custom: "yes" },
  { label: "Scales with your operations", offTheShelf: "partial", custom: "yes" },
  { label: "Integrates with what you already run", offTheShelf: "partial", custom: "yes" },
  { label: "Cost predictability over 5+ years", offTheShelf: "no", custom: "yes" },
  { label: "Performance under your real load", offTheShelf: "partial", custom: "yes" },
  { label: "Free of vendor lock-in and licensing risk", offTheShelf: "no", custom: "yes" },
];

const icons = {
  yes: <Check className="size-4" aria-hidden="true" />,
  no: <X className="size-4" aria-hidden="true" />,
  partial: <Minus className="size-4" aria-hidden="true" />,
};

function Cell({ status, emphasis }: { status: Row["offTheShelf"]; emphasis?: boolean }) {
  const color =
    status === "yes"
      ? emphasis
        ? "text-accent"
        : "text-text"
      : status === "no"
        ? "text-muted-2"
        : "text-muted";

  return (
    <span className={cn("inline-flex items-center gap-2 text-sm", color)}>
      {icons[status]}
      <span className="sr-only">{status === "yes" ? "Yes" : status === "no" ? "No" : "Partial"}</span>
    </span>
  );
}

export function Comparison() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container>
        <Reveal className="max-w-xl">
          <SectionLabel>Off-the-Shelf vs. Custom</SectionLabel>
          <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
            Why businesses outgrow off-the-shelf software
          </h2>
          <p className="mt-4 text-muted">
            Packaged software is fast to start with — and fine, until your
            workflow doesn&apos;t fit the tool, or the licensing bill outgrows
            what a custom system would have cost.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 overflow-hidden rounded-xl border border-border">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-surface-2">
                <th scope="col" className="px-6 py-4 text-sm font-medium text-muted">
                  &nbsp;
                </th>
                <th scope="col" className="px-6 py-4 text-sm font-medium text-muted">
                  Off-the-Shelf
                </th>
                <th scope="col" className="px-6 py-4 text-sm font-medium text-text">
                  Custom-Built
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={cn(i !== rows.length - 1 && "border-b border-border")}
                >
                  <th scope="row" className="px-6 py-4 text-sm font-normal text-text">
                    {row.label}
                  </th>
                  <td className="px-6 py-4">
                    <Cell status={row.offTheShelf} />
                  </td>
                  <td className="px-6 py-4">
                    <Cell status={row.custom} emphasis />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Container>
    </section>
  );
}
