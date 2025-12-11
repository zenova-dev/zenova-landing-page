import { Project } from "@/types/project";

export const projects: Project[] = [
  {
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
  },
  {
    slug: "hermes",
    title: "HERMES AI",
    subtitle: "Asistente virtual inteligente que reduce costos de atención en 70%",
    tags: ["IA", "Automatización", "Chatbot"],
    description:
      "Hermes es un asistente virtual impulsado por inteligencia artificial diseñado para revolucionar la atención al cliente en negocios.",
    fullDescription:
      "Hermes es un asistente virtual impulsado por inteligencia artificial diseñado para revolucionar la atención al cliente en negocios. Más que un simple chatbot, Hermes es una solución completa que aprende y se adapta a las necesidades específicas de cada empresa, ofreciendo una experiencia de atención al cliente excepcional las 24 horas del día, los 7 días de la semana.\n\nEl sistema permite a las empresas automatizar respuestas frecuentes, gestionar consultas de clientes de manera inteligente y proporcionar información precisa en tiempo real, todo mientras mantiene un tono conversacional natural y profesional.\n\nHermes se integra fácilmente en múltiples canales de comunicación, incluyendo sitios web, WhatsApp y sistemas de kioscos. Como producto estrella de Zenova Tech, representa la visión de la empresa sobre cómo la inteligencia artificial puede transformar la relación entre negocios y clientes.",
    sector: "Tecnología / Servicios al Cliente / IA",
    status: "Producción Activa",
    lastUpdate: "Agosto 2025",
    externalUrl: "https://www.hermes-chatbot.online/",
    stack: [
      {
        category: "Frontend",
        technologies: ["Astro.js 4.x", "TailwindCSS", "SSR"],
      },
      {
        category: "Integraciones",
        technologies: [
          "Nodemailer",
          "reCAPTCHA v3",
          "WhatsApp",
          "Google Analytics",
        ],
      },
      {
        category: "Infraestructura",
        technologies: ["Coolify", "Docker", "SSL automático"],
      },
    ],
    features: [
      {
        title: "IA Avanzada",
        description:
          "Procesamiento de lenguaje natural con comprensión profunda de consultas y aprendizaje continuo.",
      },
      {
        title: "Multi-Canal",
        description:
          "Integración con web, WhatsApp y kiosks para atención en cualquier plataforma.",
      },
      {
        title: "Respuestas Instantáneas",
        description:
          "Tiempos de respuesta de milisegundos con información precisa basada en la base de conocimiento.",
      },
      {
        title: "Seguridad Robusta",
        description:
          "Protección con reCAPTCHA v3, encriptación de comunicaciones y validación multicapa.",
      },
    ],
    useCases: [
      {
        title: "Retail",
        items: [
          "Consultas sobre productos",
          "Información de tiendas",
          "Seguimiento de pedidos",
        ],
      },
      {
        title: "Servicios",
        items: [
          "Reservas y citas",
          "Información de servicios",
          "FAQ automatizado",
        ],
      },
      {
        title: "E-commerce",
        items: [
          "Asistencia de compra",
          "Recomendaciones de productos",
          "Soporte post-venta",
        ],
      },
    ],
    highlights: [
      "Producto en producción con clientes activos",
      "Reducción de hasta 70% en costos de atención al cliente",
      "Disponibilidad 24/7 sin horarios limitados",
      "Landing page dedicada con SEO optimizado",
    ],
  },
  {
    slug: "agendo",
    title: "AGENDO",
    subtitle: "Gestión integral SaaS multiagenda para clínicas médicas",
    tags: ["Salud", "SaaS", "Healthcare"],
    description:
      "Agendo es una plataforma completa diseñada específicamente para la gestión de consultorios médicos, con especialización en ortodoncia.",
    fullDescription:
      "Agendo es una plataforma completa diseñada específicamente para la gestión de consultorios médicos, con especialización en ortodoncia. El sistema permite a los profesionales de la salud llevar un control exhaustivo de sus pacientes, tratamientos, citas y finanzas desde una interfaz moderna e intuitiva.\n\nLa aplicación ofrece una visión 360° de cada paciente, incluyendo historial clínico completo, planes de tratamiento personalizados, seguimiento de evolución, control de pagos y planes de financiamiento.\n\nDesarrollado con las últimas tecnologías (Next.js 16 y React 19), Agendo representa un ejemplo de aplicación SAAS moderna, preparada para escalar y con una arquitectura que facilita la migración futura de localStorage a un backend completo.",
    sector: "Healthcare / SAAS",
    status: "Completo",
    lastUpdate: "Noviembre 2025",
    stack: [
      {
        category: "Frontend",
        technologies: [
          "Next.js 16",
          "React 19",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
        ],
      },
      {
        category: "Visualización",
        technologies: ["Recharts", "Framer Motion"],
      },
      {
        category: "Formularios",
        technologies: ["React Hook Form", "Zod"],
      },
      {
        category: "Infraestructura",
        technologies: ["Vercel", "localStorage (migrable)"],
      },
    ],
    features: [
      {
        title: "Gestión de Pacientes",
        description:
          "Perfiles completos con historial clínico, documentos adjuntos y búsqueda avanzada.",
      },
      {
        title: "Planes de Tratamiento",
        description:
          "Tratamientos personalizados con fases, objetivos y seguimiento de progreso visual.",
      },
      {
        title: "Sistema de Citas",
        description:
          "Calendario mensual/semanal con recordatorios y detección de conflictos.",
      },
      {
        title: "Control de Pagos",
        description:
          "Facturación, planes de financiamiento, estado de cuenta y reportes de ingresos.",
      },
      {
        title: "Dashboard Analítico",
        description:
          "Métricas en tiempo real con gráficos Recharts y análisis de tendencias.",
      },
    ],
    highlights: [
      "Next.js 16 y React 19 (tecnologías de última generación)",
      "TypeScript estricto en todo el proyecto",
      "Sistema de logging centralizado",
      "Arquitectura preparada para migración a backend",
    ],
  },
  {
    slug: "hollys-burger",
    title: "HOLLY'S BURGER",
    subtitle: "Ecosistema para restaurantes con agente IA conversacional",
    tags: ["Restaurante", "IA", "Food Tech"],
    description:
      "Holly's Burger es un ecosistema completo de gestión para restaurantes que integra múltiples puntos de venta y un innovador agente conversacional de IA.",
    fullDescription:
      "Holly's Burger es un ecosistema completo de gestión para restaurantes que integra múltiples puntos de venta, sistemas de gestión y un innovador agente conversacional de inteligencia artificial. El sistema está diseñado para optimizar todas las operaciones de un restaurante, desde la toma de pedidos hasta la preparación en cocina.\n\nLo que distingue a Holly's Burger es su agente de IA conversacional llamado 'Holly', desarrollado con LangGraph y OpenAI, que puede interactuar con clientes a través de múltiples canales, tomar pedidos completos, hacer recomendaciones personalizadas y manejar situaciones complejas con intervención humana cuando es necesario.\n\nEl proyecto representa un caso de estudio en la aplicación de tecnologías de IA generativa en el sector gastronómico.",
    sector: "Gastronomía / Retail / Food Tech",
    status: "Producción Activa",
    lastUpdate: "Octubre 2025",
    stack: [
      {
        category: "Frontend",
        technologies: [
          "Next.js 15",
          "React 19",
          "Tailwind CSS 4",
          "shadcn/ui",
        ],
      },
      {
        category: "Backend",
        technologies: ["Supabase", "PostgreSQL", "FastAPI"],
      },
      {
        category: "Agente IA",
        technologies: ["LangGraph", "OpenAI GPT-4o-mini", "HITL"],
      },
      {
        category: "Pagos",
        technologies: ["MercadoPago SDK"],
      },
      {
        category: "Infraestructura",
        technologies: ["Coolify", "Docker Compose", "Traefik"],
      },
    ],
    features: [
      {
        title: "8 Interfaces Diferentes",
        description:
          "Kiosk, Totem POS, Shop e-commerce, Admin Dashboard, KDS, Caja, Display Público y Chat IA.",
      },
      {
        title: "Agente IA Holly",
        description:
          "Chatbot con LangGraph que entiende lenguaje natural, recomienda productos y recuerda preferencias.",
      },
      {
        title: "Human-in-the-Loop",
        description:
          "Sistema que escala automáticamente a humano en casos complejos o fuera del dominio.",
      },
      {
        title: "Kitchen Display System",
        description:
          "Vista de órdenes para cocina con tracking de SLA y métricas de performance.",
      },
    ],
    useCases: [
      {
        title: "Pedidos por Chat",
        items: [
          "Toma de pedidos en lenguaje natural",
          "Personalización de productos",
          "Cross-selling inteligente",
          "Memoria de preferencias",
        ],
      },
      {
        title: "Gestión Operativa",
        items: [
          "Control de cocina en tiempo real",
          "Analytics de ventas",
          "Gestión de inventario",
          "Múltiples puntos de venta",
        ],
      },
    ],
    highlights: [
      "Sistema multi-módulo con 8 interfaces",
      "Agente de IA productivo con LangGraph",
      "3 ambientes configurados (local, dev, prod)",
      "Multi-canal: web, WhatsApp, kiosk",
    ],
  },
  {
    slug: "afterpass",
    title: "AFTERPASS",
    subtitle: "Plataforma de gestión de eventos y ticketing",
    tags: ["Eventos", "Ticketing", "E-commerce"],
    description:
      "AfterPass es una plataforma completa de gestión de eventos y venta de entradas diseñada para revolucionar la experiencia de organizadores y asistentes.",
    fullDescription:
      "AfterPass es una plataforma completa de gestión de eventos y venta de entradas diseñada para revolucionar la forma en que los organizadores gestionan sus eventos y los asistentes compran sus tickets. La plataforma ofrece una experiencia fluida desde el descubrimiento del evento hasta la validación de entrada en la puerta.\n\nCon tecnología de última generación, AfterPass permite a los organizadores crear eventos, gestionar inventarios de tickets, analizar métricas en tiempo real y validar entradas mediante códigos QR. Los asistentes disfrutan de una experiencia de compra intuitiva y tickets digitales seguros.\n\nEl sistema está diseñado para escalar, con una arquitectura moderna basada en React Server Components y una base de datos PostgreSQL con políticas de seguridad a nivel de fila (RLS).",
    sector: "Entretenimiento & Eventos",
    status: "Producción Activa",
    lastUpdate: "Noviembre 2025",
    stack: [
      {
        category: "Frontend",
        technologies: [
          "Next.js 15",
          "React 19",
          "TypeScript",
          "Tailwind CSS 4",
          "shadcn/ui",
        ],
      },
      {
        category: "Estado",
        technologies: ["TanStack Query v5", "React Hook Form", "Zod"],
      },
      {
        category: "Backend",
        technologies: ["Supabase", "PostgreSQL", "Row-Level Security"],
      },
      {
        category: "Features",
        technologies: ["qrcode.react", "Framer Motion"],
      },
    ],
    features: [
      {
        title: "Para Asistentes",
        description:
          "Descubrimiento de eventos, compra segura, tickets digitales con QR y favoritos.",
      },
      {
        title: "Para Organizadores",
        description:
          "Creación de eventos, gestión de inventario, dashboard de analytics y validación QR.",
      },
      {
        title: "Sistema de Seguridad",
        description:
          "Row-Level Security en Supabase para protección robusta de datos.",
      },
      {
        title: "Real-time Analytics",
        description:
          "Dashboard con métricas actualizadas en tiempo real sobre ventas y asistencia.",
      },
    ],
    highlights: [
      "Next.js 15 y React 19 (últimas versiones)",
      "Sistema de seguridad robusto con RLS",
      "UI/UX profesional con tema oscuro neón",
      "Preparado para escalar a miles de eventos",
    ],
  },
  {
    slug: "residencias-unicen",
    title: "RESIDENCIAS UNICEN",
    subtitle: "Sistema integral para residencias universitarias",
    tags: ["Educación", "Sector Público", "SaaS"],
    description:
      "Plataforma completa desarrollada para la gestión administrativa de las residencias universitarias de UNICEN.",
    fullDescription:
      "Residencias UNICEN es una plataforma completa desarrollada para la gestión administrativa de las residencias universitarias de la Universidad Nacional del Centro de la Provincia de Buenos Aires (UNICEN). El sistema centraliza y digitaliza todos los procesos relacionados con la vida en las residencias.\n\nLa plataforma abarca desde la gestión básica de residentes hasta módulos especializados como el sistema de turnos para lavandería, alquiler de bicicletas, registro de fallas en las instalaciones y un sistema de newsletters para mantener informada a la comunidad.\n\nEl proyecto representa un caso exitoso de transformación digital en el sector educativo público, demostrando cómo la tecnología puede mejorar la eficiencia operativa y la calidad de servicio en instituciones universitarias.",
    sector: "Educación / Sector Público",
    status: "Producción Activa",
    lastUpdate: "Noviembre 2025",
    externalUrl: "https://residencias.bienestar.unicen.edu.ar",
    stack: [
      {
        category: "Frontend",
        technologies: [
          "Next.js 14",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
          "Zustand",
        ],
      },
      {
        category: "Estado",
        technologies: ["TanStack Query v5", "TanStack Tables"],
      },
      {
        category: "Backend Principal",
        technologies: ["Spring Boot", "Java 8", "H2"],
      },
      {
        category: "Backend Secundario",
        technologies: ["NestJS", "TypeORM", "PostgreSQL"],
      },
      {
        category: "Auth",
        technologies: ["Auth.js v5", "JWT"],
      },
    ],
    features: [
      {
        title: "Gestión de Residentes",
        description:
          "Sistema completo de perfiles, check-in/check-out y tracking de estadía.",
      },
      {
        title: "Sistema de Lavandería",
        description:
          "Gestión de turnos, notificaciones cuando es tu turno y historial de uso.",
      },
      {
        title: "Alquiler de Bicicletas",
        description:
          "Inventario, reservas, préstamo/devolución y seguimiento de estado.",
      },
      {
        title: "Mobile-First Design",
        description:
          "Tablas que se transforman en tarjetas en móviles con filtros en drawer.",
      },
    ],
    useCases: [
      {
        title: "Administración",
        items: [
          "Control de ocupación",
          "Gestión de visitantes",
          "Registro de fallas",
          "Boletín informativo",
        ],
      },
      {
        title: "Residentes",
        items: [
          "Reserva de turnos de lavandería",
          "Alquiler de bicicletas",
          "Reporte de problemas",
          "Consulta de información",
        ],
      },
    ],
    highlights: [
      "Sistema en producción sirviendo a residencias reales",
      "Arquitectura multi-backend (Spring Boot + NestJS)",
      "Mobile-first con experiencia optimizada",
      "Auth.js v5 con autenticación robusta",
    ],
  },
  {
    slug: "inmo",
    title: "INMO",
    subtitle: "Plataforma de gestión inmobiliaria con pagos integrados",
    tags: ["PropTech", "Inmobiliaria", "Pagos"],
    description:
      "Inmo es una plataforma completa de gestión para el sector inmobiliario que digitaliza todos los procesos de compra, venta y alquiler.",
    fullDescription:
      "Inmo, también conocido como 'LovableEstamos', es una plataforma completa de gestión para el sector inmobiliario que digitaliza y optimiza todos los procesos relacionados con la compra, venta y alquiler de propiedades.\n\nLa plataforma destaca por su integración de múltiples procesadores de pago (Stripe y MercadoPago), permitiendo transacciones seguras en diferentes mercados. Además, cuenta con un sistema robusto de notificaciones por email, generación de documentos PDF y una arquitectura preparada para escalar.\n\nDesarrollado con Next.js 14, Inmo representa una solución moderna para inmobiliarias que buscan transformación digital, ofreciendo herramientas profesionales para gestionar propiedades, clientes, transacciones y documentación.",
    sector: "Bienes Raíces / PropTech",
    status: "Producción Activa",
    lastUpdate: "Octubre 2025",
    stack: [
      {
        category: "Frontend",
        technologies: [
          "Next.js 14",
          "React 18",
          "TypeScript",
          "Tailwind CSS 4",
          "shadcn/ui",
        ],
      },
      {
        category: "Backend",
        technologies: ["Supabase", "PostgreSQL", "SSR"],
      },
      {
        category: "Pagos",
        technologies: ["Stripe", "MercadoPago", "Webhooks"],
      },
      {
        category: "Comunicaciones",
        technologies: ["Resend", "jsPDF"],
      },
    ],
    features: [
      {
        title: "Gestión de Propiedades",
        description:
          "Publicación con fotos, categorización, filtros avanzados y estados de propiedad.",
      },
      {
        title: "Sistema de Pagos Dual",
        description:
          "Stripe para internacional y MercadoPago para LATAM con webhooks integrados.",
      },
      {
        title: "CRM Integrado",
        description:
          "Perfiles de clientes, historial de interacciones y seguimiento de negociaciones.",
      },
      {
        title: "Generación de PDFs",
        description:
          "Contratos de compra/venta, alquiler, recibos de pago y documentación legal.",
      },
      {
        title: "Dashboard Analítico",
        description:
          "Propiedades activas, transacciones, ingresos y conversión de leads.",
      },
    ],
    useCases: [
      {
        title: "Inmobiliarias",
        items: [
          "Gestión de portfolio de propiedades",
          "CRM de clientes",
          "Procesamiento de pagos",
          "Generación de contratos",
        ],
      },
      {
        title: "Agentes Independientes",
        items: [
          "Portfolio profesional online",
          "Sistema de cobros integrado",
          "Gestión de clientes",
          "Reportes de actividad",
        ],
      },
    ],
    highlights: [
      "Integración dual de pagos (Stripe + MercadoPago)",
      "Generación automática de PDFs con jsPDF",
      "Sistema de notificaciones con Resend",
      "Arquitectura preparada para multi-tenancy",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
