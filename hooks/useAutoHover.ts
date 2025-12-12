"use client";

import { useRef, useState, useEffect } from "react";
import { useBreakpoint } from "./useBreakpoint";
import { useReducedMotion } from "./useReducedMotion";

interface UseAutoHoverOptions {
  /** Si el hover automático está habilitado (default: true) */
  enabled?: boolean;
  /** Threshold del IntersectionObserver (default: 0.5) */
  threshold?: number;
  /** Duración del hover en ms (default: 1500) */
  duration?: number;
  /** Delay antes de activar el hover en ms (default: 200) */
  delay?: number;
}

interface UseAutoHoverReturn {
  /** Ref para asignar al elemento */
  ref: React.RefObject<HTMLElement | null>;
  /** Si el elemento está actualmente en "hover" automático */
  isAutoHovered: boolean;
}

export function useAutoHover(
  options: UseAutoHoverOptions = {}
): UseAutoHoverReturn {
  const {
    enabled = true,
    threshold = 0.5,
    duration = 1500,
    delay = 200,
  } = options;

  const ref = useRef<HTMLElement | null>(null);
  const [isAutoHovered, setIsAutoHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const durationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hasTriggered = useRef(false);

  const breakpoint = useBreakpoint();
  const reducedMotion = useReducedMotion();

  // Solo activo en mobile
  const isMobile = breakpoint === "mobile";
  const isActive = enabled && isMobile && !reducedMotion;

  useEffect(() => {
    if (!isActive || !ref.current) return;

    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          // Solo activar si estamos scrolleando (no en carga inicial)
          if (window.scrollY > 100) {
            hasTriggered.current = true;

            // Delay antes de activar hover
            timeoutRef.current = setTimeout(() => {
              setIsAutoHovered(true);

              // Desactivar después de la duración
              durationTimeoutRef.current = setTimeout(() => {
                setIsAutoHovered(false);
              }, duration);
            }, delay);
          }
        }
      },
      {
        threshold,
        rootMargin: "-5% 0px -5% 0px",
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (durationTimeoutRef.current) clearTimeout(durationTimeoutRef.current);
    };
  }, [isActive, threshold, duration, delay]);

  return { ref, isAutoHovered };
}
