const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Configuración de Monday.com
const mondayApiUrl = 'https://api.monday.com/v2';
const mondayHeaders = {
    'Authorization': process.env.MONDAY_API_TOKEN,
    'Content-Type': 'application/json'
};

// Función para obtener información del tablero de Monday.com
async function getBoardColumns() {
    try {
        const query = `query {
            boards(ids: ${process.env.MONDAY_BOARD_ID}) {
                columns {
                    id
                    title
                    type
                }
            }
        }`;

        const response = await axios.post(mondayApiUrl, {
            query: query
        }, {
            headers: mondayHeaders
        });

        console.log('Columnas del tablero:', JSON.stringify(response.data, null, 2));
        return response.data;
    } catch (error) {
        console.error('Error obteniendo columnas:', error.response ? error.response.data : error);
        throw error;
    }
}

// Función para crear un elemento en Monday.com
async function createMondayItem(data) {
    try {
        // Preparar los valores de las columnas como un objeto JavaScript
        const columnValues = {
            phone_mksvcmq9: { phone: data.telefono, countryShortName: data.countryCode || "MX" },
            email_mksvakd4: { email: data.email, text: data.email }
        };

        // Convertir a JSON y escapar correctamente
        const columnValuesStr = JSON.stringify(columnValues).replace(/"/g, '\\"');

        const mutation = `mutation {
            create_item (
                board_id: ${process.env.MONDAY_BOARD_ID},
                item_name: "${data.nombre}",
                column_values: "${columnValuesStr}"
            ) {
                id
            }
        }`;

        const response = await axios.post(mondayApiUrl, {
            query: mutation
        }, {
            headers: mondayHeaders
        });

        console.log('Respuesta de Monday.com:', JSON.stringify(response.data, null, 2));
        return response.data;
    } catch (error) {
        console.error('Error creating Monday.com item:', error.response ? error.response.data : error);
        throw error;
    }
}

// Funciones de validación
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Acepta números, espacios, guiones y paréntesis, entre 7 y 15 dígitos
    const cleaned = phone.replace(/[^0-9]/g, '');
    return cleaned.length >= 7 && cleaned.length <= 15;
}

// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para la página de confirmación
app.get('/confirmacion', (req, res) => {
    res.sendFile(path.join(__dirname, 'confirmacion.html'));
});

// Configuración del transporter de correo
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sergio12die@gmail.com',
        pass: process.env.EMAIL_PASSWORD
    }
});

// Ruta para descargar el PDF estático
app.get('/download-pdf', (req, res) => {
    res.download(path.join(__dirname, 'public', 'confirmacion.pdf'), 'confirmacion.pdf', (err) => {
        if (err) {
            console.log('Error al descargar el PDF:', err);
            res.status(404).send('PDF no encontrado');
        }
    });
});

// Ruta para el envío del formulario
app.post('/api/submit', async (req, res) => {
    try {
        const { nombre, telefono, email, countryCode } = req.body;

        // Validaciones básicas
        if (!nombre || nombre.trim().length < 2) {
            return res.status(400).json({ success: false, error: 'Nombre inválido' });
        }
        if (!isValidPhone(telefono)) {
            return res.status(400).json({ success: false, error: 'Teléfono inválido' });
        }
        if (!isValidEmail(email)) {
            return res.status(400).json({ success: false, error: 'Email inválido' });
        }

        console.log('Recibido formulario:', { nombre, telefono, email });

        // Crear elemento en Monday.com
        console.log('Creando elemento en Monday.com...');
        await createMondayItem({ nombre, telefono, email, countryCode });
        console.log('Elemento creado en Monday.com exitosamente');

        // Enviar correo al usuario
        console.log('Enviando correo...');
        await transporter.sendMail({
            from: 'sergio12die@gmail.com',
            to: email,
            subject: 'Confirmación de registro',
            html: `
                <h1>¡Gracias por registrarte!</h1>
                <p>Hola ${nombre},</p>
                <p>Hemos recibido tu información correctamente:</p>
                <ul>
                    <li>Nombre: ${nombre}</li>
                    <li>Teléfono: ${telefono}</li>
                    <li>Email: ${email}</li>
                </ul>
                <p>Nos pondremos en contacto contigo pronto.</p>
                <br>
                <p>Saludos cordiales,</p>
                <p>El equipo de Tu Empresa</p>
            `
        });
        console.log('Correo enviado exitosamente');

        res.json({ success: true });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Error al procesar la solicitud',
            details: error.message 
        });
    }
});

// Ruta para probar la conexión con Monday.com
app.get('/api/test-monday', async (req, res) => {
    try {
        const columns = await getBoardColumns();
        res.json(columns);
    } catch (error) {
        res.status(500).json({ 
            error: 'Error al conectar con Monday.com',
            details: error.message 
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
