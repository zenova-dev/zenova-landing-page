"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle2, Layers, Code2, Briefcase } from "lucide-react";
import { Project } from "@/types/project";
import { Button } from "@/components/ui/button";

interface Props {
  project: Project;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

function ProjectHeader({ project }: Props) {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="pt-8 pb-12 border-b border-dark-border"
    >
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 bg-neon-green/10 border border-neon-green/30 text-neon-green text-sm font-medium rounded-full"
          >
            {tag}
          </span>
        ))}
        <span
          className={`px-3 py-1.5 text-sm font-medium rounded-full ${
            project.status === "Producción Activa"
              ? "bg-green-500/10 border border-green-500/30 text-green-400"
              : project.status === "Desarrollo"
              ? "bg-yellow-500/10 border border-yellow-500/30 text-yellow-400"
              : "bg-blue-500/10 border border-blue-500/30 text-blue-400"
          }`}
        >
          {project.status}
        </span>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
        {project.title}
      </h1>

      <p className="text-xl md:text-2xl text-gray-400 mb-6 max-w-3xl">
        {project.subtitle}
      </p>

      <div className="flex flex-wrap items-center gap-4">
        {project.externalUrl && (
          <Button
            asChild
            className="bg-neon-green text-black hover:bg-neon-green/90 font-semibold"
          >
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver proyecto en vivo
            </a>
          </Button>
        )}
        <Button
          asChild
          variant="outline"
          className="border-neon-green/50 text-neon-green hover:bg-neon-green/10"
        >
          <Link href="/#contacto">Consultar sobre este proyecto</Link>
        </Button>
      </div>

      <p className="text-sm text-gray-500 mt-6">
        Sector: {project.sector} &bull; Última actualización: {project.lastUpdate}
      </p>
    </motion.header>
  );
}

function ProjectDescription({ project }: Props) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      className="py-12"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
        <Briefcase className="w-7 h-7 text-neon-green" />
        Descripción del Proyecto
      </h2>
      <div className="prose prose-invert max-w-none">
        {project.fullDescription.split("\n\n").map((paragraph, i) => (
          <p key={i} className="text-gray-300 text-lg leading-relaxed mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </motion.section>
  );
}

function TechStack({ project }: Props) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      className="py-12 border-t border-dark-border"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <Code2 className="w-7 h-7 text-neon-blue" />
        Stack Tecnológico
      </h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {project.stack.map((category) => (
          <motion.div
            key={category.category}
            variants={itemVariants}
            className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-neon-blue/50 transition-colors"
          >
            <h3 className="text-lg font-semibold text-neon-blue mb-4">
              {category.category}
            </h3>
            <ul className="space-y-2">
              {category.technologies.map((tech) => (
                <li
                  key={tech}
                  className="text-gray-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-neon-green rounded-full" />
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

function FeaturesList({ project }: Props) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      className="py-12 border-t border-dark-border"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <Layers className="w-7 h-7 text-neon-purple" />
        Características Principales
      </h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {project.features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={itemVariants}
            className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-neon-purple/50 transition-colors"
          >
            <h3 className="text-lg font-semibold text-white mb-2 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-neon-green mt-0.5 flex-shrink-0" />
              {feature.title}
            </h3>
            <p className="text-gray-400 ml-8">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

function UseCasesList({ project }: Props) {
  if (!project.useCases || project.useCases.length === 0) return null;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      className="py-12 border-t border-dark-border"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
        Casos de Uso
      </h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {project.useCases.map((useCase) => (
          <motion.div
            key={useCase.title}
            variants={itemVariants}
            className="bg-dark-card border border-dark-border rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold text-neon-green mb-4">
              {useCase.title}
            </h3>
            <ul className="space-y-2">
              {useCase.items.map((item) => (
                <li key={item} className="text-gray-300 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

function Highlights({ project }: Props) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      className="py-12 border-t border-dark-border"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
        Logros Destacados
      </h2>
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {project.highlights.map((highlight) => (
          <motion.li
            key={highlight}
            variants={itemVariants}
            className="flex items-start gap-3 text-gray-300"
          >
            <CheckCircle2 className="w-5 h-5 text-neon-green mt-0.5 flex-shrink-0" />
            {highlight}
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}

function ProjectCTA({ project }: Props) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      className="py-16 border-t border-dark-border text-center"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        ¿Te interesa un proyecto similar?
      </h2>
      <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
        En Zenova Tech desarrollamos soluciones tecnológicas a medida. Contactanos
        para discutir cómo podemos ayudarte a transformar tu negocio.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button
          asChild
          className="bg-neon-green text-black hover:bg-neon-green/90 font-semibold"
        >
          <Link href="/#contacto">Contactar ahora</Link>
        </Button>
        {project.externalUrl && (
          <Button
            asChild
            variant="outline"
            className="border-neon-green/50 text-neon-green hover:bg-neon-green/10"
          >
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver proyecto en vivo
            </a>
          </Button>
        )}
      </div>
    </motion.section>
  );
}

export default function ProjectDetail({ project }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-dark-bg to-black text-gray-100">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10" />

      <div className="relative z-10">
        <nav className="py-6 px-6 border-b border-dark-border/50">
          <div className="max-w-5xl mx-auto">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-green transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al portfolio
            </Link>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto px-6 pb-20">
          <ProjectHeader project={project} />
          <ProjectDescription project={project} />
          <TechStack project={project} />
          <FeaturesList project={project} />
          <UseCasesList project={project} />
          <Highlights project={project} />
          <ProjectCTA project={project} />
        </main>
      </div>
    </div>
  );
}
