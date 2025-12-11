"use client";
import { ChevronRight, DollarSign, Globe, Sparkles } from "lucide-react";
import { RippleButton } from "../ui/ripple-button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const valueProps = [
    {
      title: "Financiamiento Flexible",
      description: "Equity, financiamiento fintech",
      icon: DollarSign,
    },
    {
      title: "Cobertura Global, Atención Local",
      description: "Talento senior 100% en tu zona horaria",
      icon: Globe,
    },
    {
      title: "Versatilidad Radical",
      description: "Desde MVPs hasta sistemas enterprise escalables",
      icon: Sparkles,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-dark-bg w-full min-h-screen flex items-center scroll-mt-20">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Gradient overlays with parallax at different speeds */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto px-8 sm:px-12 lg:px-24 xl:px-32 py-12 sm:py-16 lg:py-20 max-w-7xl container"
      >
        <div className="flex flex-col items-center space-y-10 text-center">
          <div className="space-y-6">
            <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl tracking-tight leading-tight max-w-6xl">
              <span className="block text-white">
                TUS IDEAS SON UN CAOS.
              </span>
              <span className="block text-white">
                NOSOTROS LAS CONVERTIMOS EN{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-emerald-400">
                  PRODUCTOS DIGITALES.
                </span>
              </span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-2xl leading-relaxed max-w-4xl">
              Transformamos conceptos en MVPs y sistemas robustos. Soluciones tecnológicas para startups y empresas que exigen velocidad, creatividad y resultados.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <a href="#servicios">
                  <RippleButton
                    size="lg"
                    className="bg-neon-green hover:bg-neon-green/90 text-black text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-bold"
                  >
                    Ver qué hacemos
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </RippleButton>
                </a>
              </motion.div>
            </div>
            <a href="#portfolio" className="inline-block">
              <p className="text-gray-400 hover:text-neon-green text-sm font-medium transition-colors duration-300">
                Ver nuestro trabajo →
              </p>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-6xl">
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center space-y-3 bg-dark-card border border-dark-border rounded-lg p-6 backdrop-blur-sm hover:border-neon-green/50 transition-all duration-300"
              >
                <prop.icon className="w-8 h-8 text-neon-green" />
                <h3 className="text-white font-bold text-lg">{prop.title}</h3>
                <p className="text-gray-400 text-sm">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}