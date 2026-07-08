export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  industry: string;
  role: string;
  duration: string;
  featured: boolean;
  summary: string;
  problem: string[];
  solution: string;
  modules: string[];
  responsibilities: string[];
  architecture: string;
  challenges: { title: string; detail: string }[];
  outcome: string[];
  techStack: string[];
  images: ProjectImage[];
  liveNote?: string;
};

export type LightProject = {
  title: string;
  period: string;
  description: string;
  techStack: string[];
  link?: string;
};

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  relatedProjectSlug?: string;
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type Service = {
  title: string;
  description: string;
  bullets: string[];
  relatedProjectSlug?: string;
};
