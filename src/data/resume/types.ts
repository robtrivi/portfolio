export type Availability = {
  label: string;
  value: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  items: string[];
};

export type Experience = {
  period: string;
  company: string;
  role: string;
  summary: string;
  stack: string[];
  current?: boolean;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  cta: string;
  stack: string[];
};

export type SocialLink = {
  label: string;
  value: string;
  href: string;
  icon: "github" | "linkedin";
};
