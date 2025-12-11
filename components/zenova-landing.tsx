import dynamic from 'next/dynamic';
import Hero from "./sections/Hero";
import { NavBar } from "./nav-bar";
import { BackToTop } from "./ui/BackToTop";
import { ScrollProgress } from "./ui/ScrollProgress";
import { Facebook, Instagram, Github, Linkedin } from "lucide-react";

// Skeleton loading components
const ServiciosSkeleton = () => (
  <div className="relative overflow-hidden bg-dark-bg py-24 w-full">
    <div className="relative mx-auto px-4 md:px-6 max-w-7xl container">
      <div className="text-center mb-16">
        <div className="h-12 bg-dark-card rounded w-3/4 mx-auto mb-6 animate-pulse" />
        <div className="h-12 bg-dark-card rounded w-2/3 mx-auto animate-pulse" />
      </div>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
        {[1, 2].map(i => (
          <div key={i} className="bg-dark-card border border-dark-border rounded-lg p-8 animate-pulse">
            <div className="w-20 h-20 rounded-full bg-dark-bg mb-6" />
            <div className="h-8 bg-dark-bg rounded mb-4 w-3/4" />
            <div className="h-4 bg-dark-bg rounded mb-2 w-full" />
            <div className="h-4 bg-dark-bg rounded w-5/6 mb-6" />
            <div className="flex gap-2">
              <div className="h-6 w-20 bg-dark-bg rounded-full" />
              <div className="h-6 w-24 bg-dark-bg rounded-full" />
              <div className="h-6 w-28 bg-dark-bg rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PortfolioSkeleton = () => (
  <div className="py-20 px-6 bg-[#0a0a0a]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="h-12 bg-dark-card rounded w-2/3 mx-auto animate-pulse" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden animate-pulse">
            <div className="w-full h-48 bg-zinc-800" />
            <div className="p-5 space-y-3">
              <div className="h-6 bg-zinc-800 rounded w-1/2" />
              <div className="h-4 bg-zinc-800 rounded w-full" />
              <div className="flex gap-2">
                <div className="h-6 w-16 bg-zinc-800 rounded-full" />
                <div className="h-6 w-20 bg-zinc-800 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ProcessCtaSkeleton = () => (
  <div className="bg-gradient-to-b from-dark-bg to-black py-20 px-6">
    <div className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="space-y-8 animate-pulse">
          <div className="flex flex-col lg:flex-row gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex-1 bg-dark-card border border-dark-border rounded-lg p-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-dark-bg" />
                <div className="h-3 bg-dark-bg rounded mx-auto w-3/4" />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-dark-card/50 to-black/50 p-8 lg:p-12 rounded-2xl border border-dark-border animate-pulse">
          <div className="h-16 bg-dark-bg rounded mb-6" />
          <div className="h-4 bg-dark-bg rounded mb-4" />
          <div className="h-12 bg-dark-bg rounded w-1/2 mx-auto" />
        </div>
      </div>
    </div>
  </div>
);

// Lazy load secciones below-the-fold para mejor performance
const Stats = dynamic(() => import('./sections/Stats'), {
  loading: () => <div className="h-40 animate-pulse bg-dark-bg" />
});
const Servicios = dynamic(() => import('./sections/Servicios'), {
  loading: () => <ServiciosSkeleton />
});
const Portfolio = dynamic(() => import('./sections/Portfolio'), {
  loading: () => <PortfolioSkeleton />
});
const ProcessCta = dynamic(() => import('./sections/ProcessCta'), {
  loading: () => <ProcessCtaSkeleton />
});
const Testimonials = dynamic(() => import('./sections/Testimonials'), {
  loading: () => <div className="h-96 animate-pulse bg-dark-card" />
});
const Contacto = dynamic(() => import('./sections/Contacto'));

const sections = [
  { id: "servicios", title: "Servicios" },
  { id: "portfolio", title: "Portfolio" },
  { id: "proceso", title: "Proceso" },
  { id: "contacto", title: "Contacto" },
]

export function ZenovaLanding() {
  return (
    <div className="flex flex-col min-h-screen text-gray-100 bg-gradient-to-b from-black via-dark-bg to-black">
      {/* Skip to main content link para accesibilidad */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:bg-neon-green focus:text-black focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Saltar al contenido principal
      </a>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1" id="main-content">
          <Hero />
          <Stats />
          <div className="bg-gradient-to-b from-dark-bg to-dark-card">
            <Servicios />
          </div>
          <div className="bg-gradient-to-b from-dark-card to-black">
            <Portfolio />
          </div>
          <div className="bg-gradient-to-b from-black to-dark-card">
            <ProcessCta />
          </div>
          <Testimonials />
          <div className="bg-gradient-to-b from-dark-card to-dark-bg">
            <Contacto />
          </div>
        </main>
        <footer className="bg-dark-bg py-8 border-t border-dark-border w-full">
          <div className="px-4 md:px-6 container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Links de navegación */}
              <nav className="flex gap-4 sm:gap-6 order-2 md:order-1">
                {sections.map((item) => (
                  <a
                    key={item.id}
                    className="text-gray-400 text-sm hover:text-neon-green underline-offset-4 hover:underline transition-colors duration-300"
                    href={`#${item.id}`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>

              {/* Iconos de redes sociales */}
              {/* TODO: Update with actual Zenova social media URLs */}
              <div className="flex items-center gap-4 order-1 md:order-2">
                <a
                  href="https://facebook.com/zenova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-green transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/zenova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-green transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/zenova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-green transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/company/zenova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-green transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-6 text-center">
              <p className="text-gray-500 text-sm">
                © 2024 Zenova Tech. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
        <ScrollProgress />
        <BackToTop />
      </div>
    </div>
  );
}
