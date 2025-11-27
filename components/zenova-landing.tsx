import dynamic from 'next/dynamic';
import Hero from "./sections/Hero";
import { NavBar } from "./nav-bar";

// Lazy load secciones below-the-fold para mejor performance
const Servicios = dynamic(() => import('./sections/Servicios'), {
  loading: () => <div className="h-screen animate-pulse bg-gray-900" />
});
const PorQueNosotros = dynamic(() => import('./sections/PorQueNosotros'));
const Hermes = dynamic(() => import('./sections/Hermes'));
const Contacto = dynamic(() => import('./sections/Contacto'));

const sections = [
  { id: "servicios", title: "Servicios" },
  { id: "por-que-nosotros", title: "¿Por qué elegirnos?" },
  { id: "hermes", title: "Hermes" },
  { id: "contacto", title: "Contacto" },
]

export function ZenovaLanding() {
  return (
    <div className="flex flex-col min-h-screen text-gray-100 bg-gradient-to-b from-purple-900 via-gray-900 to-gray-950">
      {/* Skip to main content link para accesibilidad */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:bg-purple-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Saltar al contenido principal
      </a>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1" id="main-content">
          <Hero />
          <div className="bg-gradient-to-b from-gray-950 to-gray-900">
            <Servicios />
          </div>
          <div className="bg-gradient-to-b from-gray-900 to-gray-800">
            <PorQueNosotros />
          </div>
          <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950">
            <Hermes />
          </div>
          <div className="bg-gradient-to-b from-gray-950 to-purple-900">
            <Contacto />
          </div>
        </main>
        <footer className="bg-purple-900 py-6 border-t border-purple-800 w-full">
          <div className="px-4 md:px-6 container mx-auto">
            <div className="flex md:flex-row flex-col justify-between items-center gap-4">
              <p className="text-center text-purple-200 text-sm">
                © 2024 Zenova Tech. Todos los derechos reservados.
              </p>
              <nav className="flex gap-4 sm:gap-6">
                {sections.map((item) => (
                  <a
                    key={item.id}
                    className="text-purple-200 text-sm hover:text-white underline-offset-4 hover:underline transition-colors duration-300"
                    href={`#${item.id}`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
