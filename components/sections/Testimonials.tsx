'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const handleDotClick = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [handleNext]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-dark-card to-dark-bg py-20 md:py-24 w-full">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto px-4 md:px-6 max-w-5xl container"
      >
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-4">
            <span className="text-white">LO QUE DICEN</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-emerald-400">
              NUESTROS CLIENTES
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="w-full"
              >
                <div className="bg-dark-card border border-dark-border rounded-2xl p-8 md:p-12 relative">
                  {/* Quote icon */}
                  <Quote className="absolute top-6 left-6 w-12 h-12 text-neon-green/20" />

                  {/* Quote text */}
                  <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 relative z-10">
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </p>

                  {/* Author info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-green/20 to-neon-green/5 flex items-center justify-center border border-neon-green/30">
                      <span className="text-neon-green font-bold text-lg">
                        {testimonials[currentIndex].author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">
                        {testimonials[currentIndex].author}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {testimonials[currentIndex].role} · {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              onClick={handlePrev}
              variant="outline"
              size="icon"
              className="rounded-full bg-dark-card border-dark-border hover:border-neon-green/50 transition-colors"
              aria-label="Anterior testimonio"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "bg-neon-green w-8"
                      : "bg-gray-600 hover:bg-gray-500"
                  )}
                  aria-label={`Ir a testimonio ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="rounded-full bg-dark-card border-dark-border hover:border-neon-green/50 transition-colors"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
