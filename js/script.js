// Manejo del menú móvil
const BACKEND_URL = 'https://TU-BACKEND-DOMINIO'; // Reemplaza con tu URL de backend desplegado

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el input de teléfono
    const phoneInputField = document.querySelector("#telefono");
    const phoneInput = window.intlTelInput(phoneInputField, {
        preferredCountries: ["mx"],
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js",
        separateDialCode: true,
        initialCountry: "mx"
    });

    const form = document.getElementById('contactForm');
    const validMsg = document.getElementById("valid-msg");
    const errorMsg = document.getElementById("error-msg");

    // Validación del formulario
    function validateForm() {
        let isValid = true;
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;

        // Validar nombre
        if (nombre.trim().length < 2) {
            document.getElementById('nombreError').textContent = 'El nombre debe tener al menos 2 caracteres';
            document.getElementById('nombreError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('nombreError').style.display = 'none';
        }

        // Validar teléfono
        if (!phoneInput.isValidNumber()) {
            document.getElementById('telefonoError').textContent = 'Por favor, ingrese un número de teléfono válido';
            document.getElementById('telefonoError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('telefonoError').style.display = 'none';
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('emailError').textContent = 'Por favor, ingrese un email válido';
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('emailError').style.display = 'none';
        }

        return isValid;
    }

    // Manejar el envío del formulario
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const submitBtn = document.getElementById('submitBtn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

        const formData = {
            nombre: document.getElementById('nombre').value,
            telefono: phoneInput.getNumber(),
            email: document.getElementById('email').value
        };

        try {
            // Enviar datos al backend remoto
            const response = await fetch(`${BACKEND_URL}/api/submit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                // Redirigir a la página de confirmación estática
                window.location.href = './confirmacion.html';
            } else {
                throw new Error('Error del servidor');
            }
        } catch (err) {
            console.error('Error:', err);
            alert('Ha ocurrido un error. Por favor, intenta nuevamente.');
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar';
        }
    });

    // Actualizar la validación del teléfono en tiempo real
    phoneInputField.addEventListener('input', () => {
        if (phoneInput.isValidNumber()) {
            validMsg.classList.remove("hide");
            errorMsg.classList.add("hide");
        } else {
            validMsg.classList.add("hide");
            errorMsg.classList.remove("hide");
        }
    });

    // Toggle del menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('active')));

    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }));
});
