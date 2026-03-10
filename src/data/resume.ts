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

export const resume = {
  seo: {
    title: "Robespierre Trivino | Software Engineer",
    description:
      "Web resume CV de Robespierre Trivino, ingeniero de software enfocado en arquitectura, cloud y productos digitales escalables.",
  },
  header: {
    session: "rt_fullstack_core_v4.sh",
    status: "LIVE_CONNECTION",
    timezone: "UTC-5",
    nav: [
      { href: "#skills", label: "Skills" },
      { href: "#experience", label: "Trayectoria" },
      { href: "#projects", label: "Proyectos" },
      { href: "#contact", label: "Contacto" },
    ],
  },
  hero: {
    command: "run perfil_completo.sh --verbose",
    logs: [
      "[system] Initializing boot sequence...",
      "[system] Loading software_engineer_module.bin...",
    ],
    firstName: "Robespierre",
    lastName: "Trivino",
    role: "Ingeniero de Software Completo",
    summary:
      "Arquitecto de soluciones integrales. Mi enfoque trasciende la infraestructura; construyo productos digitales escalables desde la concepcion logica hasta el despliegue optimizado. Resolviendo problemas de negocio a traves de ingenieria de precision.",
    availability: [
      { label: "Remoto", value: "OK" },
      { label: "Disponibilidad", value: "Full Time" },
    ] satisfies Availability[],
  },
  skills: {
    id: "skills",
    command: "get_skills --category=all",
    title: "Resultado: Habilidades Clave",
    groups: [
      {
        id: "01",
        title: "Frontend",
        items: [
          "React / Next.js",
          "TypeScript (Advanced)",
          "Tailwind / Shadcn",
          "State Mgmt (Zustand/Redux)",
        ],
      },
      {
        id: "02",
        title: "Backend",
        items: [
          "Go (Golang) / Rust",
          "Node.js / Python",
          "gRPC / GraphQL / REST",
          "Distributed Systems",
        ],
      },
      {
        id: "03",
        title: "Nube Infra",
        items: [
          "Kubernetes (K8s)",
          "AWS / GCP Arq",
          "Terraform / IaC",
          "CI/CD Automation",
        ],
      },
      {
        id: "04",
        title: "Datos",
        items: [
          "PostgreSQL / Redis",
          "Kafka / Event-Driven",
          "Elasticsearch",
          "ClickHouse",
        ],
      },
    ] satisfies SkillGroup[],
  },
  experience: {
    id: "experience",
    command: "history --filter=professional_evolution",
    title: "Historial: Trayectoria",
    items: [
      {
        period: "2022 - Presente",
        company: "Techglobal Solutions",
        role: "Software Architect & Sr. Engineer",
        summary:
          "Diseno de arquitecturas cloud-native. Lidero la transicion de monolitos a servicios distribuidos, incrementando la escalabilidad del sistema en un 400% y reduciendo costos operativos mediante optimizacion de recursos.",
        stack: ["Go", "K8s", "AWS"],
        current: true,
      },
      {
        period: "2020 - 2022",
        company: "Innovate Corp",
        role: "Fullstack Developer (Fintech Core)",
        summary:
          "Desarrollo de punta a punta de plataformas de pago. Implementacion de sistemas de seguridad critica y dashboards de alta interactividad para analitica en tiempo real.",
        stack: ["React", "Node.js", "Postgres"],
      },
    ] satisfies Experience[],
  },
  projects: {
    id: "projects",
    command: "ls ./proyectos_destacados -l",
    items: [
      {
        id: "Proyecto_01",
        title: "Orquestador Edge IoT",
        description:
          "Sistema de baja latencia para gestion de dispositivos en el borde. La interfaz incluye un panel de monitoreo visual en tiempo real renderizado mediante WebAssembly para maxima eficiencia.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBPbz-H1s5LP61gV7IDYc6hX5JOUaGcQptmN0F3eQyvLwvajjrsBUuvC3mxumnEM_07tQzwp6mB6DQsPZgLzuGUJf68ZeA_XjW8yuBiLzH2aS6tD1_uN89S7GnMjxKPid_85Zus5vMkLp1zwc4npb6wzZ-3UAY3se7CyhKmoKpZABZWY03zTs9c-sACqF6ha7eXRQ886kZfWjQynbf9xFdxesEiOz6w_pzIxveXc_G53Y8k3YSTfttCEFJyYA7HQDQUk4Y6xKp4mkk",
        imageAlt: "Dashboard de Edge IoT",
        href: "#contact",
        cta: "Ver demo visual / capturas de pantalla",
        stack: ["Rust", "WASM", "Docker"],
      },
      {
        id: "Proyecto_02",
        title: "Real-Time Data Pipeline",
        description:
          "Motor de procesamiento de 50k RPS. Incluye un dashboard interactivo de alta fidelidad desarrollado en React para la supervision de flujos de datos distribuidos.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBa6loZtoFFdkiI6lZwl6cCPID7pjqbkz2vRfz_9B5D3OMxlTFKb_3JHLwJZlwZigVIbN03JPaeo8nNqpQ26dY8RiNpTry0SoUJaR9YDwOgOeRoCe4QdhaVr9CksWzbvN3RjguZm1l4YA29jZ7XvibrJJuoTXac0VRaK65w2I-KWn0GZeeAYeAOFBxLO74oHPTR-G7I9kn_KWaoG5u8JGlN0G3NiYVEmAyGW-IPY3YZqriIZtssfijgbpJVVYmxxoDQbB_2NxsEiWY",
        imageAlt: "Visualizador de pipeline de datos",
        href: "#contact",
        cta: "Ver demo visual / capturas de pantalla",
        stack: ["Go", "Kafka", "ClickHouse"],
      },
    ] satisfies Project[],
  },
  contact: {
    id: "contact",
    command: "contact --method=email",
    email: "hello@robespierre.dev",
    socials: [
      {
        label: "Source",
        value: "github/rt_dev",
        href: "https://github.com/rt_dev",
        icon: "github",
      },
      {
        label: "Network",
        value: "linkedin/rtrivino",
        href: "https://linkedin.com/in/rtrivino",
        icon: "linkedin",
      },
    ] satisfies SocialLink[],
  },
  footer: {
    left: ["OS: RT_SHELL_V4", "ENV: PRODUCTION", "ENCODING: UTF-8"],
    right: "STATUS: READY",
  },
} as const;
