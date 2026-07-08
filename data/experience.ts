import { ExperienceEntry } from "@/types";

export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineer",
    company: "Punjab Information Technology Board (PITB)",
    period: "Oct 2025 — Present",
    location: "Punjab, Pakistan",
    summary:
      "Full-stack development on government digital services, including the e-Auction market management platform.",
    responsibilities: [
      "Design and implement responsive frontends for public-sector systems.",
      "Build secure, efficient backends and optimize databases for production workloads.",
      "Ensure a seamless user experience across citizen- and staff-facing tools.",
      "Write unit tests to maintain code quality and support continuous integration.",
    ],
    technologies: ["ASP.NET Core MVC", "C#", "SQL Server", "Dapper", "SignalR", "JavaScript"],
    relatedProjectSlug: "e-auction-market-management-system",
  },
  {
    role: "Software Engineer",
    company: "Cybersoft North America",
    period: "Apr 2025 — 2025",
    summary:
      "Backend-focused engineering on enterprise collection and recovery software for U.S. clients.",
    responsibilities: [
      "Built, maintained, and optimized web applications using ASP.NET and SQL Server.",
      "Wrote efficient SQL queries and stored procedures for enterprise-scale data.",
      "Ensured smooth system performance and data integrity in production.",
    ],
    technologies: ["ASP.NET MVC", "C#", ".NET Framework", "SQL Server", "Angular"],
    relatedProjectSlug: "qontango-debt-recovery-platform",
  },
  {
    role: "Software Engineer",
    company: "Top Edge Technologies",
    period: "2024 — 2025",
    summary:
      "Full-stack development across HR and business-management platforms.",
    responsibilities: [
      "Developed full-stack applications with MVC ASP.NET, C#, and SQL Server.",
      "Built and managed REST APIs for backend communication.",
      "Optimized MVC CSHTML, JavaScript, and Bootstrap on the frontend.",
      "Improved SQL Server performance and scalability.",
      "Used Git/GitHub for version control and team collaboration.",
    ],
    technologies: ["ASP.NET MVC", "C#", "SQL Server", "Bootstrap", "JavaScript", "Git"],
    relatedProjectSlug: "hrango-hr-management-system",
  },
];

export const education = {
  degree: "BS Information Technology",
  institution: "Muhammad Nawaz Sharif University of Agriculture",
  period: "2020 — 2024",
  gpa: "3.75 / 4.00",
};

export const award = {
  title: "PSEB Selection",
  issuer: "Pakistan Software Export Board (PSEB)",
  description:
    "Elected through a nationwide competitive exam conducted by PSEB, a government test for final-year CS and IT students.",
};
