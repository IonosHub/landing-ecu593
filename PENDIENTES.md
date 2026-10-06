# Pendientes de contenido

Todo lo que la landing necesita y aún no tenemos. En `npm run dev` cada dato faltante se ve con un recuadro rojo punteado **"Dato pendiente"**. En producción esos bloques se ocultan o muestran un texto alternativo seguro. No se inventa nada: ni testimonios, ni precios, ni cifras.

Para completar un dato, cambia `pending('…')` por el valor real en el archivo indicado. Los textos están en dos idiomas: **completa el dato en `src/i18n/es.ts` y en `src/i18n/en.ts`**.

Fuente de lo ya completado: formulario del cliente del 05-10-2026 (Carlos Ismael Alvarez Cevallos).

## Contacto y marca — `src/config/site.ts`
- [ ] URLs de Instagram, Facebook y TikTok (`social`). El cliente las tiene pendientes (Guisepe)
- [ ] Logo en SVG o PNG transparente: el actual es `public/imgs/logo_oficial.jpg` sobre fondo blanco. Debe subirse a la carpeta de Drive del cliente
- [ ] Favicon: hoy se genera desde el logo (`public/favicon.png`)

## Entorno — `.env` (ver `.env.example`)
- [ ] `PUBLIC_SITE_URL`: dominio de producción. Sin él no hay URLs absolutas en canonical/hreflang/Open Graph ni sitemap. El cliente no indicó si ya tiene dominio

## Formulario — webhook n8n `correos-ecu593`
- [ ] Probar un envío real de punta a punta (llega el correo a ecu593english@gmail.com). El formulario envía `name`, `email`, `phone`, `program`, `source`, `lang` y `page` como `application/x-www-form-urlencoded`
- [ ] (Opcional) Activar CORS en el nodo Webhook de n8n (*Allowed Origins* con el dominio de la landing). Hoy el preflight `OPTIONS` responde 500, por eso el formulario usa `mode: 'no-cors'` y no puede leer la respuesta: solo detecta errores de red, no un fallo dentro de n8n

## Programas — `programs.items.*.duration` en `src/i18n/es.ts` y `en.ts`
- [ ] Duración o formato de Particulares, Conversación y Empresas
- [ ] Fotos reales de cada programa: `photo: '/imgs/…'` en `src/data/programs.ts` (el texto `imageBrief` describe la toma)

## Nivel B2 — `src/data/method.ts`
- [ ] Nivel MCER de los niveles 1 a 11 (`cefr`). El 12 ya figura como B2
- [ ] Contenido o temas de cada nivel: `method.levelContent` en `src/i18n/es.ts` y `en.ts`

## Calendario mensual (sección nueva, aún no construida)
- [ ] Niveles activos de cada mes. El cliente quiere mostrarlo y cambiarlo mes a mes; falta que envíe el primer calendario para definir el formato

## Horarios — `modalities.items.online.details` en `src/i18n/es.ts` y `en.ts`
- [ ] Plataforma de las clases (Zoom, Meet, etc.) y requisitos técnicos
- [ ] Foto de una clase online: `photo` en `src/data/modalities.ts`

## Inversión — `pricing.items` en `src/i18n/es.ts` y `en.ts`
- [ ] Formas de pago aceptadas

## Preguntas frecuentes — `faq.items` en `src/i18n/es.ts` y `en.ts`
- [ ] Prueba de ubicación o ingreso a un nivel superior para quien ya sabe inglés

## Testimonios — `src/data/testimonials.ts`
- [ ] Testimonios reales con permiso: nombre, rol y foto opcional. El cliente dice que puede conseguirlos. Mientras la lista esté vacía, la sección no se publica
