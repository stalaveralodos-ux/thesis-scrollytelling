# The Constitutional Role of Municipalities in the Governance of Social Rights

Scrollytelling interactivo de la tesis doctoral de Silvia Talavera Lodos (Scuola Superiore Sant'Anna, Pisa).

## Concepto visual

Mesa de trabajo minimalista (estética japonesa moderna): fondo de madera oscura constante, con un "wash" de color por capítulo (Misty Sky para Turín, Rosewood para Barcelona, Sage Leaf para Atenas, Blush Petal para el capítulo bottom-up). Los gráficos de datos viven dentro de una "hoja de papel" flotante (el panel sticky), como si fuera un documento sobre el escritorio. Sello "STL" tipo hanko en la apertura y el cierre. Preguntas escritas con tipografía manuscrita (Caveat) que guían la narrativa de una escena a la siguiente.

## Cómo funciona

- Layout de dos columnas: narrativa a la izquierda (40%), panel de datos sticky a la derecha (60%).
- Barra de progreso de lectura fija arriba.
- Navegación de capítulos fija a la izquierda (pestañas de color, ocultas en mobile).
- Cada bloque de texto (`.beat`) activa, vía `IntersectionObserver`, el estado del gráfico correspondiente y el color de fondo del capítulo.
- Sección de compartir (LinkedIn/X/email) y formulario de contacto al final.
- Sin dependencias externas de JS — solo Google Fonts (Lora + Caveat) vía CDN.

## Fotos pendientes — espacios reservados en el código

El HTML tiene bloques `<div class="photo-slot">` marcando dónde van las fotos reales:

1. **Apertura**: flat-lay del escritorio (tesis, sello, objetos de trabajo)
2. **Turín**: vista aérea de la ciudad
3. **Barcelona**: vista aérea de la ciudad
4. **Atenas**: vista aérea de la ciudad

Para reemplazar un espacio reservado por una foto real: subí el archivo de imagen al repo (ej. `desk-flatlay.jpg`), y reemplazá el `<div class="photo-slot">...</div>` correspondiente por `<img src="desk-flatlay.jpg" alt="..." style="width:100%; border-radius:4px; margin:1rem 0;">`.

**Licencias**: si usás fotos de Unsplash/Pexels (uso libre) o Wikimedia Commons (verificar licencia CC específica y dar crédito exacto al fotógrafo), citá la fuente en un comentario HTML junto a la imagen o en una sección de créditos al final de la página.

## Publicar en GitHub Pages

1. Subir todos los archivos a la raíz del repositorio (rama `main`).
2. Settings → Pages → Deploy from a branch → `main` / `/ (root)` → Save.
3. Se publica en `stalaveralodos-ux.github.io/thesis-scrollytelling`.

## Estructura de contenido

Ver `thesis-scrollytelling-content-v2.docx` (guion narrativo y datos por escena) y `thesis-scrollytelling-visual-guide.docx` (guía visual y sistema de animación original) para el detalle completo.
