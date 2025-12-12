import { Project } from "@/types/project";

export const agendo: Project = {
  slug: "agendo",
  title: "AGENDO",
  subtitle: "Gestión integral SaaS multiagenda para clínicas médicas",
  tags: ["Salud", "SaaS", "Healthcare"],
  description:
    "Agendo es una plataforma completa diseñada específicamente para la gestión de consultorios médicos, con especialización en ortodoncia.",
  fullDescription:
    "Agendo es una plataforma completa diseñada específicamente para la gestión de consultorios médicos, con especialización en ortodoncia. El sistema permite a los profesionales de la salud llevar un control exhaustivo de sus pacientes, tratamientos, citas y finanzas desde una interfaz moderna e intuitiva.\n\nLa plataforma ofrece una visión 360° de cada paciente, incluyendo historial clínico completo, planes de tratamiento personalizados, seguimiento de evolución, control de pagos y planes de financiamiento.\n\nDesarrollado con las últimas tecnologías (Next.js 16 y React 19), Agendo representa un ejemplo de aplicación SAAS moderna, preparada para escalar y con una arquitectura que facilita la migración futura de localStorage a un backend completo.",
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
};
