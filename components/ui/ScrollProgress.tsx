'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0;
      setProgress(progress);
    };

    updateProgress(); // Initial calculation
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-dark-border z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-neon-green to-emerald-400"
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}
