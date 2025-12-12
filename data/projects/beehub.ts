import { Project } from "@/types/project";

export const beehub: Project = {
  slug: "beehub",
  title: "BEEHUB",
  subtitle:
    "Plataforma de automatización y orquestación de agentes inteligentes",
  tags: ["IA", "Automatización", "Enterprise"],
  description:
    "Beehub es una plataforma compleja de automatización que orquesta múltiples agentes especializados para resolver problemas empresariales mediante inteligencia artificial.",
  fullDescription:
    "Beehub es una plataforma compleja de automatización que orquesta múltiples agentes especializados para resolver problemas empresariales mediante inteligencia artificial. El sistema actúa como un hub central que coordina diferentes agentes, cada uno con capacidades específicas, permitiendo automatizar procesos complejos que tradicionalmente requerían intervención humana.\n\nLa arquitectura de Beehub está diseñada para ser modular y escalable, donde cada agente funciona como un microservicio independiente, containerizado con Docker. Esto permite agregar, modificar o escalar agentes individuales sin afectar el resto del sistema.\n\nEl proyecto incluye dos componentes principales: un sistema de agentes especializados y Flowwwy, un motor de workflows que permite orquestar y secuenciar las acciones de diferentes agentes para resolver problemas complejos.",
  sector: "Tecnología / Automatización / IA / Enterprise Software",
  status: "Desarrollo",
  lastUpdate: "Noviembre 2025",
  stack: [
    {
      category: "Arquitectura",
      technologies: [
        "Microservicios",
        "Docker",
        "Sistema custom de workflows",
      ],
    },
    {
      category: "Agentes",
      technologies: ["Python", "Docker", "REST APIs"],
    },
    {
      category: "Orquestación",
      technologies: ["Flowwwy Engine", "Event-Driven", "Message Queues"],
    },
  ],
  features: [
    {
      title: "Sistema de Agentes Modular",
      description:
        "Cada agente tiene responsabilidad única, funciona de manera autónoma y escalable con su propio container Docker.",
    },
    {
      title: "Motor de Workflows (Flowwwy)",
      description:
        "Orquestación de secuencias de agentes con lógica condicional, paralelización y manejo de errores.",
    },
    {
      title: "Escalabilidad Horizontal",
      description:
        "Arquitectura diseñada para escalar agregando más instancias de agentes según demanda.",
    },
    {
      title: "Event-Driven Architecture",
      description:
        "Comunicación asíncrona entre agentes con message queues y event sourcing para auditoría.",
    },
  ],
  useCases: [
    {
      title: "Análisis de Consumo",
      items: [
        "Procesamiento de datos de consumo energético/agua/recursos",
        "Identificación de patrones y anomalías",
        "Generación de reportes automáticos",
        "Alertas de consumo excesivo",
      ],
    },
    {
      title: "Automatización de Procesos",
      items: [
        "Workflows empresariales complejos",
        "Integración de sistemas legacy",
        "Procesamiento batch de datos",
        "ETL (Extract, Transform, Load)",
      ],
    },
  ],
  highlights: [
    "Arquitectura de microservicios completamente modular",
    "Dockerización completa de todos los componentes",
    "Diseño escalable horizontalmente",
    "Sistema de workflows flexible y extensible",
  ],
};
