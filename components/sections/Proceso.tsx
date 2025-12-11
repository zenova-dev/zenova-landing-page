"use client";
import { Search, Palette, Rocket, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/section-title";
import { Timeline, TimelineItem } from "../ui/timeline";
import { cn } from "@/lib/utils";

export default function Proceso() {
  const steps = [
    {
      title: "Descubrimiento & Planificación",
      icon: Search,
      color: "from-green-400 to-emerald-500",
      accentColor: "border-green-400",
      bgGlow: "bg-green-400/10",
      description: "Analizamos tus necesidades y definimos objetivos claros para tu proyecto."
    },
    {
      title: "Diseño & Prototipado",
      icon: Palette,
      color: "from-blue-400 to-cyan-500",
      accentColor: "border-blue-400",
      bgGlow: "bg-blue-400/10",
      description: "Creamos prototipos visuales y validamos la experiencia de usuario."
    },
    {
      title: "Desarrollo Ágil (Sprints)",
      icon: Rocket,
      color: "from-purple-400 to-violet-500",
      accentColor: "border-purple-400",
      bgGlow: "bg-purple-400/10",
      description: "Desarrollamos en iteraciones rápidas con entregas continuas."
    },
    {
      title: "Lanzamiento & Soporte",
      icon: HeartHandshake,
      color: "from-pink-400 to-rose-500",
      accentColor: "border-pink-500",
      bgGlow: "bg-pink-500/10",
      description: "Desplegamos tu proyecto y brindamos soporte continuo."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const arrowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section
      id="proceso"
      className="bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 py-24 w-full scroll-mt-36"
    >
      <div className="mx-auto px-4 md:px-6 max-w-7xl container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle
            title="Nuestro Proceso"
            subtitle="Un enfoque estructurado para llevar tu idea a la realidad"
          />
        </motion.div>

        {/* Desktop: Horizontal Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden lg:block mt-16"
        >
          <Timeline>
            {steps.map((step, index) => (
              <TimelineItem
                key={step.title}
                title={step.title}
                description={step.description}
                icon={step.icon}
                number={index + 1}
                color={step.color}
                accentColor={step.accentColor}
                isLast={index === steps.length - 1}
              />
            ))}
          </Timeline>
        </motion.div>

        {/* Mobile: Vertical Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="lg:hidden flex flex-col gap-6 mt-12"
        >
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col">
              <motion.div
                variants={itemVariants}
              >
                <div className={cn(
                  "relative bg-gray-800 border-2 rounded-xl p-6 transition-all duration-300 hover:shadow-xl",
                  step.accentColor
                )}>
                  {/* Glow effect */}
                  <div className={cn(
                    "absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl",
                    step.bgGlow
                  )}></div>

                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gray-900 border-2 border-gray-700 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>

                  {/* Icon */}
                  <div className={cn(
                    "w-16 h-16 rounded-full bg-gradient-to-br flex items-center justify-center mb-4",
                    step.color
                  )}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-xl font-bold mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>

              {/* Arrow between steps (mobile) */}
              {index < steps.length - 1 && (
                <motion.div
                  variants={arrowVariants}
                  className="flex items-center justify-center py-3"
                >
                  <svg
                    className="w-6 h-6 text-gray-600 transform rotate-90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
