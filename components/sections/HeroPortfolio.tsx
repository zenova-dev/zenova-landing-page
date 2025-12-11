"use client";
import { DollarSign, Globe, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Card } from "../ui/card";

const projects = [
  {
    name: "BEEHUB",
    description: "Plataforma de coesión y comunicación de alto rendimiento",
    tags: ["SaaS", "CRM / SaaS"],
    gradientClasses: "from-purple-600 to-pink-600",
    colors: {
      border: '#9333ea',
      glow: '#9333ea',
      accent: '#c084fc',
      tagBg: '#9333ea1a',
      tagBorder: '#9333ea4d',
    },
  },
  {
    name: "HERMES AI",
    description: "Asistente virtual inteligente que recrea costos de atención en 70%",
    tags: ["IA", "Automatización"],
    gradientClasses: "from-blue-600 to-purple-600",
    colors: {
      border: '#2563eb',
      glow: '#2563eb',
      accent: '#60a5fa',
      tagBg: '#2563eb1a',
      tagBorder: '#2563eb4d',
    },
  },
  {
    name: "AGENDO",
    description: "Gestión integral SaaS multiagenda para clínicas médicas",
    tags: ["Salud", "CRM / SaaS"],
    gradientClasses: "from-teal-600 to-blue-600",
    colors: {
      border: '#0d9488',
      glow: '#0d9488',
      accent: '#2dd4bf',
      tagBg: '#0d94881a',
      tagBorder: '#0d94884d',
    },
  },
  {
    name: "HOLLY'S BURGER",
    description: "Sistema de pedidos conversacional totalmente por inteligencia Artificial",
    tags: ["Santiemento", "UI / Mobile"],
    gradientClasses: "from-orange-600 to-red-600",
    colors: {
      border: '#ea580c',
      glow: '#ea580c',
      accent: '#fb923c',
      tagBg: '#ea580c1a',
      tagBorder: '#ea580c4d',
    },
  },
];

export default function HeroPortfolio() {
  return (
    <section className="relative overflow-hidden bg-dark-bg w-full min-h-screen flex items-center pt-20">
      {/* Elementos 3D decorativos */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-neon-green/20 to-transparent rotate-45 blur-xl"></div>
      <div className="absolute bottom-40 right-20 w-40 h-40 bg-gradient-to-br from-purple-600/20 to-transparent -rotate-12 blur-xl"></div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* HERO - Columna Izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Título principal */}
            <div className="space-y-6">
              <h1 className="font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight">
                <span className="block text-white">
                  TUS IDEAS SON UN CAOS.
                </span>
                <span className="block text-white">
                  NOSOTROS LAS CONVERTIMOS
                </span>
                <span className="block text-white">
                  EN{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-emerald-400">
                    PRODUCTOS DIGITALES.
                  </span>
                </span>
              </h1>

              <p className="max-w-2xl text-gray-300 text-lg sm:text-xl leading-relaxed">
                Transformamos conceptos en MVPs y sistemas robustos. El éxodo tecnológico para startups y agencias que exigen velocidad, creatividad y core surrealista.
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#servicios">
                  <Button
                    size="lg"
                    className="bg-neon-green hover:bg-neon-green/90 text-black text-lg px-8 py-6 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-neon-green/20"
                  >
                    Ver qué hacemos
                  </Button>
                </a>
              </div>
              <a
                href="#proceso"
                className="inline-flex items-center text-gray-400 hover:text-neon-green transition-colors text-sm"
              >
                Descubrí nuestros procesos transparentes →
              </a>
            </div>

            {/* Value Props - 3 íconos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center space-y-2 p-4 bg-dark-card rounded-lg border border-dark-border hover:border-neon-green/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-neon-green" />
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold text-sm">Financiamiento Flexible</p>
                  <p className="text-gray-400 text-xs">Equity, cambio fintec</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center space-y-2 p-4 bg-dark-card rounded-lg border border-dark-border hover:border-neon-green/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-neon-green" />
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold text-sm">Cobertura Global, Atención Local</p>
                  <p className="text-gray-400 text-xs">Talento 100% horas NAMCO Americas</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center space-y-2 p-4 bg-dark-card rounded-lg border border-dark-border hover:border-neon-green/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-neon-green" />
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold text-sm">Versatilidad Radical</p>
                  <p className="text-gray-400 text-xs">Desde MVPs y sistemas empresariales</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* PORTFOLIO - Columna Derecha */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-bold text-3xl md:text-4xl text-white text-center lg:text-left">
              NUESTRO TRABAJO HABLA POR NOSOTROS.
            </h2>

            {/* Grid de proyectos 2x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="group"
                >
                  <Card
                    className="bg-zinc-900 border-zinc-800 overflow-hidden transition-all duration-300 h-full"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = project.colors.border + '66';
                      e.currentTarget.style.boxShadow = `0 20px 40px -10px ${project.colors.glow}0D`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '';
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    {/* Placeholder con gradiente */}
                    <div className={`relative h-32 bg-gradient-to-br ${project.gradientClasses} flex items-center justify-center overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                      <span className="text-4xl font-bold text-white/10 select-none">
                        {project.name.substring(0, 2)}
                      </span>
                    </div>

                    {/* Contenido */}
                    <div className="p-3 space-y-2">
                      <h3
                        className="text-white font-bold text-base transition-colors"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = project.colors.accent;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '';
                        }}
                      >
                        {project.name}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[10px] border transition-colors duration-200"
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
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
