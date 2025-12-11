import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

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
    default: "Zenova Tech | Desarrollo de Productos Digitales y Software a Medida",
    template: "%s | Zenova Tech"
  },
  description: "Transformamos ideas en MVPs y sistemas enterprise escalables. Desarrollo web, apps móviles, IA y automatización. Talento senior 100% en tu zona horaria. Consultoría tecnológica en Argentina.",
  keywords: [
    "desarrollo software",
    "MVP",
    "producto mínimo viable",
    "apps móviles",
    "desarrollo móvil",
    "inteligencia artificial",
    "automatización empresarial",
    "SaaS",
    "desarrollo web",
    "software a medida",
    "zenova",
    "consultoría tecnológica",
    "desarrollo software Argentina",
    "chatbot IA",
    "Hermes chatbot",
    "soluciones tecnológicas",
    "sistemas enterprise",
    "aplicaciones escalables",
    "desarrollo ágil",
    "transformación digital"
  ],
  authors: [{ name: "Zenova Tech" }],
  creator: "Zenova Tech",
  publisher: "Zenova Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'technology',
  classification: 'Software Development',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://www.zenova.tech',
    siteName: 'Zenova Tech',
    title: 'Zenova Tech | Desarrollo de Productos Digitales y Software a Medida',
    description: 'Transformamos ideas en MVPs y sistemas enterprise escalables. Desarrollo web, apps móviles, IA y automatización. Talento senior 100% en tu zona horaria.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zenova Tech - Desarrollo de Software y Productos Digitales',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zenova Tech | Desarrollo de Productos Digitales',
    description: 'Transformamos ideas en MVPs y sistemas enterprise escalables. Desarrollo web, apps móviles, IA y automatización.',
    images: ['/images/og-image.jpg'],
    creator: '@zenova', // Update with actual Twitter handle when available
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.zenova.tech',
    languages: {
      'es-AR': 'https://www.zenova.tech',
      'es': 'https://www.zenova.tech',
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  verification: {
    // Add when available:
    // google: 'google-site-verification-code',
    // yandex: 'yandex-verification-code',
    // bing: 'bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <StructuredData />
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
        {children}
      </body>
    </html>
  );
}
