"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { RippleButton } from "../ui/ripple-button";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const formSchema = z.object({
  nombre: z.string().min(1, { message: "El nombre es requerido" }),
  email: z.string().email({ message: "Email inválido" }),
  telefono: z.string().optional(),
  mensaje: z.string().min(1, { message: "El mensaje es requerido" }),
  acceptPrivacy: z.boolean().refine(val => val === true, {
    message: "Debes aceptar la política de privacidad"
  })
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
      className="py-12 md:py-24 lg:py-32 w-full scroll-mt-20 bg-dark-bg"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white">Contáctanos</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Contanos sobre tu proyecto. Transformemos tus ideas en realidad.
          </p>
        </div>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-2xl mx-auto bg-dark-card border border-neon-green/50 p-6 rounded-lg backdrop-blur-sm mb-6"
          >
            <div className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-neon-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="text-lg font-bold text-white">¡Mensaje enviado con éxito!</h3>
                <p className="text-gray-300 text-sm">Te responderemos pronto.</p>
              </div>
            </div>
          </motion.div>
        )}

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-2xl mx-auto space-y-6"
        >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="nombre" className="sr-only">Nombre completo</label>
                  <input
                    {...register("nombre")}
                    id="nombre"
                    placeholder="Tu nombre"
                    autoComplete="name"
                    aria-required="true"
                    aria-invalid={errors.nombre ? "true" : "false"}
                    aria-describedby={errors.nombre ? "nombre-error" : undefined}
                    className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-green/50 hover:border-neon-green/30 transition-all duration-300"
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
                    autoComplete="email"
                    aria-required="true"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-green/50 hover:border-neon-green/30 transition-all duration-300"
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
                  autoComplete="tel"
                  aria-required="false"
                  className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-green/50 hover:border-neon-green/30 transition-all duration-300"
                />
              </div>

              <div className="relative">
                <label htmlFor="mensaje" className="sr-only">Mensaje</label>
                <textarea
                  {...register("mensaje")}
                  id="mensaje"
                  rows={6}
                  placeholder="Contanos sobre tu proyecto..."
                  aria-required="true"
                  aria-invalid={errors.mensaje ? "true" : "false"}
                  aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
                  className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-green/50 hover:border-neon-green/30 transition-all duration-300 resize-none"
                ></textarea>
                {errors.mensaje && <p id="mensaje-error" className="text-red-400 text-xs mt-1" role="alert">{errors.mensaje.message}</p>}
              </div>

              <div className="relative flex items-start gap-3">
                <input
                  {...register("acceptPrivacy")}
                  id="acceptPrivacy"
                  type="checkbox"
                  aria-required="true"
                  aria-invalid={errors.acceptPrivacy ? "true" : "false"}
                  aria-describedby={errors.acceptPrivacy ? "privacy-error" : undefined}
                  className="mt-1 w-4 h-4 bg-dark-card border border-dark-border rounded text-neon-green focus:ring-neon-green focus:ring-2"
                />
                <div className="flex-1">
                  <label htmlFor="acceptPrivacy" className="text-gray-300 text-sm">
                    Acepto la{" "}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      className="text-neon-green hover:underline"
                    >
                      política de privacidad
                    </a>
                  </label>
                  {errors.acceptPrivacy && (
                    <p id="privacy-error" className="text-red-400 text-xs mt-1" role="alert">
                      {errors.acceptPrivacy.message}
                    </p>
                  )}
                </div>
              </div>

              <RippleButton
                type="submit"
                aria-label="Enviar formulario de contacto"
                aria-busy={isSubmitting}
                className="w-full bg-neon-green hover:bg-neon-green/90 text-black font-bold py-4 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-neon-green/90"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2 }}
                  >
                    <span className="text-black">Enviando...</span>
                  </motion.div>
                ) : (
                  'Enviar Mensaje'
                )}
              </RippleButton>
        </motion.form>

        {submitStatus === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-red-400 text-center font-semibold bg-dark-card border border-red-500/30 py-3 px-6 rounded-lg max-w-md mx-auto"
          >
            Error al enviar el mensaje. Por favor, intentá de nuevo.
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}