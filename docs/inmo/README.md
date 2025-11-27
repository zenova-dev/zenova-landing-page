# Inmo (LovableEstamos)
> Plataforma integral de gestión inmobiliaria

## Descripción

Inmo, también conocido como "LovableEstamos", es una plataforma completa de gestión para el sector inmobiliario que digitaliza y optimiza todos los procesos relacionados con la compra, venta y alquiler de propiedades. El sistema ofrece una experiencia moderna tanto para agentes inmobiliarios como para clientes, integrando funcionalidades de gestión, pagos, comunicación y análisis.

La plataforma destaca por su integración de múltiples procesadores de pago (Stripe y MercadoPago), permitiendo transacciones seguras en diferentes mercados. Además, cuenta con un sistema robusto de notificaciones por email, generación de documentos PDF y una arquitectura preparada para escalar con las necesidades del negocio.

Desarrollado con Next.js 14 y desplegado mediante v0.dev, Inmo representa una solución moderna para inmobiliarias que buscan transformación digital, ofreciendo herramientas profesionales para gestionar propiedades, clientes, transacciones y documentación de manera eficiente.

## Stack Tecnológico

### Frontend
- Framework: Next.js 14.2.31 (App Router)
- React: 18
- TypeScript: Configuración estricta
- UI: Tailwind CSS 4, shadcn/ui, Radix UI
- Formularios: React Hook Form con validación Zod
- Temas: Sistema de modo claro/oscuro
- PDF Generation: jsPDF

### Backend/BaaS
- Database: Supabase (PostgreSQL)
- SSR: Supabase SSR adapter
- Autenticación: Supabase Auth
- Real-time: Supabase subscriptions

### Integraciones de Pago
- Stripe: Procesamiento de pagos internacional
- MercadoPago: Procesamiento de pagos LATAM
- Webhooks: Manejo de eventos de pago

### Comunicaciones
- Email: Resend para notificaciones
- Templates: Sistema de templates de email

### Infraestructura
- Deployment: v0.dev con deployments automáticos
- Estado: TanStack Query v5 para cache
- Sincronización: Auto-sync con v0.dev

## Características Principales

### Gestión de Propiedades

#### Listados Completos
- **Publicación**: Creación de anuncios con fotos y descripciones
- **Categorización**: Venta, alquiler, temporal
- **Filtros Avanzados**: Búsqueda por ubicación, precio, características
- **Estados**: En venta, vendido, alquilado, disponible

#### Detalles de Propiedad
- Galería de fotos profesional
- Descripción detallada
- Características (habitaciones, baños, m², amenities)
- Ubicación con mapas
- Historial de precios
- Documentación adjunta

### Sistema de Pagos Dual

#### Stripe Integration
- Pagos con tarjeta internacional
- Suscripciones recurrentes
- Pagos en cuotas
- Dashboard de transacciones
- Webhooks para confirmación

#### MercadoPago Integration
- Pagos locales LATAM
- Múltiples métodos (tarjeta, efectivo, transferencia)
- Cuotas sin interés
- QR para pagos presenciales
- Link de pago compartible

### Gestión de Clientes

#### CRM Integrado
- Perfil completo de clientes
- Historial de interacciones
- Propiedades de interés
- Seguimiento de negociaciones
- Recordatorios y tareas

#### Comunicación
- Notificaciones por email automáticas
- Templates personalizables
- Confirmaciones de pago
- Actualizaciones de propiedades
- Newsletter para clientes

### Documentación y Contratos

#### Generación de PDFs
- Contratos de compra/venta
- Contratos de alquiler
- Recibos de pago
- Informes de propiedad
- Documentación legal

#### Firma Digital
- Proceso de firma electrónica (preparado para integración)
- Almacenamiento seguro de documentos
- Historial de versiones

### Analytics y Reportes

#### Dashboard de Métricas
- Propiedades activas
- Transacciones del mes
- Ingresos totales
- Conversión de leads
- Propiedades más vistas

#### Reportes Exportables
- Ventas por período
- Comisiones por agente
- Performance de propiedades
- Análisis de precios de mercado

## Sector

Bienes Raíces / PropTech

## Estado

**Producción Activa** - Última actualización: Octubre 2025

El sistema está en producción activa con sincronización automática mediante v0.dev deployments. Última característica agregada relacionada con optimización de la plataforma.

## Capturas de Pantalla

*Las capturas de pantalla estarán disponibles en la carpeta `./images/`*

Capturas sugeridas:
- Dashboard principal de inmobiliaria
- Listado de propiedades
- Detalle de propiedad individual
- Proceso de checkout con Stripe/MercadoPago
- CRM de clientes
- Generación de PDF de contrato
- Analytics y reportes
- Vista móvil responsive

## Métricas y Logros

- Integración dual de pagos (Stripe + MercadoPago)
- Generación automática de PDFs con jsPDF
- Sistema de notificaciones por email con Resend
- Supabase SSR para mejor SEO y performance
- TanStack Query v5 para gestión de estado optimizada
- Deployment automático con v0.dev
- Arquitectura preparada para multi-tenancy
- Tema claro/oscuro implementado

## Enlaces

- **Deployment**: v0.dev automatic deployments
- **Stripe**: Dashboard de pagos integrado
- **MercadoPago**: Panel de transacciones
- **Documentación**: Ver README.md en repositorio

## Tecnologías Destacadas

### Dual Payment Processing
```typescript
// Soporte para múltiples procesadores de pago
const paymentProviders = {
  stripe: {
    publishableKey: process.env.STRIPE_PUBLIC_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET
  },
  mercadopago: {
    publicKey: process.env.MP_PUBLIC_KEY,
    accessToken: process.env.MP_ACCESS_TOKEN
  }
}
```

### PDF Generation
```typescript
// Generación de contratos y documentos
import jsPDF from 'jspdf';

const generateContract = (propertyData, clientData) => {
  const doc = new jsPDF();
  // Genera contrato profesional
  doc.save('contrato.pdf');
}
```

### Email Automation
```typescript
// Sistema de notificaciones con Resend
const emailTemplates = {
  paymentConfirmation: (transaction) => ({
    to: transaction.client.email,
    subject: 'Pago confirmado',
    template: 'payment-confirmation'
  }),
  newProperty: (property) => ({
    to: interestedClients,
    subject: 'Nueva propiedad disponible',
    template: 'new-property'
  })
}
```

### Supabase SSR
```typescript
// Server-side rendering con Supabase
import { createServerClient } from '@supabase/ssr';

// Mejor SEO y seguridad
const supabase = createServerClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY,
  { cookies }
);
```

## Casos de Uso

### Inmobiliarias
- Gestión completa de portfolio de propiedades
- CRM para seguimiento de clientes
- Procesamiento de pagos y comisiones
- Generación automática de contratos

### Desarrolladores
- Venta de proyectos inmobiliarios
- Gestión de reservas
- Planes de pago personalizados
- Marketing de propiedades

### Agentes Independientes
- Portfolio profesional online
- Sistema de cobros integrado
- Gestión de clientes
- Reportes de actividad

## Integraciones Futuras

- Integración con portales inmobiliarios (MercadoLibre, ZonaProp)
- Sistema de visitas virtuales 360°
- Chatbot para consultas automatizadas
- Integración con sistemas de gestión de llaves (smart locks)
- API para integraciones con terceros

## Ventajas Competitivas

- **Pagos Flexibles**: Stripe para internacional, MercadoPago para LATAM
- **Todo en Uno**: CRM, pagos, documentos, analytics en una plataforma
- **Escalable**: Arquitectura preparada para crecer
- **Modern Stack**: Tecnologías de última generación
- **Deployment Automático**: v0.dev para actualizaciones continuas
- **Performance**: SSR y caching optimizado

## Configuración de Pagos

### Variables de Entorno Requeridas
```env
# Stripe
STRIPE_PUBLIC_KEY=pk_...
STRIPE_SECRET_KEY=sk_...
STRIPE_WEBHOOK_SECRET=whsec_...

# MercadoPago
MP_PUBLIC_KEY=APP_USR-...
MP_ACCESS_TOKEN=APP_USR-...

# Supabase
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...

# Resend
RESEND_API_KEY=re_...
```
