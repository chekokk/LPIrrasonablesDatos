// ===== EJEMPLOS DE USO DE LA GALERÍA DE FOTOGRAFÍAS =====

// Este archivo contiene ejemplos de cómo usar las funciones JavaScript
// para modificar dinámicamente la galería de fotografías.

// ===== EJEMPLO 1: AGREGAR UNA NUEVA IMAGEN =====
// Descomenta y ejecuta en la consola del navegador:

/*
addCarouselImage(
    'images/gallery/nuevo-proyecto.jpg',
    'Nuevo proyecto de desarrollo web',
    'Proyecto Web 2024',
    'Desarrollo de sitio web moderno y responsive para empresa tecnológica'
);
*/

// ===== EJEMPLO 2: AGREGAR MÚLTIPLES IMÁGENES =====
// Descomenta y ejecuta en la consola del navegador:

/*
const nuevasImagenes = [
    {
        src: 'images/gallery/evento-empresarial.jpg',
        alt: 'Evento empresarial anual',
        title: 'Evento Anual 2024',
        description: 'Presentación de resultados y proyecciones futuras'
    },
    {
        src: 'images/gallery/equipo-trabajo.jpg',
        alt: 'Equipo de trabajo colaborando',
        title: 'Trabajo en Equipo',
        description: 'Colaboración efectiva para lograr objetivos comunes'
    },
    {
        src: 'images/gallery/tecnologia-innovacion.jpg',
        alt: 'Tecnologías de innovación',
        title: 'Innovación Tecnológica',
        description: 'Implementación de soluciones de vanguardia'
    }
];

nuevasImagenes.forEach(imagen => {
    addCarouselImage(imagen.src, imagen.alt, imagen.title, imagen.description);
});
*/

// ===== EJEMPLO 3: REMOVER UNA IMAGEN =====
// Descomenta y ejecuta en la consola del navegador:

/*
// Remover la tercera imagen (índice 2)
removeCarouselImage(2);
*/

// ===== EJEMPLO 4: CAMBIAR CONFIGURACIÓN DEL CARRUSEL =====
// Descomenta y ejecuta en la consola del navegador:

/*
// Cambiar a reproducción más rápida
updateCarouselConfig({
    autoPlayInterval: 3000,  // 3 segundos
    transitionDuration: 300  // 300ms de transición
});

// Desactivar reproducción automática
updateCarouselConfig({
    autoPlay: false
});

// Activar reproducción automática con intervalo personalizado
updateCarouselConfig({
    autoPlay: true,
    autoPlayInterval: 7000  // 7 segundos
});
*/

// ===== EJEMPLO 5: FUNCIÓN PARA AGREGAR IMAGENES DESDE UN ARRAY =====
// Copia y pega esta función en la consola del navegador:

/*
function agregarImagenesDesdeArray(arrayImagenes) {
    arrayImagenes.forEach((imagen, index) => {
        setTimeout(() => {
            addCarouselImage(
                imagen.src,
                imagen.alt,
                imagen.title,
                imagen.description
            );
        }, index * 500); // Agregar cada imagen con 500ms de delay
    });
}

// Uso:
const imagenesParaAgregar = [
    {
        src: 'images/gallery/imagen1.jpg',
        alt: 'Descripción imagen 1',
        title: 'Título 1',
        description: 'Descripción 1'
    },
    {
        src: 'images/gallery/imagen2.jpg',
        alt: 'Descripción imagen 2',
        title: 'Título 2',
        description: 'Descripción 2'
    }
];

agregarImagenesDesdeArray(imagenesParaAgregar);
*/

// ===== EJEMPLO 6: FUNCIÓN PARA LIMPIAR Y REINICIAR LA GALERÍA =====
// Copia y pega esta función en la consola del navegador:

/*
function reiniciarGaleria() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    // Remover todas las imágenes excepto la primera
    for (let i = slides.length - 1; i > 0; i--) {
        removeCarouselImage(i);
    }
    
    // Ir a la primera imagen
    setTimeout(() => {
        const firstIndicator = document.querySelector('.indicator');
        if (firstIndicator) {
            firstIndicator.click();
        }
    }, 100);
}

// Uso:
// reiniciarGaleria();
*/

// ===== EJEMPLO 7: FUNCIÓN PARA OBTENER INFORMACIÓN DE LA GALERÍA =====
// Copia y pega esta función en la consola del navegador:

/*
function obtenerInfoGaleria() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const currentSlide = document.querySelector('.current-slide');
    const totalSlides = document.querySelector('.total-slides');
    
    const info = {
        totalImagenes: slides.length,
        totalIndicadores: indicators.length,
        imagenActual: currentSlide ? currentSlide.textContent : 'N/A',
        totalImagenesContador: totalSlides ? totalSlides.textContent : 'N/A',
        imagenes: []
    };
    
    slides.forEach((slide, index) => {
        const img = slide.querySelector('img');
        const title = slide.querySelector('h3');
        const description = slide.querySelector('p');
        
        info.imagenes.push({
            indice: index,
            src: img ? img.src : 'N/A',
            alt: img ? img.alt : 'N/A',
            titulo: title ? title.textContent : 'N/A',
            descripcion: description ? description.textContent : 'N/A'
        });
    });
    
    console.log('Información de la Galería:', info);
    return info;
}

// Uso:
// obtenerInfoGaleria();
*/

// ===== EJEMPLO 8: FUNCIÓN PARA VALIDAR IMÁGENES =====
// Copia y pega esta función en la consola del navegador:

/*
function validarImagenesGaleria() {
    const slides = document.querySelectorAll('.carousel-slide');
    const errores = [];
    const exitosos = [];
    
    slides.forEach((slide, index) => {
        const img = slide.querySelector('img');
        if (img) {
            // Verificar si la imagen carga correctamente
            const testImg = new Image();
            testImg.onload = function() {
                exitosos.push({
                    indice: index,
                    src: img.src,
                    dimensiones: `${this.width}x${this.height}`
                });
                console.log(`✅ Imagen ${index + 1} cargada correctamente: ${this.width}x${this.height}`);
            };
            testImg.onerror = function() {
                errores.push({
                    indice: index,
                    src: img.src,
                    error: 'No se pudo cargar la imagen'
                });
                console.error(`❌ Error en imagen ${index + 1}: ${img.src}`);
            };
            testImg.src = img.src;
        }
    });
    
    setTimeout(() => {
        console.log('=== RESUMEN DE VALIDACIÓN ===');
        console.log(`✅ Imágenes exitosas: ${exitosos.length}`);
        console.log(`❌ Imágenes con errores: ${errores.length}`);
        
        if (errores.length > 0) {
            console.log('Errores encontrados:', errores);
        }
    }, 2000);
}

// Uso:
// validarImagenesGaleria();
*/

// ===== NOTAS IMPORTANTES =====

/*
1. Todas las funciones están disponibles globalmente una vez que se carga la página
2. Las funciones se pueden ejecutar desde la consola del navegador (F12)
3. Asegúrate de que las rutas de las imágenes sean correctas
4. Las imágenes deben estar en la carpeta images/gallery/
5. Recomendado: usar imágenes de 1200x800 píxeles para mejor rendimiento
6. Las funciones mantienen la funcionalidad del carrusel intacta
7. Los cambios son dinámicos y no requieren recargar la página
*/

// ===== CONFIGURACIONES PREDEFINIDAS =====

// Configuración para presentación lenta
const configuracionLenta = {
    autoPlay: true,
    autoPlayInterval: 8000,    // 8 segundos
    transitionDuration: 800,   // 800ms
    enableTouch: true,
    enableKeyboard: true,
    loop: true
};

// Configuración para presentación rápida
const configuracionRapida = {
    autoPlay: true,
    autoPlayInterval: 2000,    // 2 segundos
    transitionDuration: 300,   // 300ms
    enableTouch: true,
    enableKeyboard: true,
    loop: true
};

// Configuración manual (sin reproducción automática)
const configuracionManual = {
    autoPlay: false,
    enableTouch: true,
    enableKeyboard: true,
    loop: true
};

/*
// Aplicar configuraciones:
// updateCarouselConfig(configuracionLenta);
// updateCarouselConfig(configuracionRapida);
// updateCarouselConfig(configuracionManual);
*/ 