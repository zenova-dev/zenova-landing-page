"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useBreakpoint } from "./useBreakpoint";
import { useReducedMotion } from "./useReducedMotion";

// Cooldown global para evitar focus excesivo
let lastFocusTime = 0;
const FOCUS_COOLDOWN_MS = 2000;

interface UseFocusOnScrollOptions {
  /** Si el focus está habilitado (default: true) */
  enabled?: boolean;
  /** Threshold del IntersectionObserver (default: 0.5) */
  threshold?: number;
  /** Delay en ms antes de aplicar focus (default: 300) */
  delay?: number;
  /** Solo ejecutar una vez (default: true) */
  once?: boolean;
  /** Selector del elemento focusable dentro del contenedor */
  focusableSelector?: string;
  /** Callback cuando el elemento recibe focus */
  onFocus?: () => void;
}

interface UseFocusOnScrollReturn {
  /** Ref para asignar al elemento contenedor */
  ref: React.RefObject<HTMLElement | null>;
  /** Si el elemento está actualmente en viewport */
  isInView: boolean;
  /** Si el focus ya fue aplicado */
  hasFocused: boolean;
}

export function useFocusOnScroll(
  options: UseFocusOnScrollOptions = {}
): UseFocusOnScrollReturn {
  const {
    enabled = true,
    threshold = 0.5,
    delay = 300,
    once = true,
    focusableSelector,
    onFocus,
  } = options;

  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasFocused, setHasFocused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const breakpoint = useBreakpoint();
  const reducedMotion = useReducedMotion();

  // Solo activo en mobile
  const isMobile = breakpoint === "mobile";

  // Determinar si el feature está activo
  const isActive = enabled && isMobile && !reducedMotion;

  const canFocus = useCallback(() => {
    return Date.now() - lastFocusTime > FOCUS_COOLDOWN_MS;
  }, []);

  const applyFocus = useCallback(() => {
    if (!ref.current || hasFocused) return;

    // Verificar cooldown global
    if (!canFocus()) {
      return;
    }

    // Verificar que el usuario no está interactuando
    if (
      document.activeElement !== document.body &&
      document.activeElement !== null &&
      document.activeElement.tagName !== "HTML"
    ) {
      return;
    }

    // Buscar elemento focusable
    let targetElement: HTMLElement | null = null;

    if (focusableSelector) {
      targetElement = ref.current.querySelector(focusableSelector);
    } else {
      // Buscar primer elemento focusable automáticamente
      const focusableElements = ref.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), ' +
        'a[href], ' +
        'input:not([disabled]):not([type="hidden"]), ' +
        'select:not([disabled]), ' +
        'textarea:not([disabled]), ' +
        '[tabindex]:not([tabindex="-1"])'
      );
      targetElement = focusableElements[0] || null;
    }

    if (targetElement) {
      // Usar preventScroll para evitar saltos de scroll
      targetElement.focus({ preventScroll: true });
      lastFocusTime = Date.now();

      if (once) {
        setHasFocused(true);
      }

      onFocus?.();
    }
  }, [hasFocused, focusableSelector, once, onFocus, canFocus]);

  useEffect(() => {
    if (!isActive || !ref.current) return;

    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isCurrentlyInView = entry.isIntersecting;
        setIsInView(isCurrentlyInView);

        if (isCurrentlyInView && !hasFocused) {
          // Verificar que el usuario está haciendo scroll (no es carga inicial)
          if (window.scrollY > 100) {
            // Delay para evitar focus durante animaciones
            timeoutRef.current = setTimeout(applyFocus, delay);
          }
        }
      },
      {
        threshold,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isActive, threshold, delay, hasFocused, applyFocus]);

  return { ref, isInView, hasFocused };
}
