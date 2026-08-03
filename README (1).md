# The Constitutional Role of Municipalities in the Governance of Social Rights

Scrollytelling interactivo de la tesis doctoral de Silvia Talavera Lodos (Scuola Superiore Sant'Anna, Pisa).

## Cómo funciona

- Layout de dos columnas: narrativa a la izquierda (40%), gráfico sticky a la derecha (60%).
- Cada bloque de texto (`.beat`) activa, vía `IntersectionObserver`, el estado del gráfico correspondiente (barras, ejes, líneas divergentes, contadores).
- Sin dependencias externas: HTML + CSS + JS puro, un solo archivo (`index.html`).
- Todo el contenido y las cifras provienen del PDF de la tesis; la única referencia externa es la media UE de vivienda pública (~9,3%, Housing Europe/OECD), marcada explícitamente como tal en el texto.

## Publicar en GitHub Pages

1. Subir `index.html` a la raíz del repositorio (rama `main`).
2. Settings → Pages → Deploy from a branch → `main` / `/ (root)` → Save.
3. Se publica en `stalaveralodos-ux.github.io/thesis-scrollytelling`.

## Estructura de contenido

Ver los documentos `thesis-scrollytelling-content-v2.docx` y `thesis-scrollytelling-visual-guide.docx` para el guion narrativo completo, los datos por escena y la guía visual (paleta, tipografía, sistema de animación).
