export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zenova Tech',
    alternateName: 'Zenova',
    url: 'https://www.zenova.tech',
    logo: 'https://www.zenova.tech/favicon.ico',
    description: 'Desarrollo de productos digitales, MVPs y sistemas enterprise. Transformamos ideas en soluciones tecnológicas potentes.',
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AR',
      addressLocality: 'Argentina',
    },
    sameAs: [
      // Add social media URLs when available
      // 'https://www.facebook.com/zenova',
      // 'https://www.instagram.com/zenova',
      // 'https://www.linkedin.com/company/zenova',
      // 'https://github.com/zenova',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Sales',
        email: 'stoviatandil@gmail.com',
        availableLanguage: ['Spanish', 'es'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        email: 'stoviatandil@gmail.com',
        availableLanguage: ['Spanish', 'es'],
      }
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Software Development',
    name: 'Desarrollo de Software y Productos Digitales',
    description: 'Servicios de desarrollo de software a medida, MVPs, aplicaciones móviles, integración de IA y automatización empresarial',
    provider: {
      '@type': 'Organization',
      name: 'Zenova Tech',
      url: 'https://www.zenova.tech',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Argentina',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Desarrollo Tecnológico',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Desarrollo de MVPs',
            description: 'Transformamos tu idea en un MVP (Producto Mínimo Viable) funcional para validar tu concepto en el mercado',
            serviceType: 'MVP Development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Desarrollo de Aplicaciones Móviles',
            description: 'Creación de apps móviles nativas y cross-platform para iOS y Android',
            serviceType: 'Mobile App Development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Desarrollo Web',
            description: 'Desarrollo de aplicaciones web modernas, escalables y de alto rendimiento',
            serviceType: 'Web Development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Integración de Inteligencia Artificial',
            description: 'Implementación de soluciones de IA, chatbots inteligentes y automatización con machine learning',
            serviceType: 'AI Integration',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Automatización Empresarial',
            description: 'Automatización de procesos empresariales para aumentar eficiencia y reducir costos',
            serviceType: 'Business Automation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sistemas Enterprise Escalables',
            description: 'Desarrollo de sistemas enterprise robustos y escalables para grandes organizaciones',
            serviceType: 'Enterprise Software Development',
          },
        },
      ],
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Zenova Tech',
    url: 'https://www.zenova.tech',
    description: 'Desarrollo de productos digitales, MVPs y sistemas enterprise',
    inLanguage: 'es-AR',
    publisher: {
      '@type': 'Organization',
      name: 'Zenova Tech',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Zenova Tech',
    image: 'https://www.zenova.tech/favicon.ico',
    '@id': 'https://www.zenova.tech',
    url: 'https://www.zenova.tech',
    telephone: '', // Add if available
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Add coordinates if available
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '09:00',
      closes: '18:00'
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://www.zenova.tech'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
