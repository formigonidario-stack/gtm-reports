# Abrazia Senior Care — Estrategia de Cold Email Outbound

**Fecha:** 2026-03-25
**Objetivo:** Captación de inversores vía cold email a base de datos fría
**Skill:** Outbound Email Specialist

---

## Diagnóstico de situación

- **Producto:** Oportunidad de inversión en fideicomiso — tickets de $100K / $200K / $299K USD
- **ICP:** Inversores argentinos ABC1, perfil profesional o empresario, con capital disponible
- **Base de datos:** No existe — hay que construirla desde cero
- **Dominio principal:** Por proteger (nunca se usa para cold outbound)
- **Estado:** Sin infraestructura de envío configurada

**Prioridad absoluta:** En esta campaña el dominio principal de Abrazia NO puede estar en riesgo. Un solo spam complaint masivo puede dañar la reputación del dominio corporativo para siempre.

---

## Fase 1 — Infraestructura técnica (Semanas 1-2)

### 1.1 Compra de dominios alternativos

Nunca usar `abrazia.com` (o el dominio principal) para cold outbound. Comprar dominios similares exclusivamente para outreach:

| Dominio sugerido | Uso |
|---|---|
| `abrazia-invest.com` | Campaña inversores |
| `getabrazia.com` | Campaña inversores (alternativa) |
| `abrazia-care.co` | Campaña referidores (médicos, abogados) |

**Ratio estándar:** 1 dominio = 30-40 emails/día máximo.
Para llegar a ~100-120 emails/día → 3 dominios con 2 mailboxes cada uno.

**Dónde comprar:** Google Domains, Namecheap o GoDaddy. Presupuesto: ~$30-60 USD/año por dominio.

---

### 1.2 Configuración DNS obligatoria

Para **cada dominio**, configurar los tres registros antes de hacer cualquier warmup:

**SPF** (quién puede enviar en nombre del dominio):
```
v=spf1 include:_spf.google.com ~all
```

**DKIM** (firma criptográfica de los emails):
- Generada desde Google Workspace al agregar el dominio
- Clave mínima: 2048 bits
- Verificar con: MXToolbox DKIM Lookup

**DMARC** (qué hacer con emails que fallan SPF/DKIM):
```
v=DMARC1; p=none; rua=mailto:dmarc@abrazia-invest.com
```
- Empezar con `p=none` durante el warmup
- Escalar a `p=quarantine` a las 4 semanas
- Escalar a `p=reject` a las 8 semanas

**Verificación:** Usar MXToolbox.com para confirmar que los tres registros están activos antes de continuar.

---

### 1.3 Mailboxes

Usar **Google Workspace** (no hosting genérico). Costo: ~$6 USD/mes por cuenta.

Crear 2 mailboxes por dominio con nombres reales:

| Mailbox | Dominio |
|---|---|
| gustavo@abrazia-invest.com | Dominio 1 |
| samuel@abrazia-invest.com | Dominio 1 |
| ignacio@getabrazia.com | Dominio 2 |
| kelly@getabrazia.com | Dominio 2 |

> Usar nombres del equipo real de Abrazia (Samuel Senderovsky, Dr. Ignacio Previgliano) aumenta la tasa de apertura y la credibilidad. El prospecto que googlea el nombre va a encontrar un perfil real.

**Total mailboxes:** 4-6 para empezar (escalar según volumen).

---

### 1.4 Herramienta de envío (ESP)

**Recomendación: Instantly.ai**

Por qué:
- Warmup automático integrado (no requiere tool separada)
- Multi-dominio y multi-mailbox desde el mismo panel
- Rotación automática de mailboxes para distribuir volumen
- Analytics por campaña y por mailbox
- Precio competitivo: ~$37-97 USD/mes según plan

Alternativa si el volumen crece: **Smartlead.ai** (~$59 USD/mes).

**Setup en Instantly:**
1. Conectar cada mailbox de Google Workspace vía IMAP/SMTP
2. Activar warmup automático en todos los mailboxes desde el día 1
3. Configurar delays aleatorios entre envíos (entre 90 y 300 segundos)
4. Definir ventana de envío: lunes a viernes, 9am-6pm hora Argentina

---

## Fase 2 — Warmup de dominios (Semanas 2-6)

El warmup es el proceso más crítico. Un dominio frío que envía volumen el día 1 va directo a spam.

### Calendario de warmup

| Semana | Emails/día por mailbox | Tipo de actividad |
|---|---|---|
| 1 | 5-10 | 100% warmup automático (Instantly to Instantly) |
| 2 | 15-20 | 90% warmup + 10% prospectos reales seleccionados |
| 3 | 25-30 | 70% warmup + 30% prospectos reales |
| 4 | 35-40 | 40% warmup + 60% prospectos reales |
| 5-6 | 40-50 | Volumen normal — warmup siempre activo en background |

### Reglas de oro del warmup

- **El warmup automático nunca se apaga** — corre siempre en background, incluso cuando la campaña está activa
- Monitorear reputación de dominio en **Google Postmaster Tools** desde la semana 2
- Testear deliverability con **Mail-Tester.com** antes de lanzar a prospectos reales
- Si el spam score cae o aparece en blacklist → pausar 1 semana, investigar causa
- **Blacklist check semanal:** MXToolbox Blacklist Check

---

## Fase 3 — Construcción de lista (Semanas 2-4, en paralelo al warmup)

### ICP definido para esta campaña

**Perfil inversor objetivo:**
- Empresarios, directores o dueños de empresa
- Profesionales de alto ingreso (médicos especialistas, abogados socios, contadores de firma grande)
- Family offices y gestores de patrimonio
- Ex-ejecutivos C-level con liquidez
- Geografía: Argentina (Buenos Aires, Zona Norte prioritaria; Córdoba como secundario)
- Rango de edad estimado: 45-65 años
- Señal de capacidad de inversión: empresas con 10+ empleados, LinkedIn con cargo senior, industrias de alto margen

### Fuentes de prospecting

**Fuente 1: Apollo.io** (principal)
- Filtrar por: cargo (CEO, Director, Socio, Fundador), país (Argentina), tamaño de empresa (10-200 empleados)
- Industrias prioritarias: salud, finanzas, real estate, retail, consultoría
- Exportar: 500-1.000 contactos por batch
- Costo: Plan básico ~$49 USD/mes, incluye emails verificados

**Fuente 2: LinkedIn Sales Navigator + enriquecimiento**
- Buscar por cargo + industria + geografía
- Exportar perfiles → enriquecer emails con **Clay.com** o **Hunter.io**
- Sales Navigator: ~$99 USD/mes

**Fuente 3: Directorios específicos**
- ARCAP (Asociación Argentina de Capital Privado) — red de inversores ángeles
- Cámaras empresariales: Cámara de Comercio, IDEA, YPO Argentina
- Colegios médicos (para referidores) — disponible en directorios públicos

**Fuente 4: Clay.com** (stack moderno, opcional)
- Enriquece listas con contexto adicional: empresa actual, LinkedIn, señales de comportamiento
- Permite personalización dinámica por segmento
- Costo: ~$149 USD/mes (plan de entrada)

### Verificación de emails (obligatorio antes de enviar)

**Herramienta recomendada: ZeroBounce**
- Verificar 100% de la lista antes de importar a Instantly
- Eliminar: invalid, catch-all de alto riesgo, role-based (info@, contact@)
- Objetivo: bounce rate < 2% (>3% daña reputación del dominio)
- Costo: ~$16 USD por 2.000 verificaciones (pago por uso)

---

## Fase 4 — Secuencia de emails (Semanas 5-6 en adelante)

### Estructura de la secuencia (inversores)

```
Email 1 — Día 1:   Apertura — propuesta directa, sin pitch agresivo
Email 2 — Día 4:   Follow-up — ángulo diferente (el mercado, la oportunidad)
Email 3 — Día 9:   Prueba social — credenciales del equipo o del proyecto
Email 4 — Día 14:  Breakup — última oportunidad, tono suave
```

Máximo 4 touches por prospecto. Si no responde, salir con elegancia — no quemar el contacto.

### Principios de copy para esta campaña

- **Texto plano o near-plain-text** — sin imágenes, sin HTML pesado, sin logos. Parece un email personal, no marketing.
- **Menos de 150 palabras por email** — los inversores no leen paredes de texto
- **Un solo CTA por email** — responder o agendar una llamada, nunca dos acciones
- **Personalización real** — no solo {first_name}. Mencionar industria, empresa, o cargo específico.
- **Sin attachments en el primer email** — aumenta la probabilidad de ir a spam
- **Unsubscribe link siempre presente** — Gmail lo requiere desde 2024 para bulk senders

### Palabras a evitar en el asunto y cuerpo

❌ "inversión segura", "garantizado", "retorno asegurado", "sin riesgo", "oportunidad única", "gratis", "urgente", "haga clic aquí"

### Ejemplos de asuntos que funcionan en outbound financiero

- "Abrazia — oportunidad en senior care premium Argentina"
- "Una pregunta sobre tu portafolio, {first_name}"
- "¿Tiene sentido hablar 20 minutos esta semana?"
- "Proyecto en construcción — 63% completado, ronda final"

---

## Fase 5 — Métricas y monitoreo

### KPIs objetivo

| Métrica | Objetivo | Señal de alerta |
|---|---|---|
| Open rate | > 40% | < 25% → problema de deliverability o asunto |
| Reply rate | 3-8% | < 2% → revisar copy o ICP |
| Positive reply rate | 1-3% | < 0.5% → revisar propuesta o segmento |
| Bounce rate | < 2% | > 3% → pausar y re-verificar lista |
| Spam complaint rate | < 0.1% | > 0.1% → pausar campaña inmediatamente |

### Herramientas de monitoreo

| Herramienta | Para qué | Frecuencia |
|---|---|---|
| Google Postmaster Tools | Reputación de dominio en Gmail | Semanal |
| MXToolbox Blacklist | Verificar que el dominio no esté en blacklists | Semanal |
| Instantly Analytics | Open rate, reply rate, bounce rate | Diario primeras 2 semanas, luego semanal |
| Mail-Tester.com | Score de deliverability antes de lanzar | Antes de cada nueva campaña |
| GlockApps | Inbox placement test (Gmail / Outlook / Yahoo) | Al inicio y si hay caída de open rate |

---

## Stack completo y costos estimados

| Herramienta | Uso | Costo estimado/mes |
|---|---|---|
| Instantly.ai | ESP + warmup + secuencias | $37-97 USD |
| Google Workspace | Mailboxes (6 cuentas) | ~$36 USD |
| Dominios (3) | Envío alternativo | ~$8 USD (anualizado) |
| Apollo.io | Prospecting + emails | $49-99 USD |
| ZeroBounce | Verificación de lista | $16-30 USD (por uso) |
| LinkedIn Sales Nav | Prospecting avanzado (opcional) | $99 USD |
| Clay.com | Enriquecimiento (opcional) | $149 USD |

**Total stack mínimo (sin Clay ni LinkedIn Sales Nav):** ~$140-180 USD/mes
**Total stack completo:** ~$390-430 USD/mes

---

## Roadmap resumido

| Semana | Acción |
|---|---|
| 1 | Comprar dominios. Crear mailboxes en Google Workspace. Configurar SPF/DKIM/DMARC. Contratar Instantly. |
| 2 | Activar warmup automático en todos los mailboxes. Empezar construcción de lista en Apollo. |
| 3 | Verificar lista con ZeroBounce. Escribir secuencia de 4 emails. Testear deliverability con Mail-Tester. |
| 4 | Continuar warmup. Refinar lista y segmentación. Setup de campaña en Instantly. |
| 5 | Lanzar campaña con volumen bajo (10% de la lista). Monitorear métricas diario. |
| 6 | Escalar volumen si métricas son sanas. Iterar copy según reply rate. |
| 7+ | Operación normal. Monitoreo semanal. A/B test de asuntos y ángulos. |

---

## Riesgos y mitigaciones

| Riesgo | Probabilidad | Mitigación |
|---|---|---|
| Dominio cae en blacklist | Media | Warmup completo, bounce rate < 2%, nunca saltar pasos |
| Listas de mala calidad (bounces altos) | Alta en Argentina | Verificar 100% con ZeroBounce antes de importar |
| Spam complaints por sensibilidad del tema (inversión) | Media | Copy conservador, personalización real, no prometer retornos |
| Open rate bajo por filtros de Gmail | Media | SPF/DKIM/DMARC correctos + warmup + texto plano |
| Regulaciones de email en Argentina | Baja-Media | Incluir siempre unsubscribe, no comprar listas dudosas |

---

## Próximos pasos inmediatos

1. **Confirmar dominios alternativos** — ¿cuál prefieren registrar primero?
2. **Definir quién firma los emails** — Samuel Senderovsky es el más recomendado (mayor credibilidad)
3. **Construir lista piloto** — 200-300 contactos para la primera campaña de prueba
4. **Escribir secuencia de 4 emails** — con el copywriter skill una vez definido el copy de inversores
