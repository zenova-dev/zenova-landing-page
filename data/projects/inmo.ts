import { Project } from "@/types/project";

export const inmo: Project = {
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
};
