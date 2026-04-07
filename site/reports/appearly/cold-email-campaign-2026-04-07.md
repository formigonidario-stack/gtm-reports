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
