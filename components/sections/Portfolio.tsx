"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { projects as allProjects } from "@/data/projects";
import type { Project } from "@/types/project";

interface ProjectRowProps {
  project: Project;
  index: number;
  isReversed: boolean;
}

function ProjectRow({ project, index, isReversed }: ProjectRowProps) {
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === "mobile";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "grid gap-8 md:gap-12 items-center",
        isMobile ? "grid-cols-1" : "grid-cols-2"
      )}
    >
      {/* Placeholder Visual */}
      <div
        className={cn(
          "relative h-[350px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden",
          isMobile && "order-1",
          !isMobile && isReversed && "order-2"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 via-neon-blue/10 to-neon-purple/20 rounded-2xl" />
        <div className="absolute inset-0 bg-dark-card/50 backdrop-blur-sm rounded-2xl border border-dark-border" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl md:text-8xl font-bold text-white/10">
            {project.title.charAt(0)}
          </span>
        </div>
      </div>

      {/* Text Content */}
      <div
        className={cn(
          "space-y-6",
          isMobile && "order-2 text-center",
          !isMobile && isReversed && "order-1 text-right",
          !isMobile && !isReversed && "text-left"
        )}
      >
        <motion.h3
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {project.title}
        </motion.h3>

        <motion.p
          className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg"
          style={{ marginLeft: isMobile || !isReversed ? 0 : "auto" }}
          initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {project.subtitle}
        </motion.p>

        <motion.div
          className={cn(
            "flex flex-wrap gap-2",
            isMobile && "justify-center",
            !isMobile && isReversed && "justify-end",
            !isMobile && !isReversed && "justify-start"
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-neon-green/10 border border-neon-green/30 text-neon-green text-sm font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          className={cn(
            "flex flex-col gap-3",
            isMobile && "items-center",
            !isMobile && isReversed && "items-end",
            !isMobile && !isReversed && "items-start"
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            href={`/proyectos/${project.slug}`}
            className="inline-flex items-center gap-2 text-neon-green font-medium hover:text-white transition-colors group"
          >
            Ver caso completo
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>

          {project.externalUrl && (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neon-blue font-medium hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Ver demo
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  // Extract all unique tags from projects
  const allTags = Array.from(new Set(allProjects.flatMap((p) => p.tags)));
  const filterOptions = ["Todos", ...allTags];

  // Filter projects
  const filteredProjects =
    activeFilter === "Todos"
      ? allProjects
      : allProjects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="portfolio" className="scroll-mt-36 py-20 md:py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            NUESTRO TRABAJO HABLA
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-cyan-400">
              POR NOSOTROS.
            </span>
          </h2>
          <div className="h-7 mt-4 overflow-hidden">
            <AnimatePresence mode="wait">
              {activeFilter !== "Todos" && (
                <motion.p
                  key={activeFilter}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-400 text-lg"
                >
                  {filteredProjects.length}{" "}
                  {filteredProjects.length === 1 ? "proyecto" : "proyectos"} en{" "}
                  <span className="text-neon-green">{activeFilter}</span>
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16 md:mb-24"
        >
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 border",
                activeFilter === filter
                  ? "bg-neon-green text-black border-neon-green"
                  : "bg-dark-card border-dark-border text-gray-400 hover:border-neon-green/50 hover:text-white"
              )}
              aria-pressed={activeFilter === filter}
              aria-label={`Filtrar por ${filter}`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects List - Vertical Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-24 md:space-y-32"
          >
            {filteredProjects.map((project, index) => (
              <ProjectRow
                key={project.slug}
                project={project}
                index={index}
                isReversed={index % 2 !== 0}
              />
            ))}

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <p className="text-gray-400 text-lg mb-2">
                  No hay proyectos con este tag
                </p>
                <button
                  onClick={() => setActiveFilter("Todos")}
                  className="text-neon-green hover:underline"
                >
                  Ver todos los proyectos →
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
