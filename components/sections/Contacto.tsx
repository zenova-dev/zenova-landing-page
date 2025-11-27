"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const formSchema = z.object({
  nombre: z.string().min(1, { message: "El nombre es requerido" }),
  email: z.string().email({ message: "Email inválido" }),
  telefono: z.string().optional(),
  mensaje: z.string().min(1, { message: "El mensaje es requerido" }),
});

type FormData = z.infer<typeof formSchema>;

export default function Contacto() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const contactoRef = useRef<HTMLElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#contacto' && contactoRef.current) {
      contactoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section 
      id="contacto" 
      ref={contactoRef}
      className=" py-12 md:py-24 lg:py-32 w-full scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-5xl font-bold text-center text-white mb-12">Contáctanos</h2>
        <AnimatePresence mode="wait">
          {submitStatus === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="max-w-2xl mx-auto bg-green-800/30 p-10 rounded-2xl shadow-2xl backdrop-blur-sm text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
                className="text-6xl mb-6 text-green-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-4">¡Mensaje enviado con éxito!</h3>
              <p className="text-gray-300">Gracias por contactarnos. Te responderemos pronto.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-2xl mx-auto space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <label htmlFor="nombre" className="sr-only">Nombre completo</label>
                  <input
                    {...register("nombre")}
                    id="nombre"
                    placeholder="Tu nombre"
                    aria-required="true"
                    aria-invalid={errors.nombre ? "true" : "false"}
                    aria-describedby={errors.nombre ? "nombre-error" : undefined}
                    className="w-full px-4 py-3 bg-gray-700/50 border-2 border-purple-500/50 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-all"
                  />
                  {errors.nombre && <p id="nombre-error" className="text-red-400 text-xs mt-1" role="alert">{errors.nombre.message}</p>}
                </div>

                <div className="relative">
                  <label htmlFor="email" className="sr-only">Correo electrónico</label>
                  <input
                    {...register("email")}
                    id="email"
                    type="email"
                    placeholder="Tu email"
                    aria-required="true"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="w-full px-4 py-3 bg-gray-700/50 border-2 border-purple-500/50 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-all"
                  />
                  {errors.email && <p id="email-error" className="text-red-400 text-xs mt-1" role="alert">{errors.email.message}</p>}
                </div>
              </div>
              
              <div className="relative">
                <label htmlFor="telefono" className="sr-only">Teléfono</label>
                <input
                  {...register("telefono")}
                  id="telefono"
                  type="tel"
                  placeholder="Tu teléfono (opcional)"
                  aria-required="false"
                  className="w-full px-4 py-3 bg-gray-700/50 border-2 border-purple-500/50 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-all"
                />
              </div>

              <div className="relative">
                <label htmlFor="mensaje" className="sr-only">Mensaje</label>
                <textarea
                  {...register("mensaje")}
                  id="mensaje"
                  rows={6}
                  placeholder="Tu mensaje"
                  aria-required="true"
                  aria-invalid={errors.mensaje ? "true" : "false"}
                  aria-describedby={errors.mensaje ? "mensaje-error" : "mensaje-help"}
                  className="w-full px-4 py-3 bg-gray-700/50 border-2 border-purple-500/50 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-all resize-none"
                ></textarea>
                {errors.mensaje && <p id="mensaje-error" className="text-red-400 text-xs mt-1" role="alert">{errors.mensaje.message}</p>}
                <p id="mensaje-help" className="text-gray-300 text-sm mt-2">
                  Contanos sobre tu proyecto, ideas o cualquier consulta que tengas. Estamos para ayudarte.
                </p>
              </div>
              
              <Button
                type="submit"
                aria-label="Enviar formulario de contacto"
                aria-busy={isSubmitting}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-purple-700"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2 }}
                  >
                    <span className="text-white">Enviando...</span>
                  </motion.div>
                ) : (
                  'Enviar Mensaje'
                )}
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
        
        {submitStatus === 'error' && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-red-400 text-center font-semibold bg-red-900/30 py-2 px-4 rounded-full inline-block"
          >
            Error al enviar el mensaje. Por favor, intentá de nuevo.
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}