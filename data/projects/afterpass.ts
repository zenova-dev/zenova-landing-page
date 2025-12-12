import { Project } from "@/types/project";

export const afterpass: Project = {
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
};
