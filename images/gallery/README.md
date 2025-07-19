# 📸 Carpeta de Imágenes de la Galería

## 📋 Instrucciones

Esta carpeta contiene las imágenes que se muestran en el carrusel de la galería.

## 🖼️ Imágenes Actuales

El carrusel está configurado para mostrar 6 imágenes:

1. `image1.jpg` - Proyecto Innovador
2. `image2.jpg` - Equipo Especializado  
3. `image3.jpg` - Resultados Exitosos
4. `image4.jpg` - Tecnología Avanzada
5. `image5.jpg` - Colaboración Empresarial
6. `image6.jpg` - Innovación Continua

## 📏 Especificaciones Técnicas

### Tamaño Recomendado
- **Ancho**: 1200 píxeles
- **Alto**: 800 píxeles
- **Relación de aspecto**: 3:2
- **Formato**: JPG, PNG o WebP
- **Peso máximo**: 500KB por imagen

### Nombres de Archivo
- Usa nombres descriptivos y en minúsculas
- Evita espacios (usa guiones: `proyecto-web.jpg`)
- Incluye extensión correcta

## 🔄 Cómo Reemplazar Imágenes

### Opción 1: Reemplazo Directo
1. Mantén el mismo nombre de archivo
2. Reemplaza la imagen existente
3. Asegúrate de que tenga las mismas dimensiones

### Opción 2: Nuevo Nombre
1. Sube tu nueva imagen
2. Actualiza la ruta en `index.html`
3. Cambia el atributo `src` del elemento `<img>`

## 📝 Ejemplo de Estructura

```
images/gallery/
├── image1.jpg          # Proyecto Innovador
├── image2.jpg          # Equipo Especializado
├── image3.jpg          # Resultados Exitosos
├── image4.jpg          # Tecnología Avanzada
├── image5.jpg          # Colaboración Empresarial
├── image6.jpg          # Innovación Continua
└── README.md           # Este archivo
```

## 🎯 Contenido Sugerido

### Tipos de Imágenes Recomendadas:
- **Proyectos destacados** de la empresa
- **Equipo de trabajo** en acción
- **Eventos y presentaciones**
- **Tecnología y herramientas** utilizadas
- **Resultados y logros** visuales
- **Colaboraciones** con clientes

### Evitar:
- Imágenes genéricas de stock
- Contenido no relacionado con el negocio
- Imágenes de baja calidad
- Contenido que no represente la empresa

## 🚀 Optimización

### Antes de Subir:
1. **Comprimir** la imagen (usar herramientas como TinyPNG)
2. **Redimensionar** si es necesario
3. **Verificar** que se vea bien en diferentes dispositivos
4. **Probar** la carga en el sitio web

### Herramientas Recomendadas:
- **Compresión**: TinyPNG, ImageOptim
- **Redimensionado**: Photoshop, GIMP, Canva
- **Optimización**: Squoosh.app

## 🔧 Configuración en HTML

Cada imagen en el carrusel tiene esta estructura:

```html
<div class="carousel-slide">
    <div class="image-wrapper">
        <img src="images/gallery/tu-imagen.jpg" alt="Descripción" loading="lazy">
        <div class="image-overlay">
            <h3>Título de la Imagen</h3>
            <p>Descripción de la imagen</p>
        </div>
    </div>
</div>
```

## 📱 Responsive

Las imágenes se adaptan automáticamente a:
- **Desktop**: 1000px de ancho máximo
- **Tablet**: 768px y menor
- **Mobile**: 480px y menor

## ⚠️ Notas Importantes

1. **Backup**: Siempre haz una copia de seguridad antes de cambiar imágenes
2. **Pruebas**: Verifica que el carrusel funcione después de los cambios
3. **Consistencia**: Mantén un estilo visual coherente entre todas las imágenes
4. **Accesibilidad**: Usa textos alternativos descriptivos

---

**¿Necesitas ayuda?** Consulta el archivo `GALERIA_INSTRUCCIONES.md` en la raíz del proyecto para instrucciones más detalladas. 