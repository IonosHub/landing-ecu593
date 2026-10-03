# Landing Ecu593 English

Landing de ventas de los cursos de inglés de **Ecu593 English**, hecha con Astro (sitio estático, CSS propio, sin framework de UI) y animaciones con GSAP. Bilingüe: español en `/` (por defecto) e inglés en `/en/`.

```sh
npm install
cp .env.example .env   # completa PUBLIC_API_URL y PUBLIC_SITE_URL
npm run dev            # http://localhost:4321, con los "Dato pendiente" visibles
npm run build          # genera dist/
npm run preview
```

## Estructura

```
src/
  config/site.ts        Marca y contacto: único lugar para nombre, WhatsApp, redes, dirección
  i18n/                 Textos de la página: es.ts y en.ts (mismo tipo Dictionary, types.ts)
  data/                 Datos neutros de idioma: programas, niveles, valores, fotos, testimonios
  lib/                  pending() para datos faltantes, WhatsApp y cliente de leads
  components/Landing.astro  La página completa; la usan pages/index.astro y pages/en/index.astro
  components/ui/        Primitivas del mundo pasaporte: Stamp, PhotoWindow, Mrz, Button, Icon, Value
  components/sections/  Una sección por archivo; leen de i18n/, data/ y config/
  components/seo/       JSON-LD (organización, cursos, FAQ)
  layouts/              <head> con SEO (canonical, hreflang, Open Graph), filtro de tinta de los sellos
  scripts/              motion.ts (GSAP) y lead-form.ts (formulario)
  styles/               tokens.css, buttons.css y global.css
  pages/                index (es), en/index, robots.txt, llms.txt
public/
  imgs/                 Logo
  patterns/             Patrones guilloché en SVG (fondo de "papel de seguridad")
```

- **Cambiar textos:** edita `src/i18n/es.ts` y `src/i18n/en.ts`. Si falta una traducción, TypeScript lo marca.
- **Cambiar datos:** `src/config/site.ts` (contacto, redes) y `src/data/*` (fotos, valores, niveles).
- **Agregar un idioma:** súmalo a `src/i18n/config.ts`, crea su diccionario y su página en `src/pages/<código>/index.astro`, y agrégalo a `i18n.locales` en `astro.config.mjs`.
- **Datos que faltan:** se escriben como `pending('qué falta')`. La lista completa está en [PENDIENTES.md](PENDIENTES.md).
- **Fotos:** agrega `photo: '/imgs/archivo.jpg'` a cada programa o modalidad en `src/data`. Sin foto se muestra una ventana vacía con la descripción de la foto que va ahí.
- **Formulario:** envía a `POST {PUBLIC_API_URL}/v1/leads/register` del sistema Ecu593, y el lead aparece en el pipeline de secretaría. Si falla, ofrece enviar la solicitud por WhatsApp.
- **Animaciones (GSAP):** apertura del pasaporte, giros de página, golpes de sello y el contador de niveles, todo en `src/scripts/motion.ts`. Solo corren si el usuario no pidió movimiento reducido; sin JavaScript todo el contenido sigue visible.
- **SEO / AEO:** título y descripción por idioma, `canonical`, `hreflang` (es-EC, en, x-default), Open Graph y Twitter con `public/og.png`, JSON-LD (`EducationalOrganization`, `Course` ×3, `FAQPage`), `sitemap-index.xml`, `robots.txt` y `llms.txt` (resumen en texto plano para asistentes de IA). Las URLs absolutas y el sitemap necesitan `PUBLIC_SITE_URL`. Los datos pendientes nunca se publican en el JSON-LD.

## Diseño

- Contexto de producto: [PRODUCT.md](PRODUCT.md)
- Sistema visual: `DESIGN.md`
