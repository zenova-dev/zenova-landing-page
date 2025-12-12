"use client";
import { Lightbulb, Code2, Brain, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Servicios() {
  const servicios = [
    {
      name: "Validamos tu Idea",
      icon: Lightbulb,
      question: "¿Tenés una idea sin validar?",
      description:
        "MVPs y prototipos para probar tu concepto en el mercado real, rápido y con inversión controlada.",
      features: ["MVP", "Prototipo", "Validación de mercado"],
    },
    {
      name: "Construimos tu Producto",
      icon: Code2,
      question: "¿Necesitás desarrollar tu producto?",
      description:
        "Desarrollo completo de plataformas web, apps móviles y sistemas SaaS escalables.",
      features: ["Web Apps", "Mobile", "SaaS"],
    },
    {
      name: "Potenciamos con IA",
      icon: Brain,
      question: "¿Querés potenciar lo que ya tenés?",
      description:
        "Chatbots, automatización de procesos y agentes inteligentes que optimizan tu operación.",
      features: ["Chatbots", "Automatización", "Agentes IA"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-dark-bg py-20 w-full scroll-mt-36"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative mx-auto px-4 md:px-6 max-w-7xl container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-4">
            <span className="text-white">¿EN QUÉ </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-emerald-400">
              ETAPA
            </span>
            <span className="text-white"> ESTÁS?</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Podés empezar en cualquier punto del camino
          </p>
        </motion.div>

        {/* Grid de 3 Cards en Fila */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {servicios.map((servicio) => (
            <motion.div
              key={servicio.name}
              variants={cardVariants}
              className="bg-dark-card border border-dark-border rounded-2xl p-8 transition-all duration-300 hover:border-neon-green/50 hover:-translate-y-1 group flex flex-col"
            >
              {/* Ícono */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-green/20 to-neon-green/5 border border-neon-green/50 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:border-neon-green">
                <servicio.icon className="w-8 h-8 text-neon-green" />
              </div>

              {/* Pregunta */}
              <p className="text-neon-green text-sm font-medium mb-3">
                {servicio.question}
              </p>

              {/* Título */}
              <h3 className="text-white text-xl font-bold mb-4">
                {servicio.name}
              </h3>

              {/* Descripción */}
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {servicio.description}
              </p>

              {/* Features con checks */}
              <ul className="space-y-3 mb-8">
                {servicio.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <Check className="w-4 h-4 text-neon-green flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="#contacto"
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-neon-green hover:text-white transition-colors group/cta"
              >
                Empezar acá
                <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
