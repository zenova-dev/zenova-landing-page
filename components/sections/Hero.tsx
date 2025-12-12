"use client";
import { ChevronRight } from "lucide-react";
import { RippleButton } from "../ui/ripple-button";
import { motion } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";
import { useFocusOnScroll } from "@/hooks/useFocusOnScroll";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Auto-focus en mobile cuando el usuario vuelve al hero
  const { ref: focusRef } = useFocusOnScroll({
    enabled: true,
    threshold: 0.7,
    delay: 300,
    once: false, // Permitir re-focus si vuelve al hero
    focusableSelector: '#hero-cta-button',
  });

  // Combinar refs
  const setRefs = useCallback((element: HTMLElement | null) => {
    sectionRef.current = element;
    (focusRef as React.MutableRefObject<HTMLElement | null>).current = element;
  }, [focusRef]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={setRefs} className="relative overflow-hidden bg-dark-bg w-full min-h-screen flex items-center scroll-mt-20">
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
        className="relative mx-auto px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-12 sm:py-16 lg:py-20 max-w-7xl container"
      >
        <div className="flex flex-col items-center space-y-8 text-center">
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
                id="hero-cta-button"
                size="lg"
                className="bg-neon-green hover:bg-neon-green/90 text-black text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-bold"
              >
                Ver qué hacemos
                <ChevronRight className="ml-2 w-5 h-5" />
              </RippleButton>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}