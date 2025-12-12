import { Project } from "@/types/project";

export const residenciasUnicen: Project = {
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
};
