# Prompts Nanobanana — Dérej Simjá (primer lote)

> **Nota:** el archivo original de prompts de sesiones previas (Mesharét, Oz) no está trackeado en el repositorio — vivía en un directorio temporal de sesión. Este archivo empieza limpio, cubriendo solo las 5 actividades nuevas de Dérej Simjá (ver `MCJ_Arquitectura_Maestra.md` §5.2).

## Estilo heredado (verificado contra imágenes ya publicadas)

Se revisaron `OZ-PEDRO.jpg`, `OZ-ZAQUEO.jpg` y `MESHARET-HOSPITALIDAD.jpg` para mantener consistencia visual en todo el sitio:

- **Fotografía simbólica / still-life o de paisaje** — nunca ilustración de personas ni rostros (evita representar a Jesús o a niños reales).
- **Objetos y entorno narran el pasaje** — una barca con redes en vez de "Pedro pescando"; una tienda con pan y jarra en vez de "Abraham sirviendo".
- Luz dorada/cinematográfica (amanecer o atardecer), fotorrealista, profundidad de campo suave.
- Composición panorámica ancha, sin texto ni logos incrustados.
- **Ajuste para Simjá (infantil):** paleta más luminosa y cálida, sin elementos de Pasión (clavos, corona de espinas, cruces) que sí aparecen en las versiones de Oz para jóvenes — el mismo pasaje, tratado con más ternura y menos peso dramático.

**Especificaciones técnicas comunes a los 5:**
- Aspect ratio: **1200×462 px** (~2.6:1, panorámico) — para encajar en `.detalle-image` sin recorte adicional.
- Negative prompt sugerido: `no people, no faces, no text, no watermark, no logo, not dark or somber, no blood, no crown of thorns, no nails`
- Formato de archivo destino: `SIMJA-[NOMBRE].jpg`, importado en `src/data/retreats.js` reemplazando `image: null` en la entrada correspondiente.

---

## 1. SIMJA-BARCADEPEDRO — La Barca de Pedro

**Archivo destino:** `src/assets/images/SIMJA-BARCADEPEDRO.jpg`

**Prompt:**
> A small wooden fishing boat resting at the shore of a calm lake at sunrise, an old fishing net spilling out over the side of the boat, overflowing with dozens of small silvery fish caught in its ropes, warm golden morning light reflecting off still water, soft mist rising gently from the lake surface, shallow depth of field, cinematic photorealistic style, wide panoramic composition, joyful and abundant mood — bright and hopeful, not somber. No people, no text, no logos, no religious symbols of the Passion.

**Notas de composición:** ángulo bajo, cerca del agua, luz de contraluz suave (golden hour), sensación de abundancia (red llena, no vacía) — es la imagen inversa de "no pescar nada": el momento en que la red se llena.

---

## 2. SIMJA-ARCADENOE — El Arca de Noé: Refugio Seguro

**Archivo destino:** `src/assets/images/SIMJA-ARCADENOE.jpg`

**Prompt:**
> A weathered wooden ark resting on a grassy hillside just after the rain has stopped, a vivid rainbow arching across a clearing pastel-blue sky in the background, a single white dove with a small olive branch in its beak flying toward the ark, soft golden late-afternoon light, gentle pastel color palette (warm creams, soft greens, sky blues), tender storybook-like photorealism appropriate for young children, wide panoramic composition. No people, no text, no logos.

**Notas de composición:** paleta más pastel que el resto del set (público kínder), foco en el arcoíris como elemento central de la promesa cumplida — evitar cualquier sugerencia de tormenta violenta o juicio.

---

## 3. SIMJA-BUENPASTOR — El Buen Pastor y la Ovejita Perdida

**Archivo destino:** `src/assets/images/SIMJA-BUENPASTOR.jpg`

**Prompt:**
> A rustic wooden shepherd's crook leaning against a low moss-covered stone wall in a green pasture at dusk, a small tuft of white wool caught gently on a nearby thorn bush suggesting a lamb once lost and now found, a small bronze bell resting in the grass beside the crook, warm amber sunset light, soft bokeh background of rolling hills, tender and hopeful mood, cinematic photorealistic style, wide panoramic composition. No people, no text, no logos.

**Notas de composición:** el "tuft of wool en el arbusto de espinas" es la pista visual de que la oveja ya fue encontrada — refuerza el mensaje "nunca deja de buscar" sin mostrar al personaje. Usable para ambos cortes (Kínder/Primaria).

---

## 4. SIMJA-CINCOPANES — Los Cinco Panes y Dos Peces

**Archivo destino:** `src/assets/images/SIMJA-CINCOPANES.jpg`

**Prompt:**
> A rustic woven wicker basket overflowing with fresh round loaves of bread and two small fish resting on a simple woolen cloth, placed on green grass in warm late-afternoon sunlight, soft bokeh background of a sunlit grassy hillside, generous and abundant framing with the basket slightly low and close to camera, photorealistic, warm golden tones, wide panoramic composition. No people, no text, no logos.

**Notas de composición:** la canasta debe verse "más llena de lo que cabría" — refuerza visualmente "lo poco alcanza para todos".

---

## 5. SIMJA-ZAQUEO — Zaqueo se Sube al Árbol

**Archivo destino:** `src/assets/images/SIMJA-ZAQUEO.jpg`

**Prompt:**
> A child's-eye-view looking up through the low, climbable branches of a sycamore-fig tree, warm dappled midday sunlight filtering brightly through the leaves, a small blank wooden leaf-shaped tag hanging from a low branch by a string (no text on it), a sandy path visible below between the exposed roots, bright and curious mood, photorealistic, wide panoramic composition.

**Notas de composición — diferenciar de `OZ-ZAQUEO.jpg`:** la versión de Oz usa dosel oscuro, niebla y luz rasante de atardecer (tono más introspectivo, para jóvenes). Esta versión de Simjá debe ser **luz de mediodía brillante, encuadre más bajo y cercano (altura de un niño), sin niebla** — mismo árbol, ánimo completamente distinto: curiosidad infantil en vez de contemplación juvenil.

---

## Checklist antes de generar

- [ ] Verificar que ninguna imagen incluya rostros humanos (ni de adultos ni de niños) — regla implícita observada en todo el set existente.
- [ ] Confirmar que ninguna imagen de Simjá reutilice elementos de Pasión (cruz, corona de espinas, clavos) que sí aparecen en el set de Oz.
- [ ] Recortar/exportar a 1200×462 px antes de guardar en `src/assets/images/`.
- [ ] Una vez generadas, actualizar `src/data/retreats.js`: agregar el `import` correspondiente y reemplazar `image: null` por la variable importada en cada una de las 5 entradas `SIMJA-*`.
