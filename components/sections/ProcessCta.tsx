"use client";
import React, { useState } from "react";
import { Search, Palette, Rocket, HeartHandshake, ArrowRight, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const stepColorMap: Record<string, { borderColor: string; glowColor: string; bgGradient: string; iconColor: string }> = {
  'neon-green': {
    borderColor: 'border-neon-green/30 hover:border-neon-green',
    glowColor: 'hover:shadow-lg hover:shadow-neon-green/20',
    bgGradient: 'bg-gradient-to-br from-neon-green/20 to-neon-green/5',
    iconColor: 'text-neon-green'
  },
  'neon-blue': {
    borderColor: 'border-neon-blue/30 hover:border-neon-blue',
    glowColor: 'hover:shadow-lg hover:shadow-neon-blue/20',
    bgGradient: 'bg-gradient-to-br from-neon-blue/20 to-neon-blue/5',
    iconColor: 'text-neon-blue'
  },
  'neon-purple': {
    borderColor: 'border-neon-purple/30 hover:border-neon-purple',
    glowColor: 'hover:shadow-lg hover:shadow-neon-purple/20',
    bgGradient: 'bg-gradient-to-br from-neon-purple/20 to-neon-purple/5',
    iconColor: 'text-neon-purple'
  },
  'pink-500': {
    borderColor: 'border-pink-500/30 hover:border-pink-500',
    glowColor: 'hover:shadow-lg hover:shadow-pink-500/20',
    bgGradient: 'bg-gradient-to-br from-pink-500/20 to-pink-500/5',
    iconColor: 'text-pink-500'
  }
};

interface StepDetails {
  deliverables: string[];
  duration: string;
  description: string;
}

const stepDetails: Record<number, StepDetails> = {
  1: {
    description: "Entendemos tu visión, definimos alcance y establecemos roadmap claro.",
    deliverables: [
      "Workshop de descubrimiento",
      "Documento de requerimientos",
      "Arquitectura técnica propuesta",
      "Timeline y presupuesto detallado"
    ],
    duration: "1-2 semanas"
  },
  2: {
    description: "Creamos prototipos interactivos y validamos la experiencia de usuario.",
    deliverables: [
      "Wireframes y mockups",
      "Prototipo clickeable",
      "Design system personalizado",
      "Pruebas de usabilidad"
    ],
    duration: "2-3 semanas"
  },
  3: {
    description: "Desarrollo iterativo en sprints con entregas cada 2 semanas.",
    deliverables: [
      "Código limpio y documentado",
      "Sprints de 2 semanas",
      "Demos regulares",
      "Testing automatizado"
    ],
    duration: "4-12 semanas"
  },
  4: {
    description: "Deploy a producción y soporte continuo post-lanzamiento.",
    deliverables: [
      "Deploy en tu infraestructura",
      "Monitoreo y analytics",
      "Documentación técnica completa",
      "Soporte por 30 días incluido"
    ],
    duration: "1 semana + soporte continuo"
  }
};

const steps = [
  {
    number: 1,
    title: "Descubrimiento & Planificación",
    icon: Search,
    color: "neon-green",
  },
  {
    number: 2,
    title: "Diseño & Prototipado",
    icon: Palette,
    color: "neon-blue",
  },
  {
    number: 3,
    title: "Desarrollo Ágil (Sprints)",
    icon: Rocket,
    color: "neon-purple",
  },
  {
    number: 4,
    title: "Lanzamiento & Soporte",
    icon: HeartHandshake,
    color: "pink-500",
  },
];

export default function ProcessCta() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const toggleStep = (stepNumber: number) => {
    setExpandedStep(expandedStep === stepNumber ? null : stepNumber);
  };

  return (
    <section id="proceso" className="bg-gradient-to-b from-dark-bg to-black py-20 px-6 scroll-mt-36">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-white">CÓMO</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-emerald-400">
              TRABAJAMOS
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Nuestro proceso iterativo asegura transparencia y resultados en cada etapa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* PROCESS - Columna Izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Timeline Horizontal en desktop, vertical en mobile */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-4">
              {steps.map((step, index) => (
                <React.Fragment key={step.number}>
                  {/* Step Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full lg:w-auto lg:flex-1"
                  >
                    {/* Step number label */}
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 text-center">
                      PASO {step.number}
                    </p>

                    <button
                      onClick={() => toggleStep(step.number)}
                      className="w-full group relative cursor-pointer"
                      aria-expanded={expandedStep === step.number}
                      aria-label={`${expandedStep === step.number ? 'Cerrar' : 'Ver'} detalles de ${step.title}`}
                    >
                      {/* Card - Larger and more spacious */}
                      <div className={cn(
                        "bg-dark-card border-2 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-2 min-h-[240px] lg:min-h-[280px] flex flex-col justify-between",
                        stepColorMap[step.color].borderColor,
                        stepColorMap[step.color].glowColor,
                        expandedStep === step.number && 'ring-2 ring-neon-green/50'
                      )}>
                        {/* Icon circle - larger */}
                        <div className={cn(
                          "w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4 lg:mb-6 rounded-full flex items-center justify-center transition-transform group-hover:scale-110",
                          stepColorMap[step.color].bgGradient
                        )}>
                          <step.icon className={cn("w-8 h-8 lg:w-10 lg:h-10", stepColorMap[step.color].iconColor)} />
                        </div>

                        {/* Title - larger and bolder */}
                        <p className="text-white text-center text-base lg:text-lg font-bold leading-tight mb-3 lg:mb-4">
                          {step.title}
                        </p>

                        {/* Click indicator - more prominent */}
                        <p className="text-gray-400 text-center text-xs lg:text-sm group-hover:text-neon-green transition-colors font-medium">
                          {expandedStep === step.number ? '↑ Ver menos' : '↓ Ver detalles'}
                        </p>
                      </div>
                    </button>
                  </motion.div>

                  {/* Circular arrow between steps (except last) - Desktop */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="hidden lg:flex items-center justify-center flex-shrink-0"
                    >
                      <div className="w-10 h-10 rounded-full border-2 border-neon-green/30 flex items-center justify-center bg-dark-bg/50">
                        <ArrowRight className="w-5 h-5 text-neon-green" />
                      </div>
                    </motion.div>
                  )}

                  {/* Down arrow on mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center w-full py-2">
                      <div className="w-8 h-8 rounded-full border-2 border-neon-green/30 flex items-center justify-center bg-dark-bg/50">
                        <ArrowRight className="w-4 h-4 text-neon-green rotate-90" />
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Expandable details panel - OUTSIDE timeline, appears below */}
            <AnimatePresence>
              {expandedStep !== null && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-dark-bg border border-dark-border rounded-lg p-6 lg:p-8 space-y-4 mt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center",
                        stepColorMap[steps[expandedStep - 1].color].bgGradient
                      )}>
                        {React.createElement(steps[expandedStep - 1].icon, {
                          className: cn("w-6 h-6", stepColorMap[steps[expandedStep - 1].color].iconColor)
                        })}
                      </div>
                      <h3 className="text-white font-bold text-xl">
                        Paso {expandedStep}: {steps[expandedStep - 1].title}
                      </h3>
                    </div>

                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                      {stepDetails[expandedStep].description}
                    </p>

                    <div>
                      <p className="text-neon-green font-semibold text-sm mb-3">
                        Entregables:
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {stepDetails[expandedStep].deliverables.map((item, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                            <span className="text-neon-green mt-1">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-dark-border">
                      <p className="text-gray-400 text-sm">
                        <span className="text-white font-semibold">Duración estimada:</span> {stepDetails[expandedStep].duration}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* CTA - Columna Derecha */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center items-center text-center space-y-6 bg-gradient-to-br from-dark-card/50 to-black/50 p-8 lg:p-12 rounded-2xl border border-dark-border"
          >
            {/* Título con gradiente */}
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
                ¿TENÉS UNA IDEA
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
                QUE TE QUITA EL SUEÑO?
              </span>
            </h2>

            {/* Descripción */}
            <p className="text-gray-300 text-lg max-w-md">
              Deja de darle vueltas. Agendá una consulta gratis de 30 min y recibí feedback honesto.
            </p>

            {/* CTA Button */}
            <a href="#contacto">
              <Button
                size="lg"
                className="bg-neon-green hover:bg-neon-green/90 text-black font-bold text-lg px-8 py-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-neon-green/30"
              >
                AGENDAR KICKOFF
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
