"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú con tecla ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Intersection Observer para detectar sección activa
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-100px 0px -50% 0px'
      }
    );

    const sections = ['servicios', 'portfolio', 'proceso', 'contacto'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { href: "#servicios", label: "Servicios", id: "servicios" },
    { href: "#portfolio", label: "Portfolio", id: "portfolio" },
    { href: "#proceso", label: "Proceso", id: "proceso" },
    { href: "#contacto", label: "Contacto", id: "contacto" },
  ];

  return (
    <header
      ref={menuRef}
      role="banner"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-dark-bg/95 backdrop-blur supports-[backdrop-filter]:bg-dark-bg/60 shadow-lg" : "bg-transparent"
      )}
    >
      <div className="flex justify-between items-center mx-auto px-4 md:px-8 h-20 container">
        <a
          className="flex items-center space-x-2"
          href="#home"
          aria-label="Zenova - Volver al inicio"
        >
          <span className="font-bold text-2xl text-white">Zenova</span>
        </a>
        <nav
          className="hidden md:flex items-center space-x-8 font-medium text-lg"
          role="navigation"
          aria-label="Navegación principal"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              className={cn(
                "transition-colors relative",
                activeSection === item.id
                  ? "text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-neon-green"
                  : "text-gray-300 hover:text-white"
              )}
              href={item.href}
              aria-label={item.label}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button
          asChild
          className="hidden md:block bg-neon-green text-black hover:bg-neon-green/90 font-medium"
        >
          <a href="#contacto">Iniciar Proyecto</a>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden text-white border-white hover:bg-white hover:text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>
      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-dark-bg p-4"
          role="navigation"
          aria-label="Menú de navegación móvil"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              className="block py-2 text-lg text-gray-300 hover:text-white transition-colors"
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              aria-label={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
