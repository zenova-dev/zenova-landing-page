import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import ProjectDetail from "@/components/project/ProjectDetail";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado | Zenova Tech",
    };
  }

  return {
    title: `${project.title} - Caso de Estudio | Zenova Tech`,
    description: project.description,
    keywords: [
      ...project.tags,
      "desarrollo software",
      "Zenova Tech",
      project.sector,
    ],
    openGraph: {
      title: `${project.title} | Zenova Tech Portfolio`,
      description: project.subtitle,
      type: "article",
      siteName: "Zenova Tech",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Zenova Tech`,
      description: project.subtitle,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
