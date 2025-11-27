# Agendo
> Sistema SAAS de gestión para consultorios médicos y ortodóncicos

## Descripción

Agendo es una plataforma completa diseñada específicamente para la gestión de consultorios médicos, con especialización en ortodoncia. El sistema permite a los profesionales de la salud llevar un control exhaustivo de sus pacientes, tratamientos, citas y finanzas desde una interfaz moderna e intuitiva.

La aplicación ofrece una visión 360° de cada paciente, incluyendo historial clínico completo, planes de tratamiento personalizados, seguimiento de evolución, control de pagos y planes de financiamiento. Todo esto complementado con un dashboard de métricas que permite a los profesionales tener visibilidad clara del estado de su consultorio.

Desarrollado con las últimas tecnologías (Next.js 16 y React 19), Agendo representa un ejemplo de aplicación SAAS moderna, preparada para escalar y con una arquitectura que facilita la migración futura de localStorage a un backend completo.

## Stack Tecnológico

### Frontend
- Framework: Next.js 16.0.0 (App Router, experimental PPR)
- React: 19.2.0 (última versión)
- TypeScript: 5.x con configuración estricta
- UI: Tailwind CSS 4.1.9, shadcn/ui, Radix UI
- Visualización: Recharts para gráficos y dashboards
- Formularios: React Hook Form con validación Zod
- Animaciones: Framer Motion
- Temas: Sistema de modo claro/oscuro

### Estado y Persistencia
- Almacenamiento: localStorage (con capa de abstracción para futura migración)
- Patrón: Storage service centralizado (`lib/storage-service.ts`)
- Logging: Sistema de logging centralizado
- Error Handling: Error boundaries implementados

### Infraestructura
- Deployment: Vercel
- Workspace: https://vercel.com/juandurefaccinis-projects
- Desarrollo: Integración con v0.app para UI generativa
- Linting: ESLint + Prettier configurados
- TypeScript: Modo estricto para máxima confiabilidad

## Características Principales

### Gestión de Pacientes
- **Perfiles Completos**: Datos personales, contacto y médicos
- **Historial Clínico**: Registro detallado de consultas y tratamientos
- **Documentos**: Adjuntos y archivos relacionados con cada paciente
- **Búsqueda Avanzada**: Filtros y búsqueda rápida de pacientes

### Planes de Tratamiento
- **Personalización**: Tratamientos adaptados a cada paciente
- **Fases**: División del tratamiento en etapas con objetivos
- **Seguimiento**: Progreso visual del tratamiento
- **Notas Clínicas**: Observaciones detalladas por sesión

### Sistema de Citas
- **Calendario**: Vista mensual y semanal de citas
- **Recordatorios**: Notificaciones automáticas para pacientes
- **Estados**: Control de citas confirmadas, pendientes, canceladas
- **Conflictos**: Detección automática de solapamientos

### Control de Pagos
- **Facturación**: Registro de servicios y cobros
- **Planes de Financiamiento**: Cuotas y seguimiento de pagos
- **Estado de Cuenta**: Vista clara de pagos pendientes
- **Reportes**: Ingresos por período y método de pago

### Dashboard y Analíticas
- **Métricas en Tiempo Real**: KPIs del consultorio
- **Gráficos Visuales**: Recharts para representación de datos
- **Tendencias**: Análisis de pacientes activos, ingresos, citas
- **Exportación**: Posibilidad de exportar reportes

### Sistema de Notificaciones
- **Alertas**: Notificaciones de citas próximas
- **Recordatorios**: Pagos pendientes y seguimientos
- **Estados**: Centro de notificaciones integrado

## Sector

Healthcare / SAAS

## Estado

**Completo y Maduro** - Última actualización: Noviembre 2025

La aplicación está completamente funcional con todas las características implementadas. Incluye credenciales demo para testing (`demo@ortodoncista.com` / `demo123`).

## Capturas de Pantalla

*Las capturas de pantalla estarán disponibles en la carpeta `./images/`*

Capturas sugeridas:
- Dashboard principal con métricas
- Lista de pacientes
- Detalle de paciente con historial
- Calendario de citas
- Plan de tratamiento
- Dashboard de pagos y finanzas
- Vista móvil responsive

## Métricas y Logros

- Uso de Next.js 16 y React 19 (tecnologías de última generación)
- TypeScript estricto en todo el proyecto
- Sistema de logging centralizado para debugging
- Error boundaries para manejo robusto de errores
- Arquitectura preparada para migración a backend
- Documentación técnica completa con guías de migración
- UI/UX profesional con modo claro/oscuro
- Performance optimizado con React 19

## Enlaces

- **Deployment**: Vercel
- **Workspace**: https://vercel.com/juandurefaccinis-projects/v0-orthodontist-app
- **Desarrollo**: Integración con v0.app
- **Credenciales Demo**:
  - Email: demo@ortodoncista.com
  - Password: demo123

## Tecnologías Destacadas

- **Recharts**: Dashboards profesionales con gráficos interactivos
- **Storage Service Pattern**: Capa de abstracción para fácil migración a backend
- **Error Boundaries**: Manejo robusto de errores en producción
- **Centralized Logging**: Sistema de logs para debugging y monitoreo
- **Type Safety**: TypeScript estricto garantizando confiabilidad
- **Theme System**: Soporte completo para modo claro/oscuro
- **Responsive Design**: Experiencia optimizada en todos los dispositivos

## Arquitectura

### Patrón de Almacenamiento
```typescript
// Abstracción lista para migrar de localStorage a API
const storageService = {
  getPatients: () => JSON.parse(localStorage.getItem('patients')),
  savePatient: (patient) => localStorage.setItem('patients', JSON.stringify(patient))
  // Fácil de reemplazar por:
  // getPatients: () => fetch('/api/patients'),
  // savePatient: (patient) => fetch('/api/patients', { method: 'POST', body: patient })
}
```

### Sistema de Logging
```typescript
// Logging centralizado para debugging
logger.info('Patient created', { patientId, timestamp });
logger.error('Failed to save', { error, context });
```

## Documentación Técnica

El proyecto incluye documentación completa:
- `README.md`: Guía principal del proyecto
- Migration guides: Documentación para migrar a backend
- Architecture docs: Decisiones de diseño y patrones utilizados
