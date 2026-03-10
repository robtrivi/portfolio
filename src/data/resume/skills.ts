import type { SkillGroup } from "./types";

export const skills = {
  id: "skills",
  command: "list_skills --category=core",
  title: "Tecnologías",
  groups: [
    {
      id: "01",
      title: "Frontend",
      items: [
        "Angular / React / Next.js",
        "TypeScript / JavaScript moderno",
        "HTML / CSS",
        "Tailwind CSS / Bootstrap",
      ],
    },
    {
      id: "02",
      title: "Backend",
      items: [
        "Django / Django REST Framework / FastAPI",
        "Node.js / Go / Spring",
        "APIs REST / Integraciones",
        "Autenticación / Roles / Pagos",
      ],
    },
    {
      id: "03",
      title: "Mobile",
      items: [
        "Ionic / Capacitor",
        "Flutter",
        "Kotlin",
        "Aplicaciones híbridas y conectadas a APIs",
      ],
    },
    {
      id: "04",
      title: "Datos",
      items: [
        "PostgreSQL / MySQL / MariaDB / SQLite",
        "Redis",
        "RabbitMQ / Kafka",
        "Modelado de datos / Optimización SQL",
      ],
    },
    {
      id: "05",
      title: "Infraestructura",
      items: [
        "Linux / VPS / Nginx",
        "Docker / Docker Compose / Kubernetes",
        "GitHub Actions / CI/CD",
        "AWS / GCP / Terraform",
      ],
    },
  ] satisfies SkillGroup[],
} as const;

export const approach = {
  id: "approach",
  command: "list_processes --category=workflow",
  title: "Enfoque Técnico",
  groups: [
    {
      id: "01",
      title: "Desarrollo",
      items: [
        "Desarrollo full stack",
        "Diseño e implementación de interfaces",
        "Diseño, construcción y consumo de APIs",
        "Integración entre sistemas",
      ],
    },
    {
      id: "02",
      title: "Calidad",
      items: [
        "Refactorización y mantenibilidad",
        "Buenas prácticas de arquitectura",
        "Optimización de rendimiento",
        "Resolución de problemas en producción",
      ],
    },
    {
      id: "03",
      title: "Trabajo técnico",
      items: [
        "Definición técnica",
        "Code review y mentoría",
        "Liderazgo técnico",
        "Trabajo colaborativo",
      ],
    },
  ] satisfies SkillGroup[],
} as const;
