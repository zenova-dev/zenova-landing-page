"use client";
import { Code2, Brain } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { motion } from "framer-motion";
import { useState, MouseEvent } from "react";

export default function Servicios() {
  const servicios = [
    {
      name: "Desarrollo de Alto Impacto.",
      icon: Code2,
      description: "Soluciones web clarificadas y Apps nativas (iOS/Android) con un stack sólido. Escalables.",
      tags: ["E-commerce", "SaaS", "Marketplace"],
    },
    {
      name: "Automatización e Insights Reales.",
      icon: Brain,
      description: "Soluciones prácticas de IA para reducir costos, predecir tendencias y automatizar tareas.",
      tags: ["Automatización", "Machine Learning", "Análisis Predictivo"],
    },
  ];

  const [tilt, setTilt] = useState({ x: 0, y: 0, index: -1 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg tilt
    const rotateY = ((x - centerX) / centerX) * 10;

    setTilt({ x: rotateX, y: rotateY, index });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, index: -1 });
  };

  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-dark-bg py-24 w-full scroll-mt-36"
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
          <div className="text-center mb-16">
            <h2 className="font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-6">
              <span className="block text-white">
                NO SOMOS OTRA{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-emerald-400">
                  FÁBRICA DE CÓDIGO
                </span>
              </span>
              <span className="block text-white">ABURRIDA.</span>
            </h2>
          </div>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            {servicios.map((servicio, index) => (
              <div
                key={servicio.name}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform:
                    tilt.index === index
                      ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
                      : "perspective(1000px) rotateX(0deg) rotateY(0deg)",
                  transition: "transform 0.1s ease-out",
                }}
              >
                <Card className="bg-dark-card border border-dark-border overflow-hidden transition-all duration-300 hover:border-neon-green/50 hover:shadow-2xl hover:shadow-neon-green/20 hover:-translate-y-2 flex flex-col group">
                  <CardHeader className="pt-8 pb-6 px-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-green/20 to-neon-green/5 border border-neon-green/50 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:border-neon-green">
                      <servicio.icon className="w-10 h-10 text-neon-green" />
                    </div>
                    <CardTitle className="text-white text-3xl mb-4 font-bold">
                      {servicio.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow px-8 pb-8">
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {servicio.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {servicio.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-neon-green/10 border border-neon-green/30 text-neon-green text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}