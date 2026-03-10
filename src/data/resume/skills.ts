import type { SkillGroup } from "./types";

export const skills = {
  id: "skills",
  command: "list_skills --category=core",
  title: "Habilidades y Procesos",
  groups: [
    {
      id: "01",
      title: "Frontend",
      items: [
        "React / Next.js",
        "TypeScript",
        "Tailwind / UI Design",
        "Gestión de Estado (Zustand)",
      ],
    },
    {
      id: "02",
      title: "Backend",
      items: [
        "Go (Golang) / Node.js",
        "Arquitectura de Microservicios",
        "gRPC / REST APIs",
        "Sistemas Distribuidos",
      ],
    },
    {
      id: "03",
      title: "Infraestructura",
      items: [
        "Docker / Kubernetes",
        "Cloud (AWS / GCP)",
        "Terraform (IaC)",
        "CI/CD Pipelines",
      ],
    },
    {
      id: "04",
      title: "Datos & Otros",
      items: [
        "PostgreSQL / Redis",
        "Kafka / Mensajería",
        "Ingeniería de Software",
        "Liderazgo Técnico",
      ],
    },
  ] satisfies SkillGroup[],
} as const;
