"use client";
import React from "react";
import { Search, Palette, Rocket, HeartHandshake, Sparkles, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
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

// StepCard Component con toda la información visible
interface StepCardProps {
  step: typeof steps[0];
  index: number;
}

const StepCard = ({ step, index }: StepCardProps) => {
  const details = stepDetails[step.number];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className={cn(
        "bg-dark-card border-2 rounded-2xl p-6",
        "hover:-translate-y-1 transition-all duration-300",
        "flex flex-col h-full",
        stepColorMap[step.color].borderColor,
        stepColorMap[step.color].glowColor
      )}
    >
      {/* Header: Badge + Icono */}
      <div className="flex items-center justify-between mb-4">
        <span className={cn(
          "text-xs font-bold px-3 py-1 rounded",
          stepColorMap[step.color].bgGradient,
          stepColorMap[step.color].iconColor
        )}>
          PASO {step.number}
        </span>

        <div className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center",
          stepColorMap[step.color].bgGradient
        )}>
          <step.icon className={cn("w-6 h-6", stepColorMap[step.color].iconColor)} />
        </div>
      </div>

      {/* Título */}
      <h3 className="text-white text-lg font-bold mb-3 leading-tight">
        {step.title}
      </h3>

      {/* Descripción */}
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
        {details.description}
      </p>

      {/* Entregables (primeros 3) */}
      <div className="mb-4 flex-grow">
        <p className={cn(
          "text-xs font-semibold mb-2",
          stepColorMap[step.color].iconColor
        )}>
          Entregables clave:
        </p>
        <ul className="space-y-1">
          {details.deliverables.slice(0, 3).map((item, i) => (
            <li key={i} className="text-gray-400 text-xs flex items-start gap-2">
              <span className={stepColorMap[step.color].iconColor}>✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer: Duración */}
      <div className="pt-3 border-t border-dark-border mt-auto">
        <p className="text-gray-500 text-xs">
          <span className="text-gray-400 font-semibold">Duración:</span>{" "}
          {details.duration}
        </p>
      </div>
    </motion.div>
  );
};

export default function ProcessCta() {
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

        {/* Main Grid: Steps 2x2 (70%) + CTA Sidebar (30%) */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          {/* Grid 2x2 de Steps - 7 columnas (70%) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <StepCard key={step.number} step={step} index={index} />
              ))}
            </div>
          </div>

          {/* CTA Sidebar - 3 columnas (30%) */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={cn(
                  "bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-purple-900/30",
                  "border-2 border-purple-500/50 rounded-3xl p-8",
                  "backdrop-blur-md",
                  "hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/40",
                  "transition-all duration-300",
                  "flex flex-col justify-center items-center text-center",
                  "min-h-[400px] lg:min-h-[600px]"
                )}
              >
                {/* Icono decorativo */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>

                {/* Título gradient */}
                <h3 className="font-bold text-3xl lg:text-4xl leading-tight mb-6">
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
                    ¿TENÉS UNA
                  </span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
                    IDEA QUE TE
                  </span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
                    QUITA EL SUEÑO?
                  </span>
                </h3>

                {/* Descripción */}
                <p className="text-gray-300 text-base mb-8 max-w-xs leading-relaxed">
                  Dejá de darle vueltas. Agendá una consulta gratis de 30 min y recibí feedback honesto.
                </p>

                {/* CTA Button */}
                <a href="#contacto" className="w-full">
                  <Button
                    size="lg"
                    className="w-full bg-neon-green hover:bg-neon-green/90 text-black font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-neon-green/30"
                  >
                    AGENDAR KICKOFF
                    <ChevronRight className="ml-2 w-6 h-6" />
                  </Button>
                </a>

                {/* Trust indicator */}
                <p className="text-gray-500 text-xs mt-6">
                  ✓ Sin compromiso · ✓ 30 minutos · ✓ 100% gratis
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
