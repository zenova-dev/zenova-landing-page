# Imágenes - Zenova Landing Page

## Open Graph Image (og-image.jpg)

Actualmente hay un **placeholder SVG** en `og-image-placeholder.svg` y `og-image.jpg`.

### Cómo crear la imagen Open Graph definitiva:

1. **Dimensiones requeridas**: 1200x630 píxeles
2. **Formato**: JPG o PNG optimizado (< 300KB)
3. **Contenido sugerido**:
   - Logo de Zenova
   - Texto: "Zenova Tech - Innovación Digital a tu Alcance"
   - Colores brand: púrpura (#7c3aed) y grises
   - Fondo con gradiente similar al sitio

### Herramientas recomendadas:
- **Canva**: https://www.canva.com/ (template "Facebook Post" 1200x630)
- **Figma**: https://www.figma.com/
- **Photoshop/GIMP**: Diseño profesional

### Testing:
Una vez creada la imagen, verificá cómo se ve en:
- **Facebook**: https://developers.facebook.com/tools/debug/
- **Twitter**: https://cards-dev.twitter.com/validator
- **LinkedIn**: Post Inspector

### Reemplazo:
```bash
# Reemplazar la imagen placeholder
cp tu-imagen-nueva.jpg /public/images/og-image.jpg
```

La imagen se usa automáticamente en shares de redes sociales gracias a la metadata en `app/layout.tsx`.
