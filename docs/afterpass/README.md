# AfterPass
> Plataforma moderna de gestión de eventos y venta de entradas

## Descripción

AfterPass es una plataforma completa de gestión de eventos y venta de entradas diseñada para revolucionar la forma en que los organizadores gestionan sus eventos y los asistentes compran sus tickets. La plataforma ofrece una experiencia fluida desde el descubrimiento del evento hasta la validación de entrada en la puerta.

Con tecnología de última generación, AfterPass permite a los organizadores crear eventos, gestionar inventarios de tickets, analizar métricas en tiempo real y validar entradas mediante códigos QR. Los asistentes disfrutan de una experiencia de compra intuitiva, tickets digitales seguros y la posibilidad de guardar sus eventos favoritos.

El sistema está diseñado para escalar, con una arquitectura moderna basada en React Server Components y una base de datos PostgreSQL con políticas de seguridad a nivel de fila (RLS), garantizando la máxima seguridad y rendimiento.

## Stack Tecnológico

### Frontend
- Framework: Next.js 15.2.4 (App Router, React 19)
- TypeScript: Modo estricto
- UI: Tailwind CSS 4, shadcn/ui, Radix UI
- Estado: TanStack Query v5 para gestión de estado del servidor
- Formularios: React Hook Form con Zod para validación
- Animaciones: Framer Motion
- Generación QR: qrcode.react

### Backend
- BaaS: Supabase
- Base de datos: PostgreSQL con Row-Level Security (RLS)
- Autenticación: Supabase Auth
- Storage: Supabase Storage para imágenes de eventos

### Infraestructura
- Deployment: Vercel
- CI/CD: Integración continua con GitHub
- Analytics: Posibilidad de integración con herramientas de analytics

## Características Principales

### Para Asistentes
- **Descubrimiento de Eventos**: Explora eventos cercanos o por categoría
- **Compra Segura**: Proceso de checkout simplificado y seguro
- **Tickets Digitales**: Código QR único para cada entrada
- **Favoritos**: Guarda eventos de interés para consulta posterior
- **Historial**: Revisa tus tickets pasados y próximos

### Para Organizadores
- **Creación de Eventos**: Interface intuitiva para configurar eventos completos
- **Gestión de Inventario**: Control total sobre tipos de tickets y disponibilidad
- **Dashboard de Analytics**: Métricas en tiempo real sobre ventas y asistencia
- **Validación de Tickets**: Sistema de escaneo QR para controlar acceso
- **Exportación de Datos**: Descarga listas de asistentes en formato CSV
- **Notificaciones**: Sistema de alertas para updates importantes

## Sector

Entretenimiento & Eventos

## Estado

**Producción Activa** - Última actualización: Noviembre 2025

El proyecto está en desarrollo activo con features nuevas agregándose regularmente. La última característica implementada fue el "marketplace completo para la plataforma de ticketing", expandiendo significativamente las capacidades de la plataforma.

## Capturas de Pantalla

*Las capturas de pantalla estarán disponibles en la carpeta `./images/`*

Capturas sugeridas:
- Dashboard de organizador con analytics
- Vista de marketplace de eventos
- Detalle de evento individual
- Proceso de checkout
- Ticket digital con QR
- Panel de validación de tickets

## Métricas y Logros

- Arquitectura moderna con Next.js 15 y React 19 (últimas versiones)
- Sistema de seguridad robusto con RLS policies en Supabase
- Performance optimizado con Server Components y TanStack Query
- UI/UX profesional con tema oscuro neón
- Sistema completo de dos flujos (asistentes + organizadores)
- Preparado para escalar a miles de eventos concurrentes

## Enlaces

- **Deployment**: Vercel (configurado en el proyecto)
- **Documentación técnica**: Ver `README.md` en repositorio
- **Setup de Supabase**: Ver `SUPABASE_SETUP.md` para configuración de base de datos

## Tecnologías Destacadas

- **Supabase RLS**: Implementación de políticas de seguridad a nivel de fila para protección de datos
- **QR Code Generation**: Sistema de generación y validación de códigos QR únicos
- **Real-time Analytics**: Dashboard con métricas actualizadas en tiempo real
- **Responsive Design**: Experiencia optimizada para móviles y desktop
- **Type Safety**: TypeScript estricto en todo el proyecto para mayor confiabilidad
