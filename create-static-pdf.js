const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Crear un nuevo documento PDF
const doc = new PDFDocument();

// Pipe el PDF a un archivo en la carpeta public
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

const output = fs.createWriteStream(path.join(publicDir, 'confirmacion.pdf'));
doc.pipe(output);

// Añadir contenido al PDF
doc.fontSize(30)
   .text('Prueba', {
       align: 'center',
       valign: 'center'
   });

// Finalizar el PDF
doc.end();
