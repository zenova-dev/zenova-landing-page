"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative w-full bg-black py-24 px-4 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Title with gradient */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              ¿TENÉS UNA IDEA QUE TE QUITA EL SUEÑO?
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Deja de darle vueltas. Agendá una consulta gratis de 30 min y recibí
            feedback honesto.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-neon-green text-black hover:bg-neon-green/90 font-bold text-lg px-8 py-6 rounded-full transition-all hover:scale-105 shadow-lg shadow-neon-green/20"
            >
              <a href="#contacto">
                AGENDAR KICKOFF
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
