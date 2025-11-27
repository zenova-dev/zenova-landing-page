"use client";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-900 via-gray-900 to-gray-950 w-full min-h-screen flex items-center scroll-mt-20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl container"
      >
        <div className="flex flex-col items-center space-y-10 text-center">
          <div className="space-y-6">
            <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Innovación Digital
              </span>
              <span className="block text-white">a tu Alcance</span>
            </h1>
            <p className="mx-auto max-w-[800px] text-gray-300 text-xl sm:text-2xl leading-relaxed">
              En Zenova, transformamos tus ideas en soluciones tecnológicas potentes. Desde aplicaciones web hasta sistemas complejos, estamos acá para impulsar tu negocio hacia el futuro.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contacto" >
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Inicia tu Proyecto
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              </a>
              <a href="#servicios">
              <Button
                variant="outline"
                size="lg"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-lg px-8 py-3 rounded-full transition-all duration-300"
              >
                Explora Nuestros Servicios
              </Button>
              </a>
            </div>
            <p className="text-purple-300 text-sm font-medium">
              Listos para llevar tu visión al siguiente nivel tecnológico
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {['Soluciones Personalizadas', 'Innovación Constante', 'Tecnología de Vanguardia'].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-purple-800 bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                <CheckCircle2 className="w-6 h-6 text-purple-400" />
                <span className="text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}