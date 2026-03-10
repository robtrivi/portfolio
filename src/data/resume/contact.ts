import type { SocialLink } from "./types";

export const contact = {
  id: "contact",
  command: "contact --method=email",
  email: "info@robtrivi.com",
  socials: [
    {
      label: "Source",
      value: "github/robtrivi",
      href: "https://github.com/robtrivi",
      icon: "github",
    },
    {
      label: "Network",
      value: "linkedin/robtrivi",
      href: "https://linkedin.com/in/robtrivi",
      icon: "linkedin",
    },
  ] satisfies SocialLink[],
} as const;
