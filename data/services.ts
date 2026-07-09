import { Service } from "@/types";

export const services: Service[] = [
  {
    title: "ASP.NET Web Application Development",
    problem:
      "Manual processes and disconnected spreadsheets slow teams down and introduce errors that compound over time.",
    description:
      "Custom web applications built on ASP.NET, designed around your actual business processes — from the database up to the interface your team uses every day.",
    bullets: [
      "Requirements-to-architecture planning for your workflows",
      "Full-stack ASP.NET development, backend to UI",
      "Ongoing production support and iteration",
    ],
    outcome: "A single system of record your team actually trusts.",
    relatedProjectSlug: "e-auction-market-management-system",
  },
  {
    title: "Business Management Systems",
    problem:
      "HR, inventory, and operational data live in separate spreadsheets with no shared source of truth.",
    description:
      "End-to-end platforms that bring HR, inventory, and enterprise operations into one reliable system — replacing spreadsheets and manual processes with structured, auditable workflows.",
    bullets: [
      "HR Management Systems for attendance, scheduling, and staff records",
      "Inventory Management Systems for stock, orders, and warehousing",
      "ERP systems that unify operations, reporting, and approvals",
    ],
    outcome: "Fewer manual handoffs and a clear audit trail across operations.",
    relatedProjectSlug: "hrango-hr-management-system",
  },
  {
    title: "Government & Public-Sector Platforms",
    problem:
      "Paper-heavy, manual public operations create delays, limited transparency, and reconciliation headaches.",
    description:
      "Digitizing manual, paper-heavy public operations into secure, auditable platforms built to hold up under real regulatory and reporting requirements.",
    bullets: [
      "Role-based access for multi-stakeholder operations",
      "Hardware and third-party system integration",
      "Reporting, audit logs, and compliance-ready records",
    ],
    outcome: "Faster processing with a defensible, auditable record of every transaction.",
    relatedProjectSlug: "e-auction-market-management-system",
  },
  {
    title: "Financial & Recovery Platforms",
    problem:
      "Collections and lending operations need transactional accuracy that spreadsheets and generic tools can't guarantee.",
    description:
      "Backend-heavy systems for collections, lending, and enterprise financial operations, where data integrity and performance aren't optional.",
    bullets: [
      "Enterprise-scale transactional data modeling",
      "Role-based workflows for agencies, collectors, and managers",
      "Reporting and performance tuning at scale",
    ],
    outcome: "Financial data your team can reconcile with confidence, at scale.",
    relatedProjectSlug: "qontango-debt-recovery-platform",
  },
  {
    title: "Database Design & Optimization",
    problem:
      "Systems that worked fine at low volume start timing out and locking up as production load grows.",
    description:
      "Schema design and query tuning for SQL Server and MySQL systems handling real production load, so your business systems stay fast as they grow.",
    bullets: [
      "Normalized schema design for complex business domains",
      "Stored procedures for reporting at scale",
      "Query performance auditing and tuning",
    ],
    outcome: "Systems that stay fast as data volume and users grow.",
  },
  {
    title: "Cloud Deployment & Ongoing Support",
    problem:
      "A system that only works on a developer's laptop isn't a system your business can run on.",
    description:
      "Getting your business applications deployed, monitored, and reliable — plus advisory support as your systems and requirements evolve.",
    bullets: [
      "Deployment on Azure, Vercel, and other cloud platforms",
      "Environment setup and configuration management",
      "Consulting for teams planning their next system",
    ],
    outcome: "A production system that stays up, plus a partner when requirements change.",
  },
];
