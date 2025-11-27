import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: 'swap',
  preload: true,
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.zenova.tech'),
  title: {
    default: "Zenova - Innovación Digital a tu Alcance",
    template: "%s | Zenova"
  },
  description: "Zenova transforma tus ideas en soluciones tecnológicas potentes. Desde aplicaciones web hasta sistemas complejos, impulsamos tu negocio hacia el futuro.",
  keywords: ["desarrollo web", "aplicaciones móviles", "inteligencia artificial", "consultoría tecnológica", "desarrollo software Argentina", "chatbot IA", "Hermes chatbot", "soluciones tecnológicas"],
  authors: [{ name: "Zenova Tech" }],
  creator: "Zenova Tech",
  publisher: "Zenova Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://www.zenova.tech',
    siteName: 'Zenova',
    title: 'Zenova - Innovación Digital a tu Alcance',
    description: 'Zenova transforma tus ideas en soluciones tecnológicas potentes. Desde aplicaciones web hasta sistemas complejos, impulsamos tu negocio hacia el futuro.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zenova Tech - Innovación Digital'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zenova - Innovación Digital a tu Alcance',
    description: 'Zenova transforma tus ideas en soluciones tecnológicas potentes.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zenova Tech',
    description: 'Consultoría tecnológica y desarrollo de software',
    url: 'https://www.zenova.tech',
    logo: 'https://www.zenova.tech/favicon.ico',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'stoviatandil@gmail.com',
      availableLanguage: ['Spanish', 'es']
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AR'
    },
    sameAs: [
      // Agregar URLs de redes sociales cuando estén disponibles
    ]
  };

  return (
    <html lang="es">
      <head>
        {/* Google Analytics 4 - Descomentar cuando tengas el Measurement ID */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
