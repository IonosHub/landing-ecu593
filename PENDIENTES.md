# Pendientes de contenido

Todo lo que la landing necesita y aún no tenemos. En `npm run dev` cada dato faltante se ve con un recuadro rojo punteado **"Dato pendiente"**. En producción esos bloques se ocultan o muestran un texto alternativo seguro. No se inventa nada: ni testimonios, ni precios, ni cifras.

Para completar un dato, cambia `pending('…')` por el valor real en el archivo indicado. Los textos están en dos idiomas: **completa el dato en `src/i18n/es.ts` y en `src/i18n/en.ts`**.

## Contacto y marca — `src/config/site.ts`
- [ ] Correo de contacto de la escuela (`email`)
- [ ] Ciudad y dirección de la sede (`city`, `address`)
- [ ] Horario de atención (`officeHours`)
- [ ] URLs de Instagram, Facebook y TikTok (`social`)
- [ ] Logo en SVG o PNG transparente: el actual es `public/imgs/logo_oficial.jpg` sobre fondo blanco
- [ ] Favicon: hoy se genera desde el logo (`public/favicon.png`)

## Entorno — `.env` (ver `.env.example`)
- [ ] `PUBLIC_SITE_URL`: dominio de producción. Sin él no hay URLs absolutas en canonical/hreflang/Open Graph ni sitemap
- [ ] `PUBLIC_API_URL`: URL del backend del sistema Ecu593. Sin ella, el formulario ofrece WhatsApp como alternativa

## Programas
- [ ] Rango de edad de Kids, Teens y Adultos: `programs.items.*.ages` en `src/i18n/es.ts` y `en.ts`
- [ ] Fotos reales de cada programa: `photo: '/imgs/…'` en `src/data/programs.ts` (el texto `imageBrief` describe la toma)

## Método
- [ ] Nivel MCER de cada uno de los 12 niveles: `cefr` en `src/data/method.ts`
- [ ] Contenido o temas de cada nivel: `method.levelContent` en `src/i18n/es.ts` y `en.ts`

## Modalidades — `modalities.items.*.details` en `src/i18n/es.ts` y `en.ts`; fotos en `src/data/modalities.ts`
- [ ] Sede, horarios y cupo por grupo (presencial). El seed del sistema dice 20 como máximo, pero no está confirmado
- [ ] Plataforma, horarios y requisitos (online)
- [ ] Foto del aula y foto de una clase online

## Lo que incluye — `endorsements.items` en `src/i18n/es.ts` y `en.ts`
- [ ] Perfil de los docentes
- [ ] Certificado o diploma al terminar

## Valores — `src/data/pricing.ts` (las etiquetas están en i18n)
- [ ] Matrícula, valor por nivel, formas de pago y promociones

## Preguntas frecuentes — `faq.items` en `src/i18n/es.ts` y `en.ts`
- [ ] Precios, horarios, certificados y prueba de ubicación. Al responderlas entran solas al JSON-LD `FAQPage` y a `llms.txt`

## Testimonios — `src/data/testimonials.ts`
- [ ] Testimonios reales con permiso: nombre, rol y foto opcional. Mientras la lista esté vacía, la sección no se publica

## Backend (repo `ecu593`, fuera de este proyecto)
- [ ] **CORS.** `backend/src/main.ts` solo permite `FRONTEND_URL` como origen, así que el formulario de la landing será bloqueado desde su dominio. Hay que permitir también el dominio de la landing, por ejemplo `origin: [process.env.FRONTEND_URL, process.env.LANDING_URL]`
- [ ] (Opcional) Endpoint público de idiomas/cursos para enviar `interestedLanguageId`. Hoy el programa y la modalidad viajan en `notes`
