import type { Experience } from "./types";

export const experience = {
  id: "experience",
  command: "history --professional",
  title: "Trayectoria Profesional",
  items: [
    {
      period: "2022 - Presente",
      company: "Techglobal Solutions",
      role: "Software Architect & Lead Engineer",
      summary:
        "Responsable de definir procesos de ingeniería y diseñar arquitecturas escalables. He liderado la migración de sistemas monolíticos a microservicios, mejorando significativamente la eficiencia operativa y la escalabilidad del producto.",
      stack: ["Go", "K8s", "AWS"],
      current: true,
    },
    {
      period: "2020 - 2022",
      company: "Innovate Corp",
      role: "Fullstack Developer (Fintech)",
      summary:
        "Desarrollo integral de plataformas financieras, con énfasis en seguridad y manejo eficiente de datos. Implementación de flujos de trabajo automatizados que redujeron el tiempo de despliegue y errores en producción.",
      stack: ["React", "Node.js", "Postgres"],
    },
  ] satisfies Experience[],
} as const;
