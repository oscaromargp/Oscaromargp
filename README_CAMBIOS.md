# Changelog v4.1.0 — OSCAROMARGP Portafolio

**Fecha:** 2026-04-15
**Commit:** v4.1.0: Correcciones críticas + optimizaciones completas

---

## 🔴 Errores Críticos Corregidos

### 1. Google Forms Bloqueados → Formularios Nativos Premium
Los 3 iframes de Google Forms exigían inicio de sesión ("Accede a tu cuenta para continuar"), bloqueando completamente la captura de leads.

**Solución implementada:**
- 3 formularios HTML/CSS nativos con estética glassmorphism
- Envío vía **Web3Forms API** (gratuito, sin backend)
- Campos de honeypot anti-bot
- Validación HTML5 nativa (required, email, tel)
- Estados visuales de éxito/error con feedback al usuario
- Loading state en botón de envío

**Formularios creados:**
| Formulario | Campos | Subject del email |
|:---|:---|:---|
| Contacto General | Nombre, Email, Tel, Servicio, Mensaje | "Nuevo contacto desde OSCAROMARGP" |
| Cotización Editorial | Nombre, Email, Tipo, Presupuesto, Detalles | "Cotización Editorial - OSCAROMARGP" |
| Briefing Creativo | Nombre, Email, Giro, Estilo, Colores, Visión | "Briefing Creativo - OSCAROMARGP" |

> **⚠️ ACCIÓN REQUERIDA:** Debes registrarte en [web3forms.com](https://web3forms.com) (gratis), obtener tu API key, y reemplazar `TU_WEB3FORMS_KEY` en los 3 formularios del `index.html`.

### 2. Assets Faltantes (404)
- ✅ Creada carpeta `images/`
- ✅ Generado `images/logo.png` — Monograma OGP púrpura premium
- ✅ Generado `images/og-image.png` — Card para redes sociales con branding
- ✅ Favicon y apple-touch-icon configurados

### 3. Meta Tags SEO Faltantes
- ✅ `<meta name="theme-color" content="#A855F7">`
- ✅ `<link rel="canonical">`
- ✅ `<link rel="apple-touch-icon">`
- ✅ Schema.org JSON-LD (ProfessionalService)

---

## 🟡 Errores Moderados Corregidos

| # | Error | Archivo | Línea | Fix |
|:---:|:---|:---|:---:|:---|
| 4 | "Available Monday to Sunday" en inglés | index.html | 795 | → "Disponible de Lunes a Domingo" |
| 5 | Fecha "2015 – 2025" desactualizada | index.html | 384 | → "2015 – 2026" |
| 6 | "remaining" sin traducir | index.html | 675 | → "50% restante" |
| 7 | Enlace muerto `#` en Barbería | index.html | 346 | → WhatsApp con mensaje pre-configurado |
| 8 | Widget Translate colisiona con WhatsApp float | index.html / styles.css | — | Movido Translate a `bottom-left` |
| 9 | CSS duplicado `.services-grid` | styles.css | 608-612 | Eliminado duplicado |
| 10 | `btn-primary` animación conflictiva | styles.css | 378 | Simplificado a `fade-in-up` solo |
| 11 | GA ID placeholder `UA-XXXXXXXXX-X` | index.html | 871 | Removido parámetro |

---

## 🟢 Optimizaciones Implementadas

### A. Tipografía Responsiva
```css
/* Antes */
h1 { font-size: 4rem; }
/* Después */
h1 { font-size: clamp(2.25rem, 5vw + 1rem, 4rem); }
```
Aplicado a `h1`, `h2`, `h3` para adaptarse a todos los viewports sin media queries.

### B. FAQ con Transiciones Suaves
- **Antes:** `display: none/block` (sin animación)
- **Después:** `max-height` + `opacity` + `padding` con cubic-bezier transition (0.4s)
- Agregados atributos ARIA (`role="button"`, `aria-expanded`)

### C. Formularios Nativos Premium
Estilos glassmorphism integrados:
- Inputs con `backdrop-filter`, bordes semi-transparentes
- Focus state con glow púrpura
- Select personalizado con SVG arrow
- iOS: `font-size: 16px` para prevenir auto-zoom

### D. SEO Structured Data
```json
{
  "@type": "ProfessionalService",
  "name": "OSCAROMARGP",
  "serviceType": ["Diseño Gráfico", "Branding", ...]
}
```

### E. Accesibilidad
- FAQ: `role="button"` + `aria-expanded`
- `cursor: pointer` en elementos interactivos

---

## Archivos Modificados

| Archivo | Acción | Detalle |
|:---|:---|:---|
| `index.html` | Modificado | Forms, meta tags, textos, Schema.org |
| `styles.css` | Modificado | Responsive typography, form styles, fixes |
| `script.js` | Modificado | Form handler, FAQ animation, ARIA |
| `images/logo.png` | **Nuevo** | Logo monograma OGP generado por IA |
| `images/og-image.png` | **Nuevo** | Open Graph card para redes sociales |

---

## Instrucciones para Subir Cambios

```bash
# 1. Configurar credenciales (si no están)
git config --global user.email "oscaromargp@gmail.com"
git config --global user.name "Oscar Omar Gómez Peña"

# 2. El commit ya está hecho. Solo push:
cd /home/gopo/Documentos/Antigravity/portafolio
git push origin main

# 3. Registrarte en Web3Forms para obtener tu API key:
# https://web3forms.com → Sign up → Copiar access_key
# Reemplazar TU_WEB3FORMS_KEY en index.html (3 lugares)
```

---

## Pendiente (Post-Deploy)

1. **🔑 Web3Forms API Key** — Registrarte y reemplazar `TU_WEB3FORMS_KEY`
2. **📧 Alternativa n8n** — Si prefieres n8n, solo cambia la URL de `action` en los 3 formularios por tu webhook URL
3. **🖼️ Imágenes de servicios** — Las flip cards usan gradientes con emojis. Puedes reemplazarlos con fotos reales
