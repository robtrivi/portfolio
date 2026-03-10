import type { Project } from "./types";
import poliplanificaImg from "@assets/images/poliplanifica.png";
import polirecomiendaImg from "@assets/images/polirecomienda.png";

export const projects = {
  id: "projects",
  command: "ls ./proyectos",
  items: [
    {
      id: "Poliplanifica",
      title: "Poliplanifica",
      description:
        "Extensión de navegador que integra un botón dinámico en el sistema oficial de la universidad para generar y visualizar horarios de forma interactiva mientras se seleccionan materias.",
      image: poliplanificaImg,
      imageAlt: "Dashboard de Poliplanifica",
      href: "https://cancebit.com/blog/origen-de-poliplanifica-automatizacion/",
      cta: "Ver detalles del proyecto",
      stack: ["JavaScript", "Browser Extensions", "DOM Manipulation"],
    },
    {
      id: "Polirecomienda",
      title: "Polirecomienda",
      description:
        "Herramienta diseñada para visualizar y comparar la opinión de los estudiantes sobre los profesores, utilizando el sistema de puntajes oficial para facilitar la toma de decisiones.",
      image: polirecomiendaImg,
      imageAlt: "Visualizador de Polirecomienda",
      href: "https://polirecomienda.robtrivi.com/",
      cta: "Ver proyecto",
      stack: ["Python", "Web Scraping", "Data Visualization"],
    },
  ] satisfies Project[],
} as const;
