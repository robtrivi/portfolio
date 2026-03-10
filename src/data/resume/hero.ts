import type { Availability } from "./types";

export const hero = {
  command: "cat profile.txt",
  logs: [
    "[info] Cargando perfil profesional...",
    "[info] Graduado en Ciencias Computacionales",
  ],
  firstName: "Robespierre",
  lastName: "Trivino",
  role: "Ingeniero de Software | CS Graduate",
  summary:
    "Graduado en Ciencias Computacionales. Más allá de escribir código, me enfoco en los procesos de ingeniería que permiten construir software sólido y mantenible. He liderado proyectos y desarrollado soluciones de forma autónoma, desde herramientas académicas hasta sistemas escalables, siempre con un enfoque estructurado y orientado a resultados.",
  availability: [
    { label: "Trabajo Remoto", value: "Disponible" },
    { label: "Ubicación", value: "Ecuador" },
  ] satisfies Availability[],
} as const;
