import type { Project } from "./types";

export const projects = {
  id: "projects",
  command: "ls ./proyectos",
  items: [
    {
      id: "Proyecto_01",
      title: "Herramienta de Ingeniería Universitaria",
      description:
        "Software desarrollado de forma autónoma para optimizar procesos académicos. Una herramienta de uso real que nació en la universidad y que aplico para resolver problemas estructurales en el desarrollo.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBPbz-H1s5LP61gV7IDYc6hX5JOUaGcQptmN0F3eQyvLwvajjrsBUuvC3mxumnEM_07tQzwp6mB6DQsPZgLzuGUJf68ZeA_XjW8yuBiLzH2aS6tD1_uN89S7GnMjxKPid_85Zus5vMkLp1zwc4npb6wzZ-3UAY3se7CyhKmoKpZABZWY03zTs9c-sACqF6ha7eXRQ886kZfWjQynbf9xFdxesEiOz6w_pzIxveXc_G53Y8k3YSTfttCEFJyYA7HQDQUk4Y6xKp4mkk",
      imageAlt: "Dashboard de Herramienta Académica",
      href: "#contact",
      cta: "Ver detalles del proyecto",
      stack: ["Python", "SQLite", "Qt"],
    },
    {
      id: "Proyecto_02",
      title: "Orquestador de Datos en Tiempo Real",
      description:
        "Diseño y liderazgo del desarrollo de un pipeline de datos distribuido. Enfocado en la fiabilidad de los procesos y la observabilidad del sistema completo.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBa6loZtoFFdkiI6lZwl6cCPID7pjqbkz2vRfz_9B5D3OMxlTFKb_3JHLwJZlwZigVIbN03JPaeo8nNqpQ26dY8RiNpTry0SoUJaR9YDwOgOeRoCe4QdhaVr9CksWzbvN3RjguZm1l4YA29jZ7XvibrJJuoTXac0VRaK65w2I-KWn0GZeeAYeAOFBxLO74oHPTR-G7I9kn_KWaoG5u8JGlN0G3NiYVEmAyGW-IPY3YZqriIZtssfijgbpJVVYmxxoDQbB_2NxsEiWY",
      imageAlt: "Visualizador de pipeline de datos",
      href: "#contact",
      cta: "Ver detalles del proyecto",
      stack: ["Go", "Kafka", "PostgreSQL"],
    },
  ] satisfies Project[],
} as const;
