# Knowledge Base

Carpeta para archivos de referencia (PDFs, docs, CSVs) usados como base por los skills y contextos de clientes.

## Estructura

```
knowledge/
  {nombre-skill}/      ← archivos de referencia por skill
  {nombre-cliente}/    ← archivos especificos por cliente
```

## Carpetas de skills

Cada skill tiene su propia carpeta donde puedes dejar materiales de referencia:
guias de plataforma, benchmarks, frameworks, playbooks, estudios de caso, etc.

| Skill | Carpeta |
|---|---|
| `/skills:paid-expert` | `knowledge/paid-expert/` |
| `/skills:gtm-expert` | `knowledge/gtm-expert/` |
| `/skills:copywriter` | `knowledge/copywriter/` |

## Carpetas de clientes

Archivos especificos de cada cliente: briefs, decks, reportes, assets, etc.

| Cliente | Carpeta |
|---|---|
| Kordata | `knowledge/kordata/` |
| Appearly | `knowledge/appearly/` |

## Como usar con un skill

Cuando uses un skill, puedes referenciar un archivo diciendole:
> "Usa el archivo `knowledge/paid-expert/meta-ads-benchmarks.pdf` como contexto"
> "Revisa `knowledge/kordata/brief-q1.pdf` antes de responder"

Claude leera el archivo directamente (soporta PDF, CSV, MD, TXT).
