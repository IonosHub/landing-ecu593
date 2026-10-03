# Landing Ecu593 English

Landing de ventas de los cursos de inglés de **Ecu593 English**, hecha con Astro (sitio estático, CSS propio, sin framework de UI).

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
  data/                 Contenido tipado (programas, método, modalidades, FAQ, valores, testimonios)
  lib/                  pending() para datos faltantes, WhatsApp y cliente de leads
  components/ui/        Primitivas del mundo pasaporte: Stamp, PhotoWindow, Mrz, Button, Icon, Value
  components/sections/  Una sección de la página por archivo; solo leen de data/ y config/
  layouts/              <head>, SEO, filtro de tinta compartido por los sellos
  scripts/              Animaciones de scroll (reveal.ts) y formulario (lead-form.ts)
  styles/               tokens.css (colores, tipografía, espacios, motion) y global.css
public/
  imgs/                 Logo
  patterns/             Patrones guilloché en SVG (fondo de "papel de seguridad")
```

- **Cambiar textos o datos:** edita `src/data/*` o `src/config/site.ts`, sin tocar el markup.
- **Datos que faltan:** se escriben como `pending('qué falta')`. La lista completa está en [PENDIENTES.md](PENDIENTES.md).
- **Fotos:** cada `image` en `src/data` acepta `src`. Sin `src` se muestra una ventana vacía con la descripción de la foto que va ahí.
- **Formulario:** envía a `POST {PUBLIC_API_URL}/v1/leads/register` del sistema Ecu593, y el lead aparece en el pipeline de secretaría. Si falla, ofrece enviar la solicitud por WhatsApp.
- **Animaciones:** solo corren si el usuario no pidió movimiento reducido. Sin JavaScript todo el contenido sigue visible.

## Diseño

- Contexto de producto: [PRODUCT.md](PRODUCT.md)
- Sistema visual: `DESIGN.md`
