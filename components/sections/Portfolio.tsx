"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  subtitle: string;
  tags: string[];
  gradientClasses: string;
  colors: {
    border: string;
    glow: string;
    accent: string;
    tagBg: string;
    tagBorder: string;
  };
  caseStudyUrl: string;
}

const projects: Project[] = [
  {
    title: "BEEHUB",
    subtitle: "Plataforma de coesión y comunicación de alto rendimiento",
    tags: ["SaaS", "CRM / SaaS"],
    gradientClasses: "from-purple-600 to-pink-600",
    colors: {
      border: '#9333ea',
      glow: '#9333ea',
      accent: '#c084fc',
      tagBg: '#9333ea1a',
      tagBorder: '#9333ea4d',
    },
    caseStudyUrl: "#beehub-case-study",
  },
  {
    title: "HERMES AI",
    subtitle: "Asistente virtual inteligente que reduce costos de atención en 70%",
    tags: ["IA", "Automatización"],
    gradientClasses: "from-blue-600 to-purple-600",
    colors: {
      border: '#2563eb',
      glow: '#2563eb',
      accent: '#60a5fa',
      tagBg: '#2563eb1a',
      tagBorder: '#2563eb4d',
    },
    caseStudyUrl: "#hermes-case-study",
  },
  {
    title: "AGENDO",
    subtitle: "Gestión integral SaaS multiagenda para clínicas médicas",
    tags: ["Salud", "CRM / SaaS"],
    gradientClasses: "from-teal-600 to-blue-600",
    colors: {
      border: '#0d9488',
      glow: '#0d9488',
      accent: '#2dd4bf',
      tagBg: '#0d94881a',
      tagBorder: '#0d94884d',
    },
    caseStudyUrl: "#agendo-case-study",
  },
  {
    title: "HOLLY'S BURGER",
    subtitle: "Sistema de pedidos conversacional totalmente por inteligencia Artificial",
    tags: ["Restaurante", "UI / Mobile"],
    gradientClasses: "from-orange-600 to-red-600",
    colors: {
      border: '#ea580c',
      glow: '#ea580c',
      accent: '#fb923c',
      tagBg: '#ea580c1a',
      tagBorder: '#ea580c4d',
    },
    caseStudyUrl: "#hollys-case-study",
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  // Extract all unique tags from projects
  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));
  const filterOptions = ['Todos', ...allTags];

  // Filter projects
  const filteredProjects = activeFilter === 'Todos'
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter));

  return (
    <section
      id="portfolio"
      className="scroll-mt-36 py-20 px-6 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            NUESTRO TRABAJO HABLA POR NOSOTROS.
            {activeFilter !== 'Todos' && (
              <span className="block text-neon-green text-2xl md:text-3xl mt-4">
                {filteredProjects.length} {filteredProjects.length === 1 ? 'proyecto' : 'proyectos'} en {activeFilter}
              </span>
            )}
          </h2>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeFilter === filter
                  ? "bg-neon-green text-black shadow-lg shadow-neon-green/30"
                  : "bg-dark-card border border-dark-border text-gray-400 hover:border-neon-green/50 hover:text-white"
              )}
              aria-pressed={activeFilter === filter}
              aria-label={`Filtrar por ${filter}`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
              <Card
                className="bg-zinc-900 border-zinc-800 overflow-hidden cursor-pointer transition-all duration-300 hover:border-opacity-60 hover:shadow-2xl"
                style={{
                  borderColor: `${project.colors.border}33`,
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="h-full relative"
                >
                  {/* Gradient Placeholder */}
                  <div
                    className={`w-full h-48 bg-gradient-to-br ${project.gradientClasses} relative overflow-hidden group-hover:brightness-110 transition-all duration-300`}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    {/* Title */}
                    <h3
                      className="text-xl md:text-2xl font-bold text-white transition-all duration-300 group-hover:text-opacity-90"
                      style={{
                        color: 'white'
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                      {project.subtitle}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-xs font-medium rounded-full border transition-colors duration-200"
                          style={{
                            backgroundColor: project.colors.tagBg,
                            color: project.colors.accent,
                            borderColor: project.colors.tagBorder,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 pointer-events-none">
                    <svg
                      className="w-12 h-12 text-white animate-pulse"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    <span
                      className="text-white font-bold text-lg"
                      style={{ color: project.colors.accent }}
                    >
                      Ver caso completo →
                    </span>
                  </div>
                </motion.div>
              </Card>
              </motion.a>
            ))}

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="col-span-full text-center py-20"
              >
                <p className="text-gray-400 text-lg mb-2">
                  No hay proyectos con este tag
                </p>
                <button
                  onClick={() => setActiveFilter('Todos')}
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
