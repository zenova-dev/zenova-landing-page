'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from './button';
import { motion, AnimatePresence } from 'framer-motion';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="rounded-full w-12 h-12 bg-dark-card border-2 border-neon-green/50 hover:border-neon-green hover:bg-neon-green/10 transition-all duration-300 shadow-lg"
            aria-label="Volver arriba"
          >
            <ChevronUp className="w-6 h-6 text-neon-green" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
