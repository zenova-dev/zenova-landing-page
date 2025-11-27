"use client";
import { Code, Smartphone, Brain } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { SectionTitle } from "../ui/section-title";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function Servicios() {
  const servicios = [
    {
      name: "Desarrollo Web Avanzado",
      icon: Code,
      description: "Creamos sitios web y aplicaciones web de alto rendimiento y diseño atractivo.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Aplicaciones Móviles",
      icon: Smartphone,
      description: "Desarrollamos apps multiplataforma para iOS y Android.",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Inteligencia Artificial",
      icon: Brain,
      description: "Implementamos soluciones de IA en tus procesos.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="servicios"
      className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900 py-24 w-full scroll-mt-36"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto px-4 md:px-6 max-w-7xl container"
      >
        <div className="mx-auto px-4 md:px-6 max-w-7xl container">
          <SectionTitle 
            title="Nuestros Servicios" 
            subtitle="Soluciones tecnológicas adaptadas a tus necesidades"
          />
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {servicios.map((servicio) => (
              <Card 
                key={servicio.name} 
                className="bg-gray-800 border-none overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
              >
                <div className={`h-2 w-full bg-gradient-to-r ${servicio.color}`}></div>
                <CardHeader className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <servicio.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl mb-2">
                    {servicio.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-300 text-lg">{servicio.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <a
              href="#contacto"
            >
              <Button 
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Quiero presupuestar mi proyecto
              </Button>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}