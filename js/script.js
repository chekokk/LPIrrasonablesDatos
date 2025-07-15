// Manejo del menú móvil
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el input de teléfono
    const phoneInputField = document.querySelector("#telefono");
    const phoneInput = window.intlTelInput(phoneInputField, {
        preferredCountries: ["mx"],
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js",
        // Desactivar la validación en tiempo real
        validationScript: false
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
        console.log('Formulario enviado');

        if (!validateForm()) {
            console.log('Validación fallida');
            return false;
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
            // Enviar datos al backend remoto (reemplaza con tu URL de backend)
            const response = await fetch('https://TU-BACKEND-DOMINIO/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                console.log('Respuesta exitosa del servidor');
                // Redirigir a la página de confirmación estática
                window.location.href = './confirmacion.html';
            } else {
                throw new Error('Error en el servidor');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Ha ocurrido un error. Por favor, intente nuevamente.');
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

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle del menú móvil
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Scroll suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Inicialización del input de teléfono (duplicado eliminado)
