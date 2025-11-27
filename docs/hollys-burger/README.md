# Holly's Burger (Sistema Thoros)
> Solución integral para restaurantes con inteligencia artificial

## Descripción

Holly's Burger es un ecosistema completo de gestión para restaurantes que integra múltiples puntos de venta, sistemas de gestión y un innovador agente conversacional de inteligencia artificial. El sistema está diseñado para optimizar todas las operaciones de un restaurante, desde la toma de pedidos hasta la preparación en cocina, pasando por la gestión administrativa y análisis de métricas.

Lo que distingue a Holly's Burger es su agente de IA conversacional llamado "Holly", desarrollado con LangGraph y OpenAI, que puede interactuar con clientes a través de múltiples canales (web, WhatsApp, kiosk), tomar pedidos completos, hacer recomendaciones personalizadas y hasta manejar situaciones complejas con intervención humana cuando es necesario.

El proyecto representa un caso de estudio en la aplicación de tecnologías de IA generativa en el sector gastronómico, demostrando cómo la automatización inteligente puede mejorar tanto la experiencia del cliente como la eficiencia operativa del negocio.

## Stack Tecnológico

### Web Frontend
- Framework: Next.js 15
- React: 19
- TypeScript: Configuración estricta
- UI: Tailwind CSS 4, shadcn/ui
- Estado: TanStack Query para cache y sincronización
- Formularios: React Hook Form + Zod
- Pagos: MercadoPago SDK

### Backend/BaaS
- Base de datos: Supabase (PostgreSQL)
- Autenticación: Supabase Auth
- Storage: Supabase Storage
- Real-time: Supabase subscriptions

### Agente de IA
- Framework: LangGraph (state machine con 9 nodos)
- LLM: OpenAI GPT-4o-mini
- API: FastAPI (Python)
- Memoria: Sistema de entidades persistentes
- HITL: Human-in-the-Loop para casos complejos

### Infraestructura
- Deployment: Coolify con Docker Compose
- Reverse Proxy: Traefik
- Ambientes: Local, DEV, PROD
- Chat Platform: Chatwoot integrado
- Containers: Web (puerto 6969), Agent (puerto 8080)

## Características Principales

### Múltiples Interfaces de Pedido

#### 1. Kiosk (Auto-servicio)
- Interface touch optimizada para totems
- Navegación intuitiva por categorías
- Personalización de productos (variantes, addons)
- Instrucciones especiales por item

#### 2. Totem POS
- Layout 3 columnas (categorías + productos + carrito)
- Orientación landscape
- Optimizado para uso por staff

#### 3. Shop (E-commerce)
- Compras online con MercadoPago
- Carrito persistente
- Seguimiento de orden
- Sistema de favoritos

#### 4. Agente Conversacional (Holly)
- Chat con IA en lenguaje natural
- Recomendaciones personalizadas
- Cross-selling y upselling inteligente
- Memoria de preferencias del usuario
- Multi-canal (web, WhatsApp, kiosk)

### Gestión y Administración

#### 5. Admin Dashboard
- Gestión de productos y categorías
- Control de órdenes en tiempo real
- Analytics y reportes
- Sistema de roles y permisos
- Configuración de menú

#### 6. Kitchen Display System (KDS)
- Vista de órdenes para cocina
- Tracking de SLA (tiempo de preparación)
- Estados de orden (pendiente, en proceso, listo)
- Métricas de performance de cocina

#### 7. Caja (Point of Sale)
- Interface para cajero
- Procesamiento de pagos
- Impresión de tickets
- Cierre de caja

#### 8. Display Público
- Pantalla para clientes
- Número de orden y estado
- Tiempo estimado de entrega

### Agente IA - Holly

#### Capacidades del Agente
- **Natural Language Understanding**: Comprende pedidos en lenguaje natural
- **Context Awareness**: Mantiene contexto de la conversación
- **Menu Knowledge**: Conocimiento completo del menú
- **Smart Recommendations**: Sugerencias basadas en preferencias
- **Entity Memory**: Recuerda preferencias del usuario entre sesiones
- **HITL Integration**: Escala a humano en casos complejos
- **Multi-turn Conversations**: Maneja diálogos complejos

#### State Machine (9 Nodos)
1. Greeting (bienvenida)
2. Menu Display (mostrar menú)
3. Order Items (tomar pedido)
4. Customize Items (personalizar)
5. Review Order (revisar carrito)
6. Checkout (finalizar compra)
7. Payment (procesar pago con MercadoPago)
8. HITL Escalation (escalación humana)
9. End (finalización)

## Sector

Gastronomía / Retail / Food Tech

## Estado

**Producción con Múltiples Módulos** - Última actualización: Octubre 2025

El sistema está completamente operativo con múltiples fases de testing documentadas. Incluye tres ambientes completamente configurados (local, DEV, PROD).

## Capturas de Pantalla

*Las capturas de pantalla estarán disponibles en la carpeta `./images/`*

Capturas sugeridas:
- Kiosk interface de auto-servicio
- Chat con Holly (agente IA)
- Kitchen Display System
- Admin dashboard con analytics
- Totem POS en acción
- Vista de shop e-commerce
- Display público de órdenes

## Métricas y Logros

- Sistema multi-módulo completo (8 interfaces diferentes)
- Agente de IA conversacional productivo con LangGraph
- Integración de pagos con MercadoPago
- Sistema de memoria de entidades para personalización
- Arquitectura de microservicios con Docker
- 3 ambientes configurados (local, dev, prod)
- Integración con Chatwoot para soporte
- SLA tracking en tiempo real para cocina
- Multi-canal: web, WhatsApp, kiosk

## Enlaces

- **Deployment**: Coolify (DEV y PROD)
- **Documentación del Agente**: Carpeta `/docs` en proyecto
- **API Docs**: FastAPI con documentación automática
- **Chat Platform**: Chatwoot integrado

## Tecnologías Destacadas

### Arquitectura del Agente IA

```python
# State machine con LangGraph
nodes = {
    "greeting": greet_user,
    "menu_display": show_menu,
    "order_items": take_order,
    "review_order": review_cart,
    "checkout": process_checkout,
    "payment": handle_payment,
    "hitl": escalate_to_human
}

# Entity memory para personalización
user_preferences = {
    "favorite_items": ["burger_clasica", "papas_grandes"],
    "dietary_restrictions": ["no_pickles"],
    "payment_method": "mercadopago"
}
```

### Cross-selling Inteligente
El agente Holly puede:
- Detectar combos óptimos basado en el pedido
- Sugerir bebidas complementarias
- Recomendar upgrades (tamaños más grandes)
- Recordar preferencias de pedidos anteriores

### Human-in-the-Loop (HITL)
Sistema que detecta:
- Preguntas fuera del dominio del menú
- Quejas o problemas que requieren atención
- Situaciones ambiguas que necesitan clarificación humana
- Pedidos con restricciones especiales complejas

## Ambientes y Deployment

### Local Development
```bash
docker-compose -f docker-compose.local.yml up
# Web: localhost:6969
# Agent: localhost:8080
```

### DEV (Coolify)
- Traefik reverse proxy
- SSL automático
- Logs centralizados

### PROD (Coolify)
- Alta disponibilidad
- Monitoring integrado
- Backups automáticos

## Documentación Técnica

El proyecto incluye documentación exhaustiva:
- `README.md`: Setup y configuración
- `/docs`: Guías de arquitectura, API y testing
- `docker-compose.{local,dev,prod}.yml`: Configuraciones por ambiente
- API docs generada automáticamente por FastAPI
