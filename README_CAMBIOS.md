# Changelog — OSCAROMARGP Portafolio

---

## v4.2.0 (2026-04-15)
### UX: Sistema de Tabs con Íconos para Formularios

**Problema:** Los 3 formularios se mostraban simultáneamente en un grid de 3 columnas. En móvil, esto se convertía en 3 formularios apilados, lo cual era una experiencia horrible.

**Solución:**
- **Tabs con íconos:** 3 botones (📧 Contacto, 🎨 Cotización, ✨ Briefing) que muestran solo 1 formulario a la vez
- **Transición suave:** Fade-in con `translateY` al cambiar entre panels
- **Estilo premium:** Tabs con glassmorphism, glow púrpura activo, hover elevado
- **Mobile-first:** Tabs compactos con íconos grandes en pantallas pequeñas
- **Web3Forms live:** API key configurada — formularios funcionales

---

## v4.1.0 (2026-04-15)
### Correcciones Críticas + Optimizaciones Completas

#### 🔴 Errores Críticos
- Google Forms bloqueados → Formularios nativos HTML premium (Web3Forms)
- Logo/OG Image 404 → Assets generados por IA
- Meta tags faltantes → theme-color, canonical, apple-touch-icon, Schema.org

#### 🟡 Errores Moderados
- Texto inglés "Available Monday to Sunday" → español
- "remaining" sin traducir → "50% restante"
- Fecha 2025 → 2026
- Enlace muerto Barbería → WhatsApp
- CSS duplicado eliminado
- Animación `btn-primary` corregida
- Widget Translate movido a bottom-left
- GA ID placeholder removido

#### 🟢 Optimizaciones
- Tipografía responsiva `clamp()`
- FAQ con transiciones suaves `max-height`
- Formularios nativos glassmorphism
- Honeypot anti-bot
- Schema.org JSON-LD
- ARIA labels en FAQ
- iOS font-size 16px anti-zoom

---

## v4.0.0 (Anterior)
- Landing completa con presencia digital, medios impresos y formularios
- Unificación de diseño
- Widget traducción Google
- Copy con neuromarketing

---

## Instrucciones para Subir

```bash
# El push necesita autenticación de GitHub.
# Opción 1: GitHub CLI (recomendado)
sudo apt install gh
gh auth login

# Opción 2: Personal Access Token
# 1. Ve a https://github.com/settings/tokens
# 2. Genera un token con permisos 'repo'
# 3. Usa el token como contraseña en el push

cd /home/gopo/Documentos/Antigravity/portafolio
git push origin main
```

## Archivos Modificados

| Archivo | v4.1.0 | v4.2.0 |
|:---|:---:|:---:|
| `index.html` | ✏️ | ✏️ |
| `styles.css` | ✏️ | ✏️ |
| `script.js` | ✏️ | ✏️ |
| `images/logo.png` | 🆕 | — |
| `images/og-image.png` | 🆕 | — |
