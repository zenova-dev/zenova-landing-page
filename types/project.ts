export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectUseCase {
  title: string;
  items: string[];
}

export interface TechStack {
  category: string;
  technologies: string[];
}

export interface Project {
  // Datos básicos (usados en Portfolio)
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];

  // Datos para página de detalle
  description: string;
  fullDescription: string;
  sector: string;
  status: "Producción Activa" | "Desarrollo" | "Completo";
  lastUpdate: string;

  // Stack tecnológico
  stack: TechStack[];

  // Características principales
  features: ProjectFeature[];

  // Casos de uso (opcional)
  useCases?: ProjectUseCase[];

  // URLs y enlaces
  externalUrl?: string;

  // Imagen placeholder (opcional)
  image?: string;

  // Métricas destacadas
  highlights: string[];
}
