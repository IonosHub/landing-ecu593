---
name: Ecu593 English
description: Landing de cursos de inglés construida como un pasaporte ecuatoriano; cada nivel aprobado es un sello.
colors:
  navy-950: "#0b1330"
  navy-900: "#14204a"
  navy-800: "#1c2b5e"
  navy-600: "#33478a"
  on-navy: "#eef2f8"
  on-navy-soft: "#b9c4e2"
  paper: "#e6f0ec"
  paper-deep: "#d3e4dd"
  paper-edge: "#b9d0c7"
  ink: "#13213f"
  ink-soft: "#3c4f6b"
  rule: "#9fb9b0"
  sun: "#f2c230"
  sky: "#2e6fd8"
  sky-text: "#1d55b5"
  flame: "#d8352a"
  flame-text: "#b8271e"
  violet: "#5b3fa0"
  whatsapp: "#1fa855"
typography:
  display:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 1.6rem + 4.4vw, 5.25rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2.4vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    fontVariation: "'wdth' 100"
  numeral:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(3.5rem, 2.5rem + 3vw, 5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "'tnum'"
    fontVariation: "'wdth' 125"
  body:
    fontFamily: "'Schibsted Grotesk Variable', 'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "'Schibsted Grotesk Variable', 'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "'Schibsted Grotesk Variable', 'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "0.1em"
  data:
    fontFamily: "'Martian Mono Variable', 'Martian Mono', ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.7
    letterSpacing: "0.12em"
rounded:
  button: "4px"
  inner: "6px"
  control: "6px"
  card: "10px"
  page: "14px"
  pill: "999px"
spacing:
  space-1: "0.25rem"
  space-2: "0.5rem"
  space-3: "0.75rem"
  space-4: "1rem"
  space-5: "1.5rem"
  space-6: "2rem"
  space-7: "3rem"
  space-8: "4.5rem"
  space-9: "clamp(4.5rem, 3rem + 6vw, 8rem)"
  gutter: "clamp(1.25rem, 0.8rem + 2vw, 2.5rem)"
  page-max: "76rem"
components:
  button-primary:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.navy-900}"
    typography: "{typography.title}"
    rounded: "{rounded.button}"
    padding: "0.8em 1.6em"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "#f6cd4a"
    textColor: "{colors.navy-900}"
  button-whatsapp:
    backgroundColor: "{colors.whatsapp}"
    textColor: "#ffffff"
    rounded: "{rounded.button}"
    padding: "0.8em 1.6em"
    height: "3.25rem"
  button-whatsapp-hover:
    backgroundColor: "#1b984c"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.navy-900}"
    rounded: "{rounded.button}"
    padding: "0.8em 1.6em"
    height: "3.25rem"
  field-ruled:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "0px"
    padding: "0.45em 0 0.35em"
    height: "2.75rem"
  document-band:
    backgroundColor: "{colors.navy-900}"
    textColor: "{colors.on-navy}"
    typography: "{typography.data}"
    padding: "0.75rem 1.5rem"
  document-sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.page}"
  level-page:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy-900}"
    rounded: "{rounded.card}"
    padding: "1.5rem"
  photo-window:
    backgroundColor: "{colors.paper-deep}"
    rounded: "{rounded.card}"
    padding: "11px"
  stamp-counter:
    backgroundColor: "{colors.navy-900}"
    textColor: "{colors.sun}"
    typography: "{typography.numeral}"
    rounded: "{rounded.page}"
    padding: "1.5rem"
  nav-link:
    textColor: "{colors.on-navy-soft}"
    rounded: "{rounded.control}"
    padding: "0.5rem 0.75rem"
  nav-link-hover:
    textColor: "{colors.on-navy}"
  pending-value:
    textColor: "{colors.flame-text}"
    rounded: "{rounded.button}"
    padding: "0.1em 0.5em"
---

# Design System: Ecu593 English

## Overview

**Creative North Star: "El Pasaporte de 12 Sellos"**

Todo el sistema es un documento de viaje ecuatoriano. La tapa es azul noche (navy) y aparece al inicio y al cierre, como las dos tapas de un pasaporte; entre ellas, cada sección es una hoja de papel de seguridad verde menta con guilloché tricolor. Los datos no se escriben como marketing, se registran como en un documento: etiqueta pequeña en versalitas encima, valor debajo, líneas MRZ en monoespaciada al pie. El sello de goma es la marca principal y el marcador de estado: un nivel aprobado, una modalidad de entrada, una solicitud recibida.

La densidad es de documento oficial: reglas finas, bandas de encabezado, campos rayados, pero con aire generoso entre secciones (`--space-9`). El movimiento es físico y breve: los sellos caen con un golpe ("thump") y las hojas giran desde su lomo como una página. Con `prefers-reduced-motion` todo queda impreso y estático; sin JavaScript también.

El sistema es honesto por construcción: lo que no se sabe todavía (precios, horarios, fotos, testimonios) se muestra como "Dato pendiente" en desarrollo y desaparece o cae a un texto de respaldo en producción. Nunca se inventa un dato para llenar un hueco.

**Key Characteristics:**
- Tapa navy al abrir y cerrar; papel de seguridad menta con guilloché en todo lo demás. Ninguna sección blanca.
- Sellos de goma rotados, con borde de tinta irregular y `mix-blend-mode: multiply`, como única ilustración y como estado.
- Disciplina de campo rotulado: etiqueta arriba (versalitas, 0.1em), valor abajo, regla de 1.5px.
- Botones como boletos troquelados con muescas y perforación.
- Monoespaciada (Martian Mono) solo para lo que una máquina leería: MRZ, bandas, códigos, contadores.
- Valores pendientes visibles y marcados, jamás inventados.

## Colors

Tres familias con roles fijos: la tapa navy, el papel menta y las tintas de la bandera (amarillo, azul, rojo) más un violeta de sello.

### Primary
- **Azul Tapa de Pasaporte** (`navy-900`): fondo de la tapa (hero, sección "incluye", contraportada), bandas de documento, contador de sellos, titulares sobre papel y texto de los botones amarillos. Es el color más presente después del papel.
- **Azul Noche Profundo** (`navy-950`): fondo del `html`, fondo de la barra de navegación (al 90%) y borde exterior de los degradados radiales de la tapa.
- **Azul Tapa Iluminado** (`navy-800`): centro del degradado radial de la tapa, encabezado del documento de datos, tinta de sello `navy`.
- **Azul Lomo** (`navy-600`): solo el pulgar de la barra de desplazamiento.

### Secondary
- **Amarillo Sol** (`sun`): el boleto primario ("Quiero inscribirme", "Inscríbete", "Enviar mi solicitud"), el número del contador de sellos, el eslogan sobre navy, los términos destacados sobre navy y la selección de texto. Es el único relleno de acción.

### Tertiary
- **Azul Cielo** (`sky`): anillo de foco global (3px), regla de foco de los campos, tinta de sello `sky`. Para texto sobre papel se usa **Azul Cielo Texto** (`sky-text`), que cumple contraste.
- **Rojo Llama** (`flame`): tinta de sello principal (593, "Recibida", "Aprobado"), borde de valor pendiente, campo inválido, cursor de texto. Para texto se usa **Rojo Llama Texto** (`flame-text`).
- **Violeta Sello** (`violet`): solo tinta de sello, para variar la serie de sellos.
- **Verde WhatsApp** (`whatsapp`): exclusivamente el canal WhatsApp (boleto y botón flotante).

### Neutral
- **Papel de Seguridad** (`paper`): fondo base del `body` y de toda hoja (secciones `.paper`, páginas del pasaporte, formulario, páginas de nivel).
- **Papel Profundo** (`paper-deep`): secciones alternas (método, solicitud), marco de las ventanas de foto, pista de la barra de desplazamiento.
- **Canto de Papel** (`paper-edge`): filete interior de 1px de toda hoja (`inset 0 0 0 1px`) y bordes entre secciones.
- **Tinta** (`ink`): texto de cuerpo y valores de campo.
- **Tinta Suave** (`ink-soft`): leads, etiquetas de dato, texto secundario, regla de los campos en reposo.
- **Regla Impresa** (`rule`): reglas divisorias de 1.5px, líneas de la textarea, líderes punteados del recibo.
- **Texto sobre Tapa** (`on-navy`) y **Texto Suave sobre Tapa** (`on-navy-soft`): equivalentes de tinta y tinta suave sobre navy.

### Named Rules
**The Two Covers Rule.** El navy es tapa: abre la página (hero) y la cierra (contraportada), y como mucho aparece una vez en medio como hoja especial. Todo lo demás es papel.

**The Flag Stripe Rule.** El amarillo, azul y rojo juntos solo aparecen en la proporción de la bandera (50% / 25% / 25%), como franja de 4px bajo las bandas de documento y como barra de progreso del contador.

**The Text-Grade Ink Rule.** `sky` y `flame` son tintas de sello y de estado; cuando forman texto sobre papel se usan sus versiones `sky-text` y `flame-text`.

## Typography

**Display Font:** Archivo Variable (eje de anchura `wdth`, con system-ui de respaldo)
**Body Font:** Schibsted Grotesk Variable (con system-ui)
**Label/Mono Font:** Martian Mono Variable (con ui-monospace)

**Character:** Archivo ensanchado y muy pesado da voz de sello y de tapa impresa; Schibsted Grotesk es la letra cálida y legible del cuerpo; Martian Mono es la máquina que lee el pasaporte. La anchura de Archivo es parte del sistema: 112% para titulares, 125% para numerales grandes, 100% para títulos y botones, 87% para encabezados de documento, 75% condensado dentro de los sellos.

### Hierarchy
- **Display** (800, `--step-4`, 1.02, ancho 112%): H1 del hero y H2 de la contraportada, con `max-width` de 11 a 14ch y `text-wrap: balance`.
- **Headline** (800, `--step-3`, 1.02, ancho 112%): H2 de sección y nombre de cada visa.
- **Title** (700, `--step-1` a `--step-2`, 1.1 a 1.3, ancho 100%): preguntas frecuentes, modalidades, términos destacados sobre navy.
- **Numeral** (800, 2.75rem a 5rem, 1, -0.04em, ancho 125%, cifras tabulares): número de nivel y contador "nn/12".
- **Body** (400, `--step-0` 1.0625rem, 1.6): texto corrido, con `text-wrap: pretty`, líneas de 34 a 44rem.
- **Lead** (400, `--step-1`, 1.5, `ink-soft`): el párrafo bajo cada titular.
- **Label** (600, 0.75rem, 0.1em, MAYÚSCULAS, `ink-soft`): la etiqueta de dato (`.data-label`) sobre cada valor.
- **Data** (Martian Mono 500, 0.6875rem a 0.78rem, 0.12em a 0.16em, MAYÚSCULAS): bandas de documento, MRZ, semanas del contador, montos del recibo, etiqueta "Dato pendiente".

### Named Rules
**The Label-Over-Value Rule.** Todo hecho se escribe como campo de documento: etiqueta en versalitas arriba, valor debajo con 2px de separación. Nunca un hecho suelto en negrita dentro de un párrafo.

**The Machine-Reads-Mono Rule.** Martian Mono solo para lo que leería una máquina (MRZ, códigos, bandas, cifras de control). Nunca para titulares ni cuerpo.

## Layout

Contenedor único de `min(100% - 2 * --gutter, --page-max)` con `--page-max` de 76rem. Las secciones respiran con `--space-9` arriba y abajo y alternan papel (`paper`) y papel profundo (`paper-deep`), separadas por un borde de 1.5px en `paper-edge`. El ritmo interno usa solo la escala `--space-1` a `--space-9`; los rellenos de hoja usan `clamp(1.25rem, 0.8rem + 2vw, 2.5rem)`.

Las composiciones son asimétricas en dos columnas (aprox. 0.8fr / 1.3fr) con una columna lateral fija (`position: sticky; top: 6rem`) cuando hay una serie que recorrer, como la ruta de 12 niveles. Las visas se alternan a izquierda y derecha con un leve giro (-0.8° a 0.6°); las modalidades se desfasan verticalmente. El hero es un pasaporte abierto de dos páginas sobre la tapa.

Puntos de quiebre observados: 1080px (12 niveles de 3 a 2 columnas), 960px (se ocultan los enlaces de navegación), 900px (el pasaporte y la solicitud pasan a una columna, con la página de venta primero), 820px, 760px, 680px (las visas dejan de girar), 560px y 520px (formulario a una columna, sellos más pequeños), 420px (se ocultan eslogan y nombre de banda).

## Elevation & Depth

Profundidad de papel físico: las hojas descansan sobre la mesa con una sombra corta de contacto más una sombra difusa desplazada hacia abajo, y siempre llevan un filete interior de 1px en `paper-edge`. El pliegue central del pasaporte se dibuja con sombras interiores hacia el lomo. No hay sombras duras desplazadas ni brillos.

### Shadow Vocabulary
- **Hoja** (`--shadow-page`: `0 1px 0 rgb(11 19 48 / 0.08), 0 18px 40px -18px rgb(11 19 48 / 0.45)`): visas, recibo, formulario, páginas de nivel; siempre combinada con `inset 0 0 0 1px var(--paper-edge)`.
- **Elevación** (`--shadow-lift`: `0 2px 4px rgb(11 19 48 / 0.12), 0 12px 24px -10px rgb(11 19 48 / 0.35)`): el contador de sellos sobre papel.
- **Lomo** (`inset ±28px 0 32px -26px rgb(11 19 48 / 0.45)`): el pliegue entre las dos páginas del pasaporte.

### Named Rules
**The Paper-On-Desk Rule.** Una hoja lleva sombra de hoja y filete de canto; nada flota sin haber sido apoyado. Los sellos no tienen sombra: son tinta, se funden con `multiply`.

## Shapes

Esquinas de documento, suaves y discretas: 14px para hojas y páginas (`--radius-page`), 10px para tarjetas de nivel y marcos de foto, 6px para la foto interior y los enlaces de navegación (`--radius-control`), 4px para los boletos. Los campos de formulario no tienen caja ni radio, solo una regla inferior. Las formas propias del mundo son el boleto con muescas semicirculares de 7px a cada lado, la ventana de foto troquelada (marco con guilloché y 11px de margen), el sello circular de triple anillo con texto en arco y el sello rectangular de doble marco. Las líneas discontinuas significan perforación o provisionalidad, nada más.

## Components

### Buttons
Boletos sellados: tactilidad de papel troquelado.
- **Shape:** rectángulo de 4px con muescas semicirculares (`--notch: 7px`) recortadas por máscara en ambos extremos, y una perforación discontinua de 1.5px al 35% de opacidad justo dentro del borde.
- **Primary:** relleno `sun`, texto `navy-900`, Archivo 750 a 1rem, alto mínimo 3.25rem, relleno 0.8em 1.6em, flecha a la derecha. Es la acción de inscripción.
- **WhatsApp:** relleno `whatsapp`, texto blanco, glifo de marca a la izquierda. Solo para abrir el chat.
- **Ghost:** transparente con trazo interior de 2px `navy-900`, perforación al 70%.
- **Hover / Focus / Active:** al pasar, sube 2px y se inclina -0.6° (como un boleto levantado) y la flecha avanza 3px; al pulsar, se comprime a 0.95 en 80ms (presión de sello). Foco: anillo global de 3px `sky` con 3px de separación. Deshabilitado: 60% y cursor de progreso.

### Inputs / Fields
Campos rayados de formulario oficial.
- **Style:** sin caja ni radio; solo regla inferior de 1.5px en `ink-soft`, fondo transparente sobre el papel, valor en 1.0625rem 500. La etiqueta (`.data-label`) va arriba. La textarea dibuja renglones de 2rem con `rule`. El select usa un chevrón SVG de trazo 1.75.
- **Hover:** la regla pasa a `navy-900`.
- **Focus:** la regla pasa a `sky` y se duplica con `box-shadow: 0 1.5px 0`.
- **Error:** igual en `flame` cuando `:user-invalid`. Mensajes de estado en `flame-text`; al éxito, el sello "Recibida" cae sobre la hoja.

### Cards / Containers
Hojas de documento, nunca tarjetas genéricas.
- **Corner Style:** 14px (hojas) o 10px (página de nivel).
- **Background:** `paper` con guilloché en banda (`240px 96px`) o con una roseta de guilloché parcialmente fuera del borde.
- **Shadow Strategy:** Hoja + filete de canto (ver Elevation & Depth).
- **Header:** las hojas importantes (visa, formulario) llevan banda `navy-900` en Martian Mono mayúsculas con franja tricolor de 4px.
- **Internal Padding:** `clamp(1.25rem, 0.8rem + 2vw, 2.5rem)`; páginas de nivel `--space-5`.

### Navigation
Barra fija de tapa: fondo `navy-950` al 90% con desenfoque de 10px, filete inferior tenue, 4.5rem de alto. Logo sobre placa blanca de 8px de radio, nombre en Archivo 800 y eslogan en versalitas `sun`. Enlaces en `on-navy-soft` 500 a 0.9375rem con radio de 6px; al pasar, `on-navy` y fondo blanco al 7%. Boleto primario compacto (2.75rem) a la derecha. Bajo 960px quedan solo marca y boleto.

### Stamp (signature)
El sello de goma: círculo de triple anillo (texto superior e inferior en arco, texto central de 30px o 50px si tiene hasta 3 caracteres) o rectángulo de doble marco. Archivo condensado al 75%, 800, mayúsculas. Tintas `flame`, `sky`, `violet` o `navy-800`, opacidad 0.88, `mix-blend-mode: multiply`, borde irregular por el filtro SVG `#ink-rough`, siempre rotado (entre -13° y 16°). Al entrar en pantalla cae con "thump": desde escala 1.7, +10° y desenfoque de 3px, rebota a 0.94 y asienta en 520ms con `--ease-thump`; se escalonan con `--stamp-delay`. Es decorativo (`aria-hidden`); el dato que marca siempre está también en texto.

### Level Path and Counter (signature)
Doce páginas de nivel (numeral grande "01" a "12", semanas, sello "Aprobado" que alterna forma, tinta y ángulo) y un contador navy fijo que cuenta los sellos ya caídos ("nn/12", semanas acumuladas) con una barra de progreso en franja tricolor. Sin movimiento, el contador muestra 12/12.

### MRZ
Dos líneas de 44 caracteres, rellenas con "<", en Martian Mono 500 con 0.16em de espaciado, separadas de la hoja por una regla superior de 1.5px. Decorativas (`aria-hidden`); siempre al pie del documento.

### Photo Window
Marco troquelado de 10px de radio y 11px de margen con roseta de guilloché sobre `paper-deep` y filete de canto; la foto interior con 6px de radio y un leve ajuste de saturación. Sin foto, el hueco muestra un rayado diagonal tenue, borde discontinuo en `rule` y la descripción de la toma que corresponde (solo en desarrollo).

### Pending Value
Marcador de dato desconocido: borde discontinuo de 1.5px en `flame`, fondo `flame` al 6%, texto `flame-text`, etiqueta "Dato pendiente" en Martian Mono 0.65rem mayúsculas. Visible solo en desarrollo o con `PUBLIC_SHOW_PENDING=true`; en producción muestra el texto de respaldo o nada, y las secciones que dependen solo de datos pendientes no se publican.

### Motion
Curvas `--ease-out` (`cubic-bezier(0.16, 1, 0.3, 1)`) y `--ease-thump` (`cubic-bezier(0.22, 1, 0.36, 1)`); duraciones `--dur-fast` 180ms (estados), `--dur-base` 420ms (barra de progreso), `--dur-slow` 900ms y 1100ms (giro de página). Las hojas marcadas con `data-reveal` entran girando desde su lomo (`rotateY(-24deg)` con recorte que se abre). Todo el movimiento depende de la clase `.motion-ok`, que solo se activa si no hay preferencia de movimiento reducido.

## Do's and Don'ts

### Do:
- **Do** poner cada sección nueva sobre `paper` o `paper-deep` con guilloché; reserva el navy para tapas.
- **Do** escribir los hechos como campos: `.data-label` arriba (0.75rem, 600, 0.1em, mayúsculas) y valor debajo.
- **Do** marcar estados y logros con un `Stamp` rotado en tinta `flame`, `sky`, `violet` o `navy`, con su dato repetido en texto accesible.
- **Do** usar el boleto `sun` para la acción de inscripción y el boleto `whatsapp` solo para el chat.
- **Do** apoyar cada hoja con `--shadow-page` más `inset 0 0 0 1px var(--paper-edge)`.
- **Do** declarar todo dato desconocido con `pending()` y mostrarlo con `Value`; listarlo en PENDIENTES.md.
- **Do** condicionar todo movimiento a `.motion-ok` y dejar el estado final impreso por defecto.

### Don't:
- **Don't** usar fondos blancos de sección; el blanco solo aparece como placa del logo y texto del boleto WhatsApp.
- **Don't** dibujar campos de formulario como cajas; son reglas inferiores.
- **Don't** usar Martian Mono para titulares o párrafos.
- **Don't** usar `sky` o `flame` como color de texto sobre papel; usa `sky-text` y `flame-text`.
- **Don't** inventar testimonios, precios, cifras o fotos para llenar un hueco; el hueco se muestra como pendiente.
- **Don't** usar la franja tricolor fuera de bandas de documento y barras de progreso, ni en proporciones distintas a 50/25/25.
- **Don't** añadir sombras a los sellos ni sombras duras desplazadas a las hojas.
