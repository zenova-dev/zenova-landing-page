import { Project } from "@/types/project";

export const hollysBurger: Project = {
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
};
