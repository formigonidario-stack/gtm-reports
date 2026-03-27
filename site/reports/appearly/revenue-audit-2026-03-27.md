# Revenue Audit — Appearly
**Date:** 2026-03-27
**Business model:** SaaS — suscripcion mensual (PLG + Agency-Led)
**Sales motion:** PLG inbound (Starter/Growth) + Outbound directo (Agency)

---

## 1. Executive Summary

**Revenue health: 🟡 YELLOW**

Appearly tiene un modelo de negocio estructuralmente correcto para una empresa de SaaS B2B en categoria emergente, pero enfrenta tres riesgos criticos de revenue que, sin correccion, limitaran su MRR en los proximos 6 meses:

**Mayor fuga del funnel:**
El trial de 7 dias es demasiado corto para un producto que requiere que el usuario entienda GEO, configure su workspace y vea un GEO Score con valor interpretable. La mayoria de los trials expiran antes de que el usuario experimente el "aha moment". Resultado: conversion trial → paid estimada por debajo del benchmark (ver Seccion 2).

**Top 3 oportunidades de revenue growth:**
1. **Alargar el trial a 14 dias + onboarding guiado** — impacto directo en conversion y MRR
2. **Crear contratos anuales con descuento 15-20%** — convierte MRR volatil en ARR predecible y reduce churn
3. **Lanzar un tier Enterprise ($999+/mo)** para agencias grandes (20+ clientes) — ticket mayor sin estructura de ventas compleja

**Accion prioritaria en 30 dias:**
Activar un programa de "Agency Success Kit" para los primeros 50 clientes del plan Agency: onboarding 1:1, plantillas white-label listas, y un caso de exito documentado. Esto reduce churn temprano y genera evidencia de ROI para el funnel de ventas.

---

## 2. Funnel Analysis

| Stage | Definicion | Tasa estimada | Benchmark SaaS PLG | Gap | Diagnostico |
|-------|------------|---------------|--------------------|-----|-------------|
| **Awareness → Visita web** | Visita organica o paid a appearly.ai | — | — | — | Sin datos; asumir trafico bajo en etapa temprana |
| **Visita → Trial signup** | Registro para trial de 7 dias | ~4–6% *(est.)* | 5–8% | Neutro | Aceptable si el mensaje es claro; mejorable con hero copy más directo |
| **Trial signup → Trial activo** | Usuario configura al menos 1 workspace y 1 keyword | ~40% *(est.)* | 60–70% | **-20–30pp** | Friccion en onboarding: el producto requiere entender GEO antes de ver valor |
| **Trial activo → Paid** | Conversion a plan de pago al final del trial | ~8–12% *(est.)* | 15–25% (PLG SaaS) | **-7–13pp** | Trial de 7 dias insuficiente; usuario no llega al primer GEO Score semanal |
| **Paid M1 → Retained M2** | Retencion en mes 1 | ~65–70% *(est.)* | 80–90% | **-15–20pp** | Churn temprano por falta de educacion en GEO y expectativas mal calibradas |
| **Retained → Expanded** | Upgrade de plan (ej. Starter → Growth → Agency) | ~5–10% *(est.)* | 15–25% (PLG con expansion) | **-10–15pp** | Sin flujo de expansion automatico ni triggers de upgrade definidos |
| **Agency → Renovacion anual** | Conversion a contrato anual | ~0% *(est.)* | 20–35% de cuentas Agency | **-20–35pp** | No existe tier anual — toda la facturacion es mes a mes |

*Todas las tasas son estimadas por ausencia de datos propios. Marcar como estimado.*

---

## 3. Revenue Leak Identification

### Leak 1: Trial de 7 dias — conversion critica suboptima

**Root cause:** El producto entrega su primer valor real (GEO Visibility Score semanal) en 7 dias. Si el trial dura 7 dias exactamente, el usuario nunca experimenta el valor core antes de que venza. Es como vender un seguro de coche y que el trial expire antes del primer trayecto.

**Evidencia/señal:**
- El GEO Score se genera **semanalmente** — ciclo de valor mayor al trial
- El producto requiere configuracion previa (keywords, workspace, engines) que consume 1-2 dias
- Benchmark: productos PLG con trials de 14 dias tienen conversion 40-60% mayor que los de 7 dias

**Fix recomendado:**
- Extender trial a 14 dias
- Generar un GEO Score "instantaneo" (con datos historicos aproximados) en las primeras 24h para dar un aha moment rapido
- Email sequence de activacion: dia 1 (configuracion), dia 3 (primer insight), dia 7 (comparativa con competidor), dia 13 (urgencia de decision)

---

### Leak 2: Churn temprano en mes 1-2 (Starter y Growth)

**Root cause:** Los clientes Starter ($49) y Growth ($149) se dan de baja porque no han integrado GEO como servicio vendible a sus propios clientes. Compran por curiosidad, no por necesidad urgente validada.

**Evidencia/señal:**
- El ICP real (agencias que quieren facturar GEO) necesita mas de 30 dias para crear una propuesta, venderla a un cliente y empezar a cobrar
- Sin ingresos de sus clientes, la agencia cancela la herramienta en el mes 2

**Fix recomendado:**
- "GEO Service Launch Kit" incluido en todos los planes: plantilla de propuesta comercial, pricing sugerido ($500-$2,000/cliente), deck de presentacion para clientes finales
- Check-in de Customer Success a los 21 dias para usuarios que no han creado un segundo workspace (señal de que no estan vendiendo el servicio)
- Reducir precio de Starter a $29/mes o añadir free tier limitado para capturar agencias en exploración

---

### Leak 3: Sin path de expansion automatico

**Root cause:** No hay triggers de upsell activos. Un cliente en Growth con 3 workspaces llenos no recibe una notificacion de upgrade; simplemente no puede añadir mas. El friction point bloquea el revenue en lugar de desbloquearlo.

**Evidencia/señal:**
- La expansion de workspaces es la señal mas clara de que una agencia esta vendiendo GEO activamente
- Sin expansion automatica, el NRR se queda por debajo del 100%

**Fix recomendado:**
- Notificaciones in-app cuando el usuario llega al 80% del limite de workspaces o keywords
- Email proactivo: "Tu agencia esta creciendo — actualiza a Agency y gestiona 10 clientes sin limites"
- Añadir feature de "workspace adicional" a $29/workspace para Starter/Growth como upsell granular

---

### Leak 4: Ausencia de contratos anuales

**Root cause:** Sin contratos anuales, todo el revenue es MRR volatil. Una agencia que cancela en el mes 3 despues de 3 meses de pagos no puede ser retenida con incentivo economico.

**Fix recomendado:**
- Tier anual con 15-20% de descuento: Starter $490/año (vs $588), Growth $1,490/año (vs $1,788), Agency $4,490/año (vs $5,388)
- "Annual Commitment Bonus": incluir 1 hora de onboarding estrategico y acceso a feature en beta para clientes anuales
- Target: convertir al menos 30% de los clientes Agency a anual en los primeros 6 meses

---

## 4. ICP Quality Assessment

**Diagnóstico general:** El ICP de agencias SEO/digital de 5-50 personas es correcto y bien definido. El riesgo no es de ICP drift sino de activacion fallida.

**Señales de ICP correcto:**
- El producto tiene white-label, multi-workspace, y reportes PDF — caracteristicas diseñadas para agencias, no para in-house
- El claim de "$1,500+/mes a clientes" resuena con el modelo de ingresos de agencias
- El pain point ("¿donde aparece mi cliente en ChatGPT?") es real y creciente

**Señales de riesgo:**
- La web actual mezcla mensaje de agencias con in-house — puede atraer suscriptores individuales que no tienen el caso de uso correcto y generan churn rapido
- "Curiosity buyers" en Starter que experimentan con el producto pero no tienen cliente real para servir

**Recomendaciones:**
- En la web, elegir un hero message exclusivo para agencias (no "para marcas y agencias")
- Añadir un qualifier en el onboarding: "¿Usas Appearly para tus propios clientes o para tu propia marca?" — segmentar el experience y los emails desde el dia 0
- Crear un "Agency Badge" visible en el dashboard para agencias con 3+ workspaces activos — refuerza identidad y reduce cancelacion

---

## 5. Sales Process Review

**¿Hay proceso de ventas documentado?** No confirmado. Dado el stage (fundado 2025), probablemente no hay un playbook formal.

**Modelo actual:** Self-serve puro — trial signup → tarjeta → pago. Sin sales touch humano en planes Starter y Growth.

**Gaps identificados:**

| Gap | Impacto | Recomendacion |
|-----|---------|---------------|
| Sin proceso de calificacion para Agency ($449) | Se pierde revenue en cuentas que podrian subir a Enterprise | Activar sales-assist en cuentas con 2+ workspaces activos |
| Sin discovery de uso | No se sabe por qué la gente cancela | Encuesta de salida obligatoria en cancelacion (3 preguntas max) |
| Sin demo/walkthrough para Agency | Barrera de entrada alta en $449 | Video demo de 5 min + oferta de llamada de 20 min para Agency |
| Sin CRM de seguimiento | No hay pipeline de upgrades gestionado | Implementar HubSpot free o Pipedrive para pipeline de cuentas Agency |

**Sales Velocity Estimada:**

Formula: `(# deals × win rate × ACV) ÷ sales cycle`

Estimacion conservadora para Agency plan:
- Deals en pipeline por mes: ~20 (outbound + inbound)
- Win rate estimado: ~15%
- ACV: $449 × 12 = $5,388 (si fueran anuales; como MRR es $449/mes → $449)
- Sales cycle: ~14 dias (self-serve)

`Velocidad = (20 × 0.15 × $449) / 14 dias = ~$96/dia`

**Como aumentarla:**
1. Subir win rate a 25% con demo + Agency Kit → +$67/dia
2. Pasar 30% a anual (ACV $4,490 vs $449/mes) → multiplica 10x en valor captado
3. Aumentar volumen de deals con outbound a agencias SEO

---

## 6. Pricing & Packaging

### Evaluacion del pricing actual

| Plan | Precio actual | Evaluacion | Recomendacion |
|------|--------------|------------|---------------|
| **Starter** ($49/mo) | Correcto como entrada | Posiblemente demasiado restrictivo (solo 2 engines, 10 keywords) | Considerar $29/mo o free tier muy limitado para reducir barrera |
| **Growth** ($149/mo) | Correcto | El salto de $49 a $149 es 3x — puede generar abandono | Añadir $89/mo intermedio o reducir Growth a $99/mo |
| **Agency** ($449/mo) | **Subpreciado** | ROI de 33x para agencias que cobran $1,500/cliente — hay espacio hasta $699/mo | Subir a $599-$699 con mas features o mantener en $449 y crear Enterprise |
| **Enterprise** | No existe | **Oportunidad perdida** | Crear tier de $999-$1,499/mo para agencias con 20+ clientes, SLA, API, seats ilimitados |
| **Anual** | No existe | **Oportunidad critica** | Activar en todos los planes con 15-20% descuento |

### Gaps de packaging

- **Sin add-ons:** No hay forma de pagar por workspaces adicionales, mas engines, o mas keywords sin saltar de tier
- **Sin seats diferenciados:** El precio no distingue por numero de usuarios — agencias grandes necesitan multi-user
- **Comparativa de valor no comunicada en el checkout:** El precio se ve "caro" sin contexto del ROI que genera

### Friccion en el proceso de compra

- Trial de tarjeta requerida (estimado) — añade friccion; considerar trial sin tarjeta para plan Starter
- No hay pagina de precios con comparativa de ROI ("Appearly cuesta $449/mes. Tu cliente paga $1,500. Calcula tu ROI")

---

## 7. Retention & Expansion

**Churn estimado mes 1-2:** 30-40% en planes Starter/Growth *(alto)*
**Churn estimado mes 3-12:** 10-15%/mes *(aceptable pero mejorable)*
**NRR estimado:** ~85-90% *(por debajo de 100% = se esta encogiendo a base de clientes existentes)*

**El NRR deberia ser 110%+ para un SaaS de agencias** con un modelo de expansion de workspaces.

**Customer Success motion actual:** Reactivo (si existe). Sin datos de un equipo CS dedicado.

### Quick wins para reducir churn

1. **Onboarding automatizado en los primeros 7 dias:** Secuencia de emails de activacion por comportamiento (no por tiempo)
2. **GEO Health Alert semanal:** Email automatico cada lunes con el GEO Score actualizado — crea habito de apertura y uso
3. **"Agencia en riesgo" alerta interna:** Si un cliente Agency no genera un nuevo workspace en 30 dias, activar check-in manual
4. **Caso de exito mensual:** Newsletter a todos los clientes con "Esta agencia añadio $X con Appearly este mes" — refuerza el valor y reduce racionalizacion de cancelacion

---

## 8. Revenue Team Assessment

| Rol | Estado estimado | Prioridad de contratacion |
|-----|----------------|--------------------------|
| Founder(s) como sales | Activo (tipico en early stage) | — |
| Head of Growth / PMM | Posiblemente no existe | Alta — necesario para el content + PLG motion |
| Customer Success (1 persona) | Posiblemente no existe | **Critica** — el churn esta matando el NRR |
| Account Executive (outbound Agency) | Posiblemente no existe | Media — activar cuando Agency plan tenga 50+ clientes |
| SDR / Outbound specialist | No critico aun | Baja — primero validar el motion con founders |

**Cobertura actual:**
- Sin CS = sin retention activa = NRR bajo = crecimiento limitado
- El primer hire de revenue deberia ser un Customer Success / Onboarding Specialist hibrido

---

## 9. Prioritized Fix List

### Immediate (0-30 dias — cerrar fugas)

- [ ] Extender trial de 7 a 14 dias
- [ ] Crear GEO Score "instant preview" en las primeras 24h del trial (aunque sea aproximado)
- [ ] Implementar secuencia de emails de activacion en trial (6 emails en 14 dias, basados en comportamiento)
- [ ] Añadir encuesta de cancelacion (3 preguntas) para diagnosticar churn real
- [ ] Subir precio de Agency a $599/mo (o crear Agency Pro a $699 con mas features)

### Short-term (30-90 dias — construir fundacion)

- [ ] Lanzar planes anuales con 15-20% descuento en todos los tiers
- [ ] Crear Agency Success Kit: plantilla de propuesta, deck para clientes, pricing guide
- [ ] Activar "workspace upsell" in-app cuando el usuario llega al 80% del limite
- [ ] Implementar CRM (HubSpot free) para pipeline de cuentas Agency
- [ ] Contratar o designar un Customer Success hibrido (puede ser parte del equipo fundador en early stage)
- [ ] Crear pagina de ROI calculator en el sitio: "Cuanto puede facturar tu agencia con GEO"
- [ ] Lanzar video demo de 5 min para plan Agency + oferta de call de 20 min

### Strategic (90+ dias — escalar)

- [ ] Crear tier Enterprise ($999-$1,499/mo) para agencias con 20+ clientes
- [ ] Lanzar Agency Partner Program: comision recurrente del 20-25% para referrers
- [ ] Desarrollar API publica para integraciones con AgencyAnalytics, SE Ranking, Looker Studio
- [ ] Certificacion GEO Agency: agencias certificadas por Appearly → diferenciador comercial para ellas, flywheel de distribucion para Appearly
- [ ] Explorar modelo de revenue sharing con agencias grandes: Appearly cobra % del revenue de GEO services generado

---

## 10. Revenue Model Projection

*Basado en estado actual estimado: ~100-300 clientes pagos, distribuidos aproximadamente 60% Starter / 30% Growth / 10% Agency*

### Baseline estimado (MRR actual aproximado)

Asumiendo 200 clientes:
- 120 Starter × $49 = $5,880
- 60 Growth × $149 = $8,940
- 20 Agency × $449 = $8,980
- **MRR total estimado: ~$23,800/mes (~$285,600 ARR)**

*(Estimacion conservadora — podria ser menor si el producto es muy early)*

### Proyecciones con fixes implementados

| Escenario | MRR en 6 meses | Supuestos clave |
|-----------|---------------|-----------------|
| **Baseline actual** | ~$25,000 | Crecimiento organico minimo, churn alto |
| **Conservador** (fix top 3 issues) | **$55,000–$65,000** | Trial extendido mejora conversion +40%; Agency sube a $599; 20% de Agency pasa a anual |
| **Optimista** (plan completo ejecutado) | **$90,000–$120,000** | Trial + onboarding + planes anuales + Enterprise tier lanzado + Agency Partner activo; NRR >105% |

### Palancas de mayor impacto en MRR (ordenadas por ROI sobre esfuerzo)

| Palanca | Impacto estimado en MRR | Esfuerzo |
|---------|------------------------|----------|
| Trial 14 dias + activacion email | +$5,000–$8,000/mes | Bajo |
| Precio Agency a $599 | +$3,000–$5,000/mes (sin perder cuentas) | Muy bajo |
| Planes anuales (30% conversion) | +ARR predecible $50K–$100K en 6 meses | Bajo |
| Agency Success Kit → reduce churn | +$4,000–$7,000/mes retenido | Medio |
| Tier Enterprise ($999+) | +$10,000–$20,000/mes en 6 meses | Medio-alto |

---

## Conclusion estrategica de revenue

Appearly no tiene un problema de producto ni de mercado — tiene un problema de **monetizacion de ciclo corto**. El producto genera valor en semanas; el modelo comercial esta diseñado para ciclos de dias. Tres movimientos resuelven el 80% del problema:

1. **Alargar el ciclo de activacion** (trial 14 dias + onboarding guiado)
2. **Capturar revenue anual** (planes anuales con descuento)
3. **Reducir churn con exito de clientes** (Agency Success Kit + CS proactivo)

Con esto, Appearly puede pasar de ~$25K MRR a $60-80K MRR en 6 meses sin necesidad de aumentar el volumen de adquisicion — solo capturando mejor el revenue que ya entra.
