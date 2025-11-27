"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "../ui/section-title";
import { Button } from "../ui/button";
import { Bot, Zap, Shield, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hermes() {
  const features = [
    { icon: Bot, title: "IA Avanzada", description: "Procesamiento de lenguaje natural de última generación" },
    { icon: Zap, title: "Respuestas Rápidas", description: "Interacciones instantáneas y precisas" },
    { icon: Shield, title: "Seguridad Robusta", description: "Protección de datos y privacidad" },
    { icon: Sparkles, title: "Personalización", description: "Se adapta a las necesidades específicas de tu negocio" },
  ];

  return (
    <section id="hermes" className="bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950 py-24 w-full scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto px-4 md:px-6 max-w-7xl container"
      >
        <SectionTitle 
          title="Conoce a Hermes" 
          subtitle="Nuestro asistente virtual impulsado por IA, diseñado para revolucionar la atención al cliente"
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">Potencia tu Servicio al Cliente con IA</h3>
            <p className="text-gray-300 text-lg">
              Hermes es más que un simple chatbot. Es un asistente virtual inteligente que aprende y se adapta a tu negocio, 
              ofreciendo una experiencia de atención al cliente excepcional las 24 horas del día, los 7 días de la semana.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                  <span className="text-white font-medium">{feature.title}</span>
                </div>
              ))}
            </div>
            <Button 
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
            <Link href="https://www.hermes-chatbot.online/" target="_blank">
              Prueba Hermes Gratis
            </Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative w-full aspect-square"
          >
            <div className="absolute inset-0 w-3/4 h-3/4 mx-auto my-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full opacity-20"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/hermes.png"
                alt="Hermes - Asistente virtual con inteligencia artificial para mejorar la atención al cliente"
                className="w-2/3 h-2/3 object-contain z-10 p-8"
                width={400}
                height={400}
                loading="lazy"
                quality={85}
                sizes="(max-width: 768px) 66vw, 400px"
              />
            </div>
          </motion.div>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
