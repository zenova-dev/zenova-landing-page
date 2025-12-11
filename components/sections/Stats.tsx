'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Stat {
  number: number;
  label: string;
  suffix: string;
}

const stats: Stat[] = [
  { number: 15, label: "Proyectos Entregados", suffix: "+" },
  { number: 98, label: "Satisfacción del Cliente", suffix: "%" },
  { number: 70, label: "Reducción en Costos", suffix: "%" },
  { number: 5, label: "Países Atendidos", suffix: "" }
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-extrabold text-neon-green">
      {count}{suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-dark-bg py-16 md:py-20 w-full">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      <div className="relative mx-auto px-4 md:px-6 max-w-7xl container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 12
                  }
                }
              }}
              className="text-center"
            >
              <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              <p className="mt-2 text-gray-400 text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
