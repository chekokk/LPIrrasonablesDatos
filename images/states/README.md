# 🏴 Banderas de Estados de México

## 📋 Descripción

Esta carpeta contiene las banderas de los estados de México que se muestran en el mapa interactivo.

## 🖼️ Banderas Requeridas

### Estados Actuales
- `aguascalientes-flag.png` - Bandera de Aguascalientes
- `cdmx-flag.png` - Bandera de la Ciudad de México

### Estados Futuros (Sugeridos)
- `jalisco-flag.png` - Bandera de Jalisco
- `nuevo-leon-flag.png` - Bandera de Nuevo León
- `veracruz-flag.png` - Bandera de Veracruz
- `yucatan-flag.png` - Bandera de Yucatán

## 📏 Especificaciones Técnicas

### Tamaño Recomendado
- **Ancho**: 120 píxeles
- **Alto**: 80 píxeles
- **Relación de aspecto**: 3:2
- **Formato**: PNG (con transparencia si es posible)
- **Peso máximo**: 50KB por imagen

### Nombres de Archivo
- Usar nombres en minúsculas
- Separar palabras con guiones
- Incluir sufijo `-flag`
- Ejemplo: `nuevo-leon-flag.png`

## 🎨 Características de las Banderas

### Aguascalientes
- **Colores principales**: Rojo, blanco, azul
- **Elementos**: Escudo estatal en el centro
- **Historia**: Adoptada oficialmente en 1991

### Ciudad de México
- **Colores principales**: Rojo, blanco, azul
- **Elementos**: Escudo de la ciudad
- **Historia**: Basada en el escudo de armas de la ciudad

## 🔄 Cómo Agregar Nuevas Banderas

### Paso 1: Obtener la Bandera
1. Buscar la bandera oficial del estado
2. Descargar en alta resolución
3. Verificar que sea la versión oficial y actualizada

### Paso 2: Editar la Imagen
1. **Redimensionar** a 120x80 píxeles
2. **Optimizar** para web (comprimir)
3. **Guardar** como PNG
4. **Verificar** que se vea bien en el panel

### Paso 3: Nombrar Correctamente
- Usar el formato: `nombre-estado-flag.png`
- Ejemplo: `jalisco-flag.png`

### Paso 4: Probar en el Sitio
1. Colocar la imagen en esta carpeta
2. Verificar que cargue correctamente
3. Comprobar que se vea bien en el panel

## 🛠️ Herramientas Recomendadas

### Para Edición de Imágenes
- **Photoshop**: Edición profesional
- **GIMP**: Alternativa gratuita
- **Canva**: Editor online fácil de usar
- **Pixlr**: Editor online avanzado

### Para Optimización
- **TinyPNG**: Compresión automática
- **ImageOptim**: Optimización avanzada
- **Squoosh.app**: Herramienta de Google

## 📝 Información de Estados

### Datos para Agregar Nuevos Estados

Cuando agregues un nuevo estado, necesitarás esta información:

```javascript
const estadoData = {
    name: "Nombre del Estado",
    motto: "Lema oficial del estado",
    capital: "Nombre de la capital",
    population: "X.XM", // Población en millones
    area: "X,XXX", // Área en km²
    growth: "X.X%", // Tasa de crecimiento
    highlights: [
        {
            icon: "fas fa-icon",
            title: "Destacado 1",
            description: "Descripción del destacado"
        }
    ],
    presence: [
        {
            icon: "fas fa-building",
            title: "Tipo de Presencia",
            description: "Descripción de la presencia"
        }
    ]
};
```

## 🎯 Estados Prioritarios para Agregar

### Por Relevancia Económica
1. **Jalisco** - Hub tecnológico y turístico
2. **Nuevo León** - Centro industrial importante
3. **Baja California** - Frontera y tecnología
4. **Querétaro** - Industria automotriz

### Por Relevancia Turística
1. **Quintana Roo** - Turismo de playa
2. **Oaxaca** - Cultura y gastronomía
3. **Chiapas** - Naturaleza y arqueología
4. **Guanajuato** - Turismo cultural

## ⚠️ Consideraciones Importantes

### Derechos de Autor
- Usar solo banderas oficiales
- Verificar que no haya restricciones de uso
- Dar crédito si es necesario

### Calidad de Imagen
- Evitar imágenes pixeladas
- Mantener colores fieles al original
- Usar transparencia cuando sea apropiado

### Consistencia
- Mantener el mismo estilo entre todas las banderas
- Usar el mismo tamaño y formato
- Seguir la misma convención de nombres

## 🔍 Verificación de Calidad

### Checklist Antes de Usar
- [ ] Tamaño correcto (120x80 píxeles)
- [ ] Formato PNG
- [ ] Peso menor a 50KB
- [ ] Colores nítidos y claros
- [ ] Nombre de archivo correcto
- [ ] Se ve bien en el panel del mapa

### Pruebas Recomendadas
1. **Carga**: Verificar que la imagen cargue rápidamente
2. **Visualización**: Comprobar que se vea bien en diferentes dispositivos
3. **Funcionalidad**: Asegurar que el mapa interactivo funcione correctamente

## 📚 Recursos Útiles

### Fuentes de Banderas Oficiales
- Sitios web oficiales de los gobiernos estatales
- INEGI (Instituto Nacional de Estadística)
- Secretaría de Gobernación

### Referencias de Diseño
- Manual de identidad visual de cada estado
- Guías de uso de símbolos oficiales
- Estándares de diseño web

---

**Nota**: Mantener esta carpeta organizada y actualizada es crucial para el funcionamiento correcto del mapa interactivo. Cada nueva bandera debe seguir las especificaciones establecidas. 