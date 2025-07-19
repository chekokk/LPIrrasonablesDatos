const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Crear un nuevo documento PDF
const doc = new PDFDocument({
    size: 'A4',
    margins: {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50
    }
});

// Pipe el PDF a un archivo
doc.pipe(fs.createWriteStream(path.join(__dirname, 'public', 'confirmacion.pdf')));

// Agregar logo
doc.image(path.join(__dirname, 'images', 'Logo.png'), {
    fit: [200, 100],
    align: 'center'
});

doc.moveDown(2);

// Título
doc.font('Helvetica-Bold')
   .fontSize(24)
   .text('Reporte Ellas Impactan', {
       align: 'center'
   });

doc.moveDown();

// Subtítulo
doc.font('Helvetica')
   .fontSize(16)
   .text('Mujeres Líderes en soluciones y cambios energéticos', {
       align: 'center'
   });

doc.moveDown(2);

// Contenido principal
doc.font('Helvetica')
   .fontSize(12)
   .text('El futuro no siempre empieza con innovación y tecnología, sino con la forma en que las mujeres deciden cuándo, cómo y para qué impactan.', {
       align: 'justify'
   });

doc.moveDown();

// Cita destacada
doc.font('Helvetica-Italic')
   .fontSize(14)
   .text('"La energía reconfigura la organización del tiempo, la seguridad, la autonomía práctica y los vínculos con otras mujeres."', {
       align: 'center'
   });

doc.moveDown(2);

// Sección de Metodología
doc.font('Helvetica-Bold')
   .fontSize(16)
   .text('Metodología', {
       align: 'left'
   });

doc.moveDown();

doc.font('Helvetica')
   .fontSize(12)
   .text('La investigación se basó en una metodología etnográfica comparativa, centrada en la observación participante, las conversaciones semiestructuradas en profundidad y el análisis relacional del entorno doméstico local.', {
       align: 'justify'
   });

doc.moveDown();

// Estadísticas
doc.font('Helvetica-Bold')
   .fontSize(14)
   .text('Datos Relevantes:', {
       align: 'left'
   });

doc.moveDown();

doc.font('Helvetica')
   .fontSize(12)
   .list([
       '1,040 horas de campo',
       '40 ejercicios antropológicos',
       'Entrevistas individuales de hasta 4 horas',
       '40+ conversaciones semiestructuradas',
       '4 regiones distintas del país'
   ], {
       bulletRadius: 2,
       textIndent: 20
   });

doc.moveDown(2);

// Pie de página
doc.fontSize(10)
   .text('© Copyright 2023 - ANDE et al. Aspen Institute', {
       align: 'center'
   });

// Finalizar el PDF
doc.end();
