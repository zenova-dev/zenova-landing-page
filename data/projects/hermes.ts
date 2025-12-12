import { Project } from "@/types/project";

export const hermes: Project = {
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
};
