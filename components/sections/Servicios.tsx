"use client";
import { Lightbulb, Code2, Brain } from "lucide-react";
import { motion } from "framer-motion";

export default function Servicios() {
  const servicios = [
    {
      name: "Validamos tu Idea",
      icon: Lightbulb,
      description: "MVPs y prototipos para probar tu concepto en el mercado real, rápido y con inversión controlada.",
      tags: ["MVP", "Prototipo", "Validación"],
    },
    {
      name: "Construimos tu Producto",
      icon: Code2,
      description: "Desarrollo completo de plataformas web, apps móviles y sistemas SaaS escalables.",
      tags: ["Web Apps", "Mobile", "SaaS"],
    },
    {
      name: "Potenciamos con IA",
      icon: Brain,
      description: "Chatbots, automatización de procesos y agentes inteligentes que optimizan tu operación.",
      tags: ["Chatbots", "Automatización", "IA"],
    },
  ];

  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-dark-bg py-16 w-full scroll-mt-36"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto px-4 md:px-6 max-w-7xl container"
      >
        <div className="mx-auto px-4 md:px-6 max-w-7xl container">
          <div className="text-center mb-10">
            <h2 className="font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-6">
              <span className="block text-white">
                DESDE TU{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-emerald-400">
                  IDEA
                </span>
              </span>
              <span className="block text-white">HASTA EL PRODUCTO</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {servicios.map((servicio) => (
              <div
                key={servicio.name}
                className="bg-dark-card border border-dark-border rounded-lg px-5 py-4 transition-all duration-300 hover:border-neon-green/50 group flex flex-col md:flex-row md:items-center gap-4"
              >
                <div className="flex items-center gap-4 md:w-64 shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-green/20 to-neon-green/5 border border-neon-green/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-neon-green">
                    <servicio.icon className="w-5 h-5 text-neon-green" />
                  </div>
                  <span className="text-white text-lg font-bold">
                    {servicio.name}
                  </span>
                </div>
                <p className="text-gray-300 text-sm flex-grow flex items-center">
                  {servicio.description}
                </p>
                <div className="flex flex-wrap items-center gap-1.5 md:justify-end shrink-0">
                  {servicio.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-px bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs rounded-full inline-flex items-center"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}