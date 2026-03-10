import { contact } from "./resume/contact";
import { experience } from "./resume/experience";
import { footer } from "./resume/footer";
import { header } from "./resume/header";
import { hero } from "./resume/hero";
import { projects } from "./resume/projects";
import { skills, approach } from "./resume/skills";

export * from "./resume/types";

export const resume = {
  seo: {
    title: "Robespierre Trivino | Software Engineer",
    description:
      "Portafolio de Robespierre Trivino, graduado en Ciencias Computacionales enfocado en ingeniería de software, procesos y desarrollo de productos escalables.",
  },
  header,
  hero,
  skills,
  approach,
  experience,
  projects,
  contact,
  footer,
} as const;
