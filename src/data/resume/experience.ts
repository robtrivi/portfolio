import type { Experience } from "./types";

export const experience = {
  id: "experience",
  command: "history --professional",
  title: "Trayectoria Profesional",
  items: [
    {
      period: "2026 - Presente",
      company: "Hangaroa S.A. — Veris",
      role: "Software Engineer",
      summary:
        "Desarrollo de soluciones core para Veris, adaptándome a arquitecturas empresariales de gran escala y liderando implementaciones críticas en el ecosistema de salud.",
      stack: ["Java", "Spring Boot", "Angular", "PostgreSQL"],
      current: true,
      subItems: [
        {
          client: "Veris",
          title: "Registro de Clientes",
          summary:
            "Desarrollo del proceso de registro de clientes integrado al flujo de cotización, diseñado como un componente independiente y reutilizable dentro del sistema.",
          stack: ["Angular", "Spring Boot"],
        },
        {
          client: "Veris",
          title: "Proceso de Cotización",
          role: "Desarrollador Fullstack",
          summary:
            "Desarrollo desde cero del módulo de cotizaciones, implementando un proceso de múltiples pasos con flujos individuales y grupales, adaptado a lógicas de negocio complejas.",
          stack: ["Angular", "RxJS", "Spring Boot"],
        },
        {
          client: "Veris",
          title: "Generación de Reportes",
          role: "Desarrollador Backend",
          summary:
            "Implementación backend para la generación automatizada de reportes PDF detallados y su envío por correo electrónico mediante Spring y JasperReports.",
          stack: ["Spring Boot", "JasperReports", "SMTP"],
        },
      ],
    },
    {
      period: "2025 - 2026",
      company: "Hangaroa S.A.",
      role: "Software Engineer",
      summary:
        "Liderazgo técnico en proyectos de ticketing y gestión deportiva, responsable de la infraestructura y el ciclo de vida del software.",
      stack: ["Django", "Angular", "RabbitMQ", "Celery", "Nginx"],
      subItems: [
        {
          client: "Novagym",
          title: "Sistema de Pagos",
          summary:
            "Rediseño hacia una arquitectura orientada a señales con Place to Pay. Implementación de cobros masivos robustos y configurables mediante colas de trabajo.",
          stack: ["Django", "Arquitectura de Eventos", "Redis Queues"],
        },
        {
          client: "Novagym",
          title: "DevOps y Soporte",
          summary:
            "Configuración de entornos con systemd y servicios de réplica de BD para PowerBI. Resolución de incidentes en vivo y soporte continuo para nuevas peticiones.",
          stack: ["Systemd", "PostgreSQL", "PowerBI"],
        },
        {
          client: "Instaticket",
          title: "Infraestructura y DevOps",
          summary:
            "Configuración y despliegue integral de la infraestructura en VPS, gestionando servidores Nginx, colas con RabbitMQ y entornos segregados de producción y staging.",
          stack: ["Nginx", "RabbitMQ", "VPS", "DevOps"],
        },
        {
          client: "Instaticket",
          title: "Desarrollo desde cero",
          summary:
            "Desarrollé íntegramente la web de clientes y el flujo completo de compra, asegurando un proceso de adquisición de entradas fluido y seguro.",
          stack: ["Django", "Angular", "Nuvei", "Redis"],
        },
        {
          client: "Instaticket",
          title: "Análisis y Reportes",
          summary:
            "Diseño de pipeline robusto para volcado de datos con validación ante el Registro Civil de Ecuador. Creación del sistema de reportes con gráficas en vivo y exportación a Excel.",
          stack: ["Python", "ETL", "Excel Engine"],
        },
      ],
    },
    {
      period: "2024 - 2025",
      company: "Hangaroa S.A.",
      role: "Software Engineer Intern",
      summary:
        "Especialización en modernización de aplicaciones móviles y sistemas de gestión multi-entidad durante la etapa de pasantías.",
      stack: ["Ionic", "Django", "Nuvei", "Móvil"],
      subItems: [
        {
          client: "Novagym",
          title: "Sistema de Pedidos",
          summary:
            "Evolución y mantenimiento del sistema de pedidos, refinando la lógica inicial para soportar el crecimiento del proyecto.",
          stack: ["Django", "PostgreSQL"],
        },
        {
          client: "Escuela AKD",
          title: "Rediseño de Interfaces",
          summary:
            "Participación en la toma de nuevos requerimientos y rediseño completo de ventanas, ajustando problemas existentes de forma previa.",
          stack: ["Django", "UI Redesign", "Análisis"],
        },
        {
          client: "Escuelas Deportivas",
          title: "Gestión Administrativa",
          summary:
            "Implementación de arquitectura multi-escuela y sistema multi-rol, añadiendo reportes avanzados en PDF y Excel para la gestión deportiva.",
          stack: ["Django", "Multi-tenant", "Reportes PDF/Excel"],
        },
        {
          client: "Italian Deli Express",
          title: "Franquicias y Pagos",
          summary:
            "Implementación de sistema de franquicias con dispersión de pagos automática vía Nuvei y asignación dinámica de zonas geográficas predefinidas.",
          stack: ["Ionic", "Django", "Nuvei", "Zonificación"],
        },
        {
          client: "Cabutos",
          title: "Soporte Notificaciones",
          summary:
            "Desarrollo del sistema de notificaciones en tiempo real para el manejo de pedidos dentro del dashboard administrativo y app móvil.",
          stack: ["WebSockets", "Django", "Real-time"],
        },
      ],
    },
    {
      period: "2022 - 2026",
      company: "Universidad (Mentoría)",
      role: "Mentor Académico",
      summary:
        "Instrucción técnica en Cálculo y Programación (Java/Python). Desarrollo de habilidades de comunicación y liderazgo de grupos.",
      stack: ["Java", "Python", "Lógica", "Matemáticas"],
    },
    {
      period: "2022 - 2024",
      company: "Proyectos Independientes",
      role: "Desarrollador de Utilidades",
      summary:
        "Creación de herramientas académicas para optimizar la experiencia estudiantil y la planificación universitaria.",
      stack: ["JavaScript", "Python", "Extensions"],
      subItems: [
        {
          client: "Polirecomienda",
          title: "Análisis de Datos Estudiantiles",
          summary:
            "Herramienta diseñada para visualizar y comparar la opinión de los estudiantes sobre los profesores, utilizando el sistema de puntajes oficial para facilitar la toma de decisiones.",
          stack: ["Python", "Web Scraping", "Data Visualization"],
        },
        {
          client: "Poliplanifica",
          title: "Extensión de Planificación",
          summary:
            "Extensión de navegador que integra un botón dinámico en el sistema oficial de la universidad para generar y visualizar horarios de forma interactiva mientras se seleccionan materias.",
          stack: ["JavaScript", "Browser Extensions", "DOM Manipulation"],
        },
      ],
    },
  ] satisfies Experience[],
} as const;
