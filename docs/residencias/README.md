# Residencias UNICEN
> Sistema integral de gestión para residencias universitarias

## Descripción

Residencias UNICEN es una plataforma completa desarrollada para la gestión administrativa de las residencias universitarias de la Universidad Nacional del Centro de la Provincia de Buenos Aires (UNICEN). El sistema centraliza y digitaliza todos los procesos relacionados con la vida en las residencias, mejorando significativamente la experiencia tanto de residentes como del personal administrativo.

La plataforma abarca desde la gestión básica de residentes hasta módulos especializados como el sistema de turnos para lavandería, alquiler de bicicletas, registro de fallas en las instalaciones y un sistema de newsletters para mantener informada a la comunidad. Todo esto con una interfaz moderna, responsive y diseñada pensando en dispositivos móviles.

El proyecto representa un caso exitoso de transformación digital en el sector educativo público, demostrando cómo la tecnología puede mejorar la eficiencia operativa y la calidad de servicio en instituciones universitarias.

## Stack Tecnológico

### Frontend
- Framework: Next.js 14 (App Router con Turbopack)
- TypeScript: Configuración estricta
- UI: Tailwind CSS con tema personalizado, shadcn/ui
- Estado del Cliente: Zustand con persistencia (zustand/middleware)
- Estado del Servidor: TanStack Query v5
- Tablas: TanStack Tables con filtrado server-side y virtualización
- Formularios: React Hook Form con validación Zod
- Autenticación: Auth.js (NextAuth v5) con estrategia JWT

### Backend

#### Backend Principal (Spring Boot)
- Framework: Spring Boot
- Lenguaje: Java 8
- Base de datos: H2 (desarrollo)
- Seguridad: JWT authentication

#### Backend Secundario (Node.js)
- Framework: NestJS
- ORM: TypeORM
- Base de datos: PostgreSQL
- Autenticación: JWT

### Infraestructura
- Deployment: Servidor remoto (residencias.bienestar.unicen.edu.ar)
- Process Manager: PM2 + nohup
- Script automatizado: `deploy.sh` para deployment
- Arquitectura: Full-stack con dos backends complementarios

## Características Principales

### Gestión de Residentes
- **Registro y Perfiles**: Sistema completo de datos de residentes
- **Check-in/Check-out**: Control de entradas y salidas
- **Historial**: Tracking completo de la estadía de cada residente

### Sistema de Lavandería
- **Turnos**: Gestión de cola para uso de lavadoras
- **Notificaciones**: Alertas cuando es tu turno
- **Historial**: Registro de uso para optimizar disponibilidad

### Alquiler de Bicicletas
- **Inventario**: Control de bicicletas disponibles
- **Reservas**: Sistema de préstamo y devolución
- **Tracking**: Seguimiento del estado de cada bicicleta

### Gestión Administrativa
- **Boletín Informativo**: Sistema de newsletters para comunicación
- **Registro de Fallas**: Reporte y seguimiento de problemas en instalaciones
- **Gestión de Visitantes**: Control de acceso de visitantes
- **Gestión de Reuniones**: Calendario y organización de eventos
- **Estadísticas**: Dashboard con métricas clave de ocupación y uso

### Experiencia Móvil
- **Mobile-First Design**: Diseñado primero para dispositivos móviles
- **Card View**: Las tablas se transforman en tarjetas en móviles
- **Drawer Filters**: Filtros en cajón lateral para pantallas pequeñas
- **Responsive**: Adaptación fluida a todos los tamaños de pantalla

## Sector

Educación / Sector Público

## Estado

**Producción Activa** - Última actualización: Noviembre 2025

El sistema está en producción activa sirviendo a las residencias de UNICEN. La última feature implementada fue el sistema de alquiler de bicicletas, documentado en `BIKE-RENTAL-IMPLEMENTATION-SUMMARY.md`.

## Capturas de Pantalla

*Las capturas de pantalla estarán disponibles en la carpeta `./images/`*

Capturas sugeridas:
- Dashboard principal de administración
- Vista móvil del sistema de lavandería
- Tabla de residentes (desktop y mobile)
- Sistema de alquiler de bicicletas
- Formulario de registro de fallas
- Panel de estadísticas

## Métricas y Logros

- Sistema en producción sirviendo a residencias universitarias reales
- Arquitectura full-stack completa con múltiples tecnologías
- Mobile-first con experiencia optimizada en dispositivos móviles
- Integración de múltiples backends (Spring Boot + NestJS)
- Sistema de autenticación robusto con Auth.js v5
- Tablas con virtualización para performance óptimo
- Documentación técnica completa (`CLAUDE.md`, `SETUP.md`)

## Enlaces

- **Producción**: https://residencias.bienestar.unicen.edu.ar
- **Cliente**: Universidad Nacional del Centro (UNICEN)
- **Documentación**: Ver archivos `CLAUDE.md` y `SETUP.md` en repositorio

## Tecnologías Destacadas

- **TanStack Tables**: Implementación avanzada con virtualización y filtrado server-side
- **Auth.js v5**: Sistema de autenticación moderna con JWT
- **Zustand + Persist**: Gestión de estado con persistencia en localStorage
- **Mobile-First Patterns**: Componentes que se adaptan inteligentemente a mobile/desktop
- **Multi-Backend Architecture**: Integración de Spring Boot y NestJS
- **Role-Based Access**: Control de acceso basado en roles de usuario

## Documentación Técnica

El proyecto incluye documentación detallada:
- `CLAUDE.md`: Guía completa de arquitectura y patrones
- `SETUP.md`: Instrucciones de configuración y deployment
- `BIKE-RENTAL-IMPLEMENTATION-SUMMARY.md`: Caso de estudio de implementación de nueva feature
