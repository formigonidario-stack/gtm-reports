# Cold Email Campaign — Appearly
**Date:** 2026-04-07
**Target:** 30,000 agencias SEO en USA, Canada y UK
**Objetivo:** Trial signups → clientes pagos en 6 meses

---

## Executive Summary

Canal de adquisición de menor costo disponible para Appearly. Con una inversión de **~$1,530 en 6 meses** y una base de 30,000 agencias SEO en mercados angloparlantes, el modelo proyecta **25 clientes nuevos** a un CAC de $61 y un LTV:CAC ratio de 27:1.

El cold email funciona especialmente bien para Appearly porque:
- El ICP es muy específico y localizable (agencias SEO con presencia en Clutch)
- El hook "$1,500+/mo nueva línea de servicio" es concreto y relevante para el decisor
- El producto es self-serve — no requiere demo ni sales cycle largo

---

## Stack de Tools y Costos

### Fase 1 — Construcción de la base

| Tool | Uso | Costo |
|---|---|---|
| Apify — Clutch Scraper | Scraping 30k agencias (nombre, web, ubicación, rating, tamaño) | $60-90 |
| Clay | Enriquecimiento: email del decisor, LinkedIn, tech stack, empleados | $298 (2 meses) |
| Apollo.io | Backup para emails no encontrados en Clay | $49 (1 mes) |
| **Subtotal Fase 1** | | **~$440** |

**Output esperado:** ~21,000 contactos válidos con email verificado (70% match rate)

### Fase 2 — Infraestructura de envío

| Tool | Uso | Costo |
|---|---|---|
| Instantly.ai | Plataforma de envío + warmup + secuencias | $582 (6 meses) |
| Dominios secundarios (Google Workspace) | 4 dominios para rotar y proteger el dominio principal | $48 |
| Cuentas de email (12 en total) | 3 por dominio — volumen ~400 emails/día | $432 (6 meses) |
| **Subtotal Fase 2** | | **~$1,062** |

### Fase 3 — Verificación

| Tool | Uso | Costo |
|---|---|---|
| Millionverifier | Verificación masiva de 21k emails antes de enviar | $29 |
| **Subtotal Fase 3** | | **$29** |

### Resumen de costos totales

| Fase | Costo |
|---|---|
| Base + enriquecimiento | $440 |
| Infraestructura de envío (6 meses) | $1,062 |
| Verificación | $29 |
| **Total 6 meses** | **~$1,530** |

---

## Funnel — 6 Meses

| Etapa | % | Volumen | Notas |
|---|---|---|---|
| Base scraped (Clutch) | — | 30,000 | Filtrado por categoría SEO + USA/CA/UK |
| Contactos enriquecidos con email | 70% | 21,000 | Clay + Apollo |
| Emails verificados y enviables | 92% | 19,320 | Post-Millionverifier |
| Open rate | 38% | 7,340 | Buena infra + subject personalizado |
| Reply o click positivo | 4.5% | 330 | Secuencia de 4 pasos |
| Trial signup | 42% | 139 | Landing clara + 7-day trial sin tarjeta |
| Trial → Paid | 18% | **~25 clientes** | Benchmark SaaS self-serve categoría nueva |

---

## Proyección de MRR

| Escenario | Clientes | ARPU | MRR generado |
|---|---|---|---|
| Conservador (-30%) | 17 | $175 | $2,975 |
| Realista | 25 | $185 | $4,625 |
| Optimista (+30%) | 33 | $200 | $6,600 |

**CAC realista:** $1,530 ÷ 25 = **$61 por cliente**
**LTV estimado** (12 meses × $185 ARPU × 75% retention): **~$1,665**
**LTV:CAC ratio: 27:1**

---

## Secuencia de Emails (4 pasos)

| Email | Timing | Ángulo |
|---|---|---|
| Email 1 | Día 0 | Hook principal: "Sus clientes ya están perdiendo visibilidad en ChatGPT y no lo saben" |
| Email 2 | Día 3 | Prueba: datos reales de visibilidad GEO en su nicho geográfico |
| Email 3 | Día 7 | Propuesta de valor: nueva línea de servicio $1,500+/mes |
| Email 4 | Día 12 | Breakup + CTA directo: trial link + resultado en 5 minutos |

---

## Variables Críticas

1. **Segmentación** — agencias con 5-20 empleados y reviews recientes en Clutch convierten 2-3x mejor que las grandes
2. **Personalización del subject** — incluir el nombre de la agencia o su mercado sube el open rate +12-15%
3. **Trial sin fricción** — si piden tarjeta en el trial, la conversión cae a la mitad
4. **Follow-up en LinkedIn** — mensaje de conexión el mismo día del email sube el reply rate ~20%

---

## Acciones Gratuitas ($0) para Complementar la Campaña

Mientras el cold email corre en paralelo, estas acciones no tienen costo monetario y amplifican el funnel.

### 1. Product Hunt Launch

Product Hunt es el canal de lanzamiento de referencia para SaaS. Una semana bien ejecutada puede generar 500-2,000 signups orgánicos.

**Cómo hacerlo:**
- Crear un perfil de "maker" con historia real del fundador
- Preparar el launch 2-3 semanas antes: conseguir 20-30 early supporters que voten en las primeras horas (crítico para llegar al top 5 del día)
- Publicar un martes o miércoles a las 00:01 PST
- Preparar una respuesta personalizada para cada comentario durante las primeras 12 horas
- Agregar GIF de demo del producto como primer asset

**Portales similares donde también listar (todos gratuitos):**
- [Betalist](https://betalist.com) — audiencia early adopters, bueno para pre-launch
- [Fazier](https://fazier.com) — directorio SaaS, tráfico orgánico SEO
- [SaaSHub](https://saashub.com) — comparador de herramientas, long tail
- [There's An AI For That](https://theresanaiforthat.com) — directorio de herramientas AI, muy tráfico
- [Futurepedia](https://futurepedia.io) — directorio AI, 1M+ visitas/mes
- [AI Tools Directory](https://aitoolsdirectory.com)
- [Toolify.ai](https://toolify.ai)
- [G2](https://g2.com) — crítico para SEO y social proof B2B (listar gratis, reviews se consiguen pidiendo a early users)
- [Capterra](https://capterra.com) — mismo perfil que G2, importante para agencias

### 2. Reddit Seeding

Las agencias SEO son muy activas en Reddit. Participación genuina en estos subreddits construye awareness sin costo.

**Subreddits clave:**
- r/SEO (600k+ miembros)
- r/bigseo
- r/digital_marketing
- r/agency

**Estrategia:** No promocionar directamente. Responder preguntas sobre AI search, GEO y visibilidad en ChatGPT con respuestas de valor. Incluir el link solo cuando es genuinamente relevante. Una respuesta bien rankeada en r/SEO puede generar 50-200 visitas al día durante semanas.

**Tipos de contenido que funcionan en estos subreddits:**

*Posts propios (publicar 1-2 veces por mes máximo):*
- **Experimento con datos reales:** "I tracked 50 SEO agency brands in ChatGPT for 30 days — here's what I found." Incluir capturas, datos, metodología. Es el formato que más upvotes genera en r/SEO.
- **Caso de uso práctico:** "How we helped an agency add $1,200/mo in new services using AI search monitoring." Sin mencionar Appearly en el título — dejar que la historia lo cuente.
- **Análisis de tendencia:** "ChatGPT is now sending more referral traffic than Bing in [vertical]. Here's the data." Posts con datos originales se comparten fuera de Reddit también.
- **Free resource / template:** "Free GEO audit checklist for agencies (Google Sheet)." Los recursos descargables son el tipo de post con mayor ratio upvotes/comentarios en r/bigseo.

*Comentarios en posts de terceros (hacer 3-5 por semana):*
- Responder posts del tipo "Is GEO real or just hype?" con datos concretos y sin vender
- Responder "What tools do you use for AI search tracking?" — aquí sí se puede mencionar Appearly de forma natural
- Responder preguntas sobre cómo rankear en ChatGPT o Perplexity — contenido educativo, Appearly como referencia
- Añadir perspectiva en debates sobre "SEO is dead" — posicionarse como voz de la categoría GEO

**Regla de oro:** ratio 10:1 — por cada post propio, 10 comentarios de valor en posts ajenos. Cuentas que solo postean su producto son baneadas rápido.

### 3. SEO con Páginas de Comparación

Crear páginas del estilo:
- "Appearly vs [competidor]"
- "Best GEO tools for agencies 2026"
- "How to track brand visibility in ChatGPT"

Son páginas de alta intención que convierten bien y se posicionan rápido cuando la categoría es nueva (baja competencia).

### 4. LinkedIn Outreach Manual (fundador)

El perfil del fundador en LinkedIn es el activo más subestimado en esta etapa. 10-15 conexiones diarias a owners de agencias SEO + un mensaje personalizado de 2 líneas cuesta $0 y tiene mayor reply rate que cualquier automatización.

Template de mensaje:
> "Vi que llevan [X años] haciendo SEO para clientes. Estamos viendo que el tráfico desde ChatGPT ya supera al de Google en algunas categorías — construimos algo para que las agencias como la tuya lo moneticen. ¿Vale 5 minutos?"

### 5. Cold Email a Newsletters de SEO

Hay 20-30 newsletters de SEO en USA/UK con 5,000-50,000 suscriptores cada una que aceptan menciones gratuitas si el producto es genuinamente relevante para su audiencia.

**Ejemplos:**
- Search Engine Roundtable
- SEOFOMO (Aleyda Solís)
- Detailed.com newsletter

Un solo feature en SEOFOMO puede generar 300-800 trials.

### 6. Partners de Integración y Co-marketing

Contactar a herramientas complementarias (no competidoras) para cross-promotion:
- Semrush, Ahrefs, Surfer SEO — proponer integración o co-post
- Agencias de contenido grandes — proponer white-label partnership

Costo: $0. Barrera: requiere tracción mínima previa (50+ clientes) para que la otra parte lo tome en serio.

---

## Prioridad de Ejecución

| Acción | Tiempo para implementar | Impacto estimado | Costo |
|---|---|---|---|
| Cold email (30k base) | 3 semanas setup + 6 meses running | 25 clientes | $1,530 |
| Product Hunt launch | 3 semanas prep | 200-800 signups en 48h | $0 |
| Listados AI/SaaS directories | 2-3 horas | 50-200 signups/mes (acumulativo) | $0 |
| Reddit seeding | Ongoing, 1h/semana | 30-100 visitas/semana | $0 |
| LinkedIn manual (fundador) | Ongoing, 30 min/día | 5-10 clientes/mes | $0 |
| Newsletter outreach | 2-3 horas | 300-800 signups (one-shot) | $0 |
