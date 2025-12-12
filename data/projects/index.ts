import { Project } from "@/types/project";
import { beehub } from "./beehub";
import { hermes } from "./hermes";
import { agendo } from "./agendo";
import { hollysBurger } from "./hollys-burger";
import { afterpass } from "./afterpass";
import { residenciasUnicen } from "./residencias-unicen";
import { inmo } from "./inmo";

export const projects: Project[] = [
  hollysBurger,
  beehub,
  hermes,
  agendo,
  afterpass,
  residenciasUnicen,
  inmo,
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

// Re-exportar proyectos individuales para acceso directo
export {
  beehub,
  hermes,
  agendo,
  hollysBurger,
  afterpass,
  residenciasUnicen,
  inmo,
};
