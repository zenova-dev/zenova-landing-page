"use client";

import { Code2, Rocket, Globe, Users } from "lucide-react";
import { SectionTitle } from "../ui/section-title";
import { motion } from "framer-motion";

const razones = [
  {
    icon: Code2,
    title: "Versatilidad",
    description: "Atendemos todo tipo de proyectos, desde desarrollos web hasta aplicaciones móviles y sistemas complejos."
  },
  {
    icon: Rocket,
    title: "Financiamiento flexible",
    description: "Ofrecemos planes de cuotas sin interés para que puedas financiar el desarrollo de tu software."
  },
  {
    icon: Globe,
    title: "Cobertura global",
    description: "Trabajamos a nivel local, nacional e internacional desde Argentina."
  },
  {
    icon: Users,
    title: "Relaciones flexibles",
    description: "Estamos abiertos tanto a proyectos a corto plazo como a colaboraciones a largo plazo."
  }
];

export default function PorQueNosotros() {
  return (
    <section
      id="por-que-nosotros"
      className="bg-gradient-to-b from-gray-900 to-gray-800 py-24 w-full scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto px-4 md:px-6 max-w-7xl container"
      >
        <SectionTitle 
          title="¿Por qué elegirnos?" 
          subtitle="Descubre las razones por las que somos tu mejor opción para llevar tu proyecto al siguiente nivel"
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {razones.map((razon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center"
              >
                <razon.icon className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{razon.title}</h3>
                <p className="text-gray-300">{razon.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
