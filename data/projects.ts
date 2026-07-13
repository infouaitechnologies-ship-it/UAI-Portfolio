import { LightProject, Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "e-auction-market-management-system",
    title: "e-Auction —  Market Management System",
    shortTitle: "e-Auction",
    industry: "Government & Public Sector · Agriculture",
    role: "Sole Full-Stack Developer & System Architect",
    duration: "Nov 2025 — Present",
    featured: true,
    summary:
      "A market management platform that digitizes wholesale agricultural market (Mandi) operations for Punjab — built independently end to end, from database architecture to live electronic auctions, accounting, and tax collection.",
    problem: [
      "Manual market operations caused delays and recording errors.",
      "Auction and pricing had limited transparency for sellers and buyers.",
      "Tax collection and financial tracking were difficult to reconcile.",
      "Market records and reporting were fragmented across paper and spreadsheets.",
      "Government stakeholders needed a secure, centralized system of record.",
    ],
    solution:
      "An end-to-end digital ecosystem that centralizes market administration, commodity movement, live e-auctions, accounting, taxation, and role-based reporting into a single enterprise platform — with vehicle and consignment tracking layered on top for full chain-of-custody visibility.",
    modules: [
      "User & Role Management",
      "Market Administration",
      "Commodity Management",
      "Market In / Market Out & Weighbridge Integration",
      "Live e-Auction Dashboard",
      "Vehicle & Consignment Tracking",
      "Price Management",
      "Accounting & Financial Records",
      "Tax Collection",
      "Reports & Audit Logs",
    ],
    responsibilities: [
      "Designed the complete SQL Server database architecture from scratch.",
      "Designed the system architecture and end-to-end business workflows.",
      "Built the backend using ASP.NET Core MVC and C#.",
      "Implemented high-performance data access with Dapper.",
      "Built role-based authentication and authorization (RBAC).",
      "Wrote the APIs and core business logic powering every module.",
      "Optimized SQL queries and stored procedures for reporting at scale.",
      "Integrated the frontend with backend services and third-party weighbridge hardware.",
      "Owned testing, debugging, and live production support.",
    ],
    architecture:
      "A modular ASP.NET Core MVC application backed by a normalized SQL Server schema, with Dapper handling high-throughput data access and stored procedures carrying the heavier reporting and reconciliation logic. Role- and policy-based authorization gates every module, so market administrators, auctioneers, commission agents, and tax officers each see only what their role permits — a requirement for a system handling live government financial transactions.",
    challenges: [
      {
        title: "Real-time auction integrity",
        detail:
          "Live e-auctions need every bid reflected instantly and accurately, with no double-booking of lots — this drove the live auction dashboard and lot-wise tracking design.",
      },
      {
        title: "Hardware integration",
        detail:
          "Weighbridge integration meant reconciling physical sensor data with digital consignment records without manual re-entry.",
      },
      {
        title: "Financial accuracy at scale",
        detail:
          "Accounting, tax collection, and commission-agent reporting all had to reconcile against the same underlying transactions — solved with carefully normalized schemas and stored-procedure-driven aggregation.",
      },
    ],
    outcome: [
      "Digitized a previously manual, paper-based government market process end to end.",
      "Improved operational efficiency and pricing transparency for buyers and sellers.",
      "Streamlined accounting and tax collection into a single reconciled system.",
      "Gave administrators centralized reporting and audit trails across every market.",
      "Delivered as a maintainable, scalable platform built and supported by one engineer.",
    ],
    techStack: [
      "ASP.NET Core MVC",
      "C#",
      ".NET",
      "Dapper",
      "SQL Server",
      "Stored Procedures",
      "SignalR",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "Git",
    ],
    liveNote:
      "Live production system deployed for Punjab's wholesale agricultural markets, built while working at the Punjab Information Technology Board.",
    images: [
      { src: "/images/projects/eauction/dashboard.webp", alt: "e-Auction platform landing page", caption: "Public-facing landing page for the Mandi e-Auction platform." },
      { src: "/images/projects/eauction/dashboard.webp", alt: "e-Auction admin dashboard", caption: "Central administration dashboard with market KPIs." },
      { src: "/images/projects/eauction/auction-overview.webp", alt: "Live e-auction overview screen", caption: "Live e-auction overview showing active lots and bidding status." },
      { src: "/images/projects/eauction/lot-wise-list.webp", alt: "Lot-wise auction listing", caption: "Lot-wise auction list with commodity and pricing detail." },
      { src: "/images/projects/eauction/weight-bridges.webp", alt: "Weighbridge integration screen", caption: "Weighbridge integration reconciling physical and digital consignment records." },
      { src: "/images/projects/eauction/auction-analysis.webp", alt: "Auction analysis report with graphs", caption: "Auction analysis reporting with trend graphs for market officers." },
      { src: "/images/projects/eauction/commission-agent.webp", alt: "Commission agent auctions report", caption: "Commission-agent auction report used for reconciliation and audit." },
    ],
  },
  {
    slug: "hrango-hr-management-system",
    title: "Hrango — Human Resource Management System",
    shortTitle: "Hrango",
    industry: "HR Technology · SaaS",
    role: "Frontend & Full-Stack Developer",
    duration: "Aug 2024 — Mar 2025",
    featured: true,
    summary:
      "A comprehensive HRMS handling attendance, payroll, shift scheduling, employee ID cards, and staff requests — we owned the Employee Card, Shift Management, and Request Management modules end to end.",
    problem: [
      "HR teams needed a single system for attendance, payroll, and scheduling instead of scattered spreadsheets.",
      "Print-ready, branded employee ID cards had to be generated on demand.",
      "Shift creation needed business-rule validation to prevent overlapping or duplicate shifts.",
      "Employee requests (leave, changes, approvals) needed a trackable workflow instead of email chains.",
    ],
    solution:
      "A modular HRMS where we built responsive, print-friendly employee cards with QR/barcode support, a shift management system with built-in validation, and a request management workflow with history tracking and administrator approvals — all wired into the shared attendance, payroll, and announcements platform.",
    modules: [
      "Employee Card Design & Generation",
      "Shift Management",
      "Request Management",
      "Attendance & Roster Scheduling",
      "Staff Directory",
      "Announcements",
    ],
    responsibilities: [
      "Designed responsive employee cards with company branding and QR/Barcode support.",
      "Built print-friendly layouts for physical ID card production.",
      "Developed create, update, and manage functionality for shift scheduling.",
      "Configured working hours, break times, and shift-conflict validation.",
      "Built employee request interfaces with history and status tracking.",
      "Implemented administrator approval workflows for staff requests.",
      "Handled frontend validation and integration with the backend API.",
    ],
    architecture:
      "Server-rendered ASP.NET MVC with Razor views on the frontend, backed by Entity Framework over SQL Server. The modules we owned — employee cards, shift management, and requests — each pair a Razor UI with validated form submissions and role-aware approval logic on the backend, so HR staff and employees see the same data through different permission lenses.",
    challenges: [
      {
        title: "Print-friendly employee cards",
        detail:
          "Getting a card layout that renders correctly both on screen and on physical card printers, with QR/barcode data staying scannable at print resolution.",
      },
      {
        title: "Shift scheduling business rules",
        detail:
          "Preventing invalid or duplicate shifts while still allowing HR flexibility to configure varied working hours and break patterns.",
      },
      {
        title: "Intuitive request workflows",
        detail:
          "Designing a request-and-approval flow simple enough for non-technical staff while giving administrators full status visibility.",
      },
    ],
    outcome: [
      "Improved day-to-day HR operational efficiency for client organizations.",
      "Reduced manual, paper-based HR processes for cards, shifts, and requests.",
      "Delivered a responsive experience usable by both HR staff and employees.",
    ],
    techStack: [
      "ASP.NET MVC",
      "Razor Views",
      "C#",
      "Entity Framework",
      "SQL Server",
      "Bootstrap",
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
    ],
    images: [
      { src: "/images/projects/hrango/hr-dashboard.webp", alt: "Hrango HR dashboard", caption: "HR dashboard summarizing attendance, staff, and scheduling data." },
      { src: "/images/projects/hrango/staff-dashboard.webp", alt: "Hrango staff dashboard", caption: "Staff-facing dashboard for attendance and requests." },
      { src: "/images/projects/hrango/roster-scheduling.webp", alt: "Roster and shift scheduling screen", caption: "Shift management screen with scheduling and validation rules." },
      { src: "/images/projects/hrango/staff-cards.webp", alt: "Staff ID cards list", caption: "Staff card list used to generate print-ready employee IDs." },
      { src: "/images/projects/hrango/employee-card.webp", alt: "Employee ID card design with QR code", caption: "Branded, print-friendly employee card with QR/barcode support." },
    ],
  },
  {
    slug: "qontango-debt-recovery-platform",
    title: "Qontango — Enterprise Debt Recovery & Collection Platform",
    shortTitle: "Qontango",
    industry: "FinTech · Collections & Recovery",
    role: "Backend Software Developer",
    duration: "Apr 2025 — Oct 2025",
    featured: true,
    summary:
      "A large-scale platform used by U.S. collection agencies to manage the full debt-recovery lifecycle for banks and lenders — we built and enhanced core backend modules spanning leads, sales, collections, and reporting.",
    problem: [
      "Collection agencies needed to manage relationships with multiple bank and lending clients in one place.",
      "Debtor tracking and recovery operations had to scale to enterprise transaction volumes.",
      "Leads, sales, collectors, and managers each needed distinct, role-appropriate workflows.",
      "Reporting and account management needed to stay accurate under heavy transactional load.",
    ],
    solution:
      "A centralized enterprise platform covering client management, lead and sales pipelines, debt recovery workflows, collector and manager operations, and role-based reporting — with backend performance and data integrity as the constant engineering priority.",
    modules: [
      "Client Management",
      "Lead Management",
      "Sales Management",
      "Collector Management",
      "Manager Operations",
      "Debt Recovery Workflows",
      "Reporting & Dashboards",
      "Account Management",
      "User & Permission Management",
    ],
    responsibilities: [
      "Developed backend business logic across multiple platform modules.",
      "Implemented new features for lead, sales, and collections workflows.",
      "Enhanced and maintained existing modules used in daily production.",
      "Resolved production issues for a live, revenue-critical system.",
      "Collaborated with cross-functional teams to ship changes safely.",
      "Optimized SQL queries and stored procedures for enterprise-scale data.",
    ],
    architecture:
      "An ASP.NET MVC application with an Angular-driven frontend layer for interactive consoles (sale console, batch console), backed by Entity Framework and MS SQL Server. Heavier reporting and reconciliation logic runs through stored procedures to keep enterprise-scale transactional queries performant, with role-based permissions separating collector, manager, and agency-level access.",
    challenges: [
      {
        title: "Enterprise-scale transactional data",
        detail:
          "Debt recovery data grows continuously across every agency and debtor — queries and stored procedures needed to stay fast as volume scaled.",
      },
      {
        title: "Complex business rules",
        detail:
          "Collections workflows encode real financial and legal constraints, so business logic changes required care and cross-team review.",
      },
      {
        title: "Scalable role-based authorization",
        detail:
          "Agencies, collectors, managers, and clients each needed distinct, enforceable permission boundaries across every module.",
      },
    ],
    outcome: [
      "Shipped enhancements across multiple core business modules in production.",
      "Improved backend performance for high-volume collection workflows.",
      "Optimized database operations supporting enterprise-scale reporting.",
      "Supported day-to-day operations for live collection agencies in the U.S.",
    ],
    techStack: [
      "ASP.NET MVC",
      "C#",
      ".NET Framework",
      "Entity Framework",
      "Microsoft SQL Server",
      "Stored Procedures",
      "Angular",
      "JavaScript",
      "Bootstrap",
    ],
    images: [
      { src: "/images/projects/qontango/agency.webp", alt: "Qontango agency management screen", caption: "Agency management view for tracking client relationships." },
      { src: "/images/projects/qontango/sales.webp", alt: "Qontango sales management screen", caption: "Sales management module tracking lead-to-close pipelines." },
      { src: "/images/projects/qontango/sale-console.webp", alt: "Qontango sale console", caption: "Sale console used by collectors during active recovery calls." },
      { src: "/images/projects/qontango/batch-console.webp", alt: "Qontango batch console", caption: "Batch console for processing debtor accounts at volume." },
      { src: "/images/projects/qontango/debtor-payment.webp", alt: "Qontango debtor payment account screen", caption: "Debtor account and payment tracking screen." },
    ],
  },
];

export const additionalProjects: LightProject[] = [
  {
    title: "Doctors Appointment System (HMS)",
    period: "2024",
    description:
      "A hospital appointment scheduling system managing patient bookings, doctor availability, and medical records, with automated scheduling, real-time availability tracking, and secure patient history handling.",
    techStack: ["React.js", "Tailwind CSS", "PHP", "SQL"],
  },
  {
    title: "Business Web Presence (Early Build)",
    period: "2024",
    description:
      "An early web platform built and deployed independently, used as a first showcase of full-stack delivery capability ahead of larger client engagements.",
    techStack: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://portfolio-peach-nine-16.vercel.app/",
  },
  {
    title: "Weather App",
    period: "2024",
    description:
      "A weather lookup app built against the OpenWeather API, covering async data fetching and clean UI states.",
    techStack: ["React.js", "OpenWeather API", "Netlify"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
