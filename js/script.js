// Instancia global para intl-tel-input
let iti;

// Funcionalidad del mapa
const mapInteraction = {
    init() {
        const dataButtons = document.querySelectorAll('.data-btn');
        const infoPanel = document.getElementById('stateInfoPanel');
        const infoHeader = infoPanel.querySelector('.info-header');
        const closeBtn = document.querySelector('.close-btn');
        
        // Crear overlay si no existe
        let overlay = document.querySelector('.map-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'map-overlay';
            document.body.appendChild(overlay);
        }

        // Datos de los estados
        const stateData = {
            chihuahua: {
                title: 'Datos de Chihuahua',
                content: `
                    <div class="state-info-content">
                        <div class="state-header">
                            <img src="images/states/Chihuahua.png" alt="Bandera de Chihuahua" class="state-flag">
                            <h4>Sierra Tarahumara</h4>
                        </div>
                        <div class="state-description">
                            <p>Región caracterizada por su diversidad cultural y geográfica, donde las mujeres lideran iniciativas de energía sostenible.</p>
                        </div>
                        <div class="state-stats">
                            <div class="stat">
                                <span class="stat-number">150+</span>
                                <span class="stat-label">Familias Beneficiadas</span>
                            </div>
                            <div class="stat">
                                <span class="stat-number">3</span>
                                <span class="stat-label">Comunidades</span>
                            </div>
                        </div>
                    </div>
                `
            },
            naucalpan: {
                title: 'Datos de Naucalpan',
                content: `
                    <div class="state-info-content">
                        <div class="state-header">
                            <img src="images/states/CDMX.png" alt="Bandera de Naucalpan" class="state-flag">
                            <h4>Estado de México</h4>
                        </div>
                        <div class="state-description">
                            <p>Zona urbana con alto potencial para la implementación de soluciones energéticas innovadoras.</p>
                        </div>
                        <div class="state-stats">
                            <div class="stat">
                                <span class="stat-number">200+</span>
                                <span class="stat-label">Hogares Impactados</span>
                            </div>
                            <div class="stat">
                                <span class="stat-number">5</span>
                                <span class="stat-label">Proyectos Activos</span>
                            </div>
                        </div>
                    </div>
                `
            },
            oaxaca: {
                title: 'Datos de Oaxaca',
                content: `
                    <div class="state-info-content">
                        <div class="state-header">
                            <img src="images/states/Oaxaca.png" alt="Bandera de Oaxaca" class="state-flag">
                            <h4>Región Mixteca</h4>
                        </div>
                        <div class="state-description">
                            <p>Comunidades rurales donde las mujeres están transformando el acceso a la energía limpia.</p>
                        </div>
                        <div class="state-stats">
                            <div class="stat">
                                <span class="stat-number">120+</span>
                                <span class="stat-label">Familias Beneficiadas</span>
                            </div>
                            <div class="stat">
                                <span class="stat-number">4</span>
                                <span class="stat-label">Comunidades</span>
                            </div>
                        </div>
                    </div>
                `
            },
            yucatan: {
                title: 'Datos de Yucatán',
                content: `
                    <div class="state-info-content">
                        <div class="state-header">
                            <img src="images/states/Yucatan.png" alt="Bandera de Yucatán" class="state-flag">
                            <h4>Península de Yucatán</h4>
                        </div>
                        <div class="state-description">
                            <p>Región líder en iniciativas de energía solar y desarrollo sostenible liderado por mujeres.</p>
                        </div>
                        <div class="state-stats">
                            <div class="stat">
                                <span class="stat-number">180+</span>
                                <span class="stat-label">Hogares Impactados</span>
                            </div>
                            <div class="stat">
                                <span class="stat-number">6</span>
                                <span class="stat-label">Proyectos Activos</span>
                            </div>
                        </div>
                    </div>
                `
            }
        };

        // Manejar clics en los botones
        dataButtons.forEach(button => {
            button.addEventListener('click', () => {
                const state = button.getAttribute('data-state');
                const data = stateData[state];
                
                if (data) {
                    // Remover clases de color anteriores
                    infoHeader.className = 'info-header';
                    // Añadir la clase de color correspondiente
                    infoHeader.classList.add(state);
                    
                    document.getElementById('stateTitle').textContent = data.title;
                    document.querySelector('.info-content').innerHTML = data.content;
                    infoPanel.classList.add('active');
                    overlay.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        // Cerrar panel
        const closePanel = () => {
            infoPanel.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        };

        closeBtn.addEventListener('click', closePanel);
        overlay.addEventListener('click', closePanel);

        // Cerrar con tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && infoPanel.classList.contains('active')) {
                closePanel();
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Navegación y Header
    const header = document.querySelector('.main-header');
    const navButtons = document.querySelectorAll('.nav-btn');
    const menuToggle = document.querySelector('.menu-toggle');
    const navButtonsContainer = document.querySelector('.nav-buttons');

    // Manejar menú móvil
    menuToggle?.addEventListener('click', () => {
        navButtonsContainer.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Navegación suave
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                
                // Cerrar menú móvil si está abierto
                navButtonsContainer.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });

    // Actualizar navegación activa en scroll
    function updateActiveNav() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-btn');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const scrollPosition = window.scrollY;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const currentId = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    // Inicializar mapa
    if (typeof mapInteraction !== 'undefined') {
        mapInteraction.init();
    }

    // Inicializar teléfono
    const input = document.querySelector("#telefono");
    if (input) {
        iti = window.intlTelInput(input, {
            preferredCountries: ['mx'],
            separateDialCode: true,
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js",
        });

        const errorMsg = document.querySelector("#error-msg");
        const validMsg = document.querySelector("#valid-msg");

        const resetMessages = () => {
            input.classList.remove("error");
            errorMsg.classList.add("hide");
            validMsg.classList.add("hide");
        };

        input.addEventListener('blur', () => {
            resetMessages();
            if (input.value.trim()) {
                if (iti.isValidNumber()) {
                    validMsg.classList.remove("hide");
                } else {
                    // Fallback: validar conteo de dígitos (7-15)
                    const digits = input.value.replace(/\D/g, '');
                    if (digits.length >= 7 && digits.length <= 15) {
                        validMsg.classList.remove("hide");
                    } else {
                        input.classList.add("error");
                        errorMsg.classList.remove("hide");
                    }
                }
            }
        });

        input.addEventListener('change', resetMessages);
        input.addEventListener('keyup', resetMessages);

        // Formatear teléfono como 111-111-1111 y restringir solo dígitos
        input.addEventListener('input', () => {
            // Elimina todo lo que no sea dígito
            let digits = input.value.replace(/\D/g, '').slice(0, 10);

            // Construye la cadena con guiones: 3-3-4
            let formatted = digits;
            if (digits.length > 3 && digits.length <= 6) {
                formatted = `${digits.slice(0, 3)}-${digits.slice(3)}`;
            } else if (digits.length > 6) {
                formatted = `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
            }

            input.value = formatted;
        });
    }
});

// Testimonials Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.testimonials-carousel');
    const track = document.querySelector('.testimonials-track');
    const slides = track.children;
    const totalSlides = slides.length;
    let currentIndex = 0;
    let startX;
    let isDragging = false;
    let currentTranslate = 0;
    let prevTranslate = 0;

    const isMobile = window.innerWidth <= 768;

    // Función para obtener el número de tarjetas visibles según el ancho de la pantalla
    function getVisibleCards() {
        if (window.innerWidth >= 1024) {
            return 3; // Desktop grande: 3 tarjetas
        } else if (window.innerWidth >= 769) {
            return 2; // Desktop pequeño/tablet: 2 tarjetas
        }
        return 1; // Móvil: 1 tarjeta
    }

    // Función para obtener el máximo índice permitido
    function getMaxIndex() {
        const visibleCards = getVisibleCards();
        return Math.max(0, totalSlides - visibleCards);
    }

    function setSlidePosition(position) {
        track.style.transform = `translateX(${position}px)`;
    }

    // Obtiene el gap (espacio) entre tarjetas definido en CSS
    function getGap() {
        const style = window.getComputedStyle(track);
        // column-gap es preferido, gap es fallback
        return parseInt(style.columnGap || style.gap || '0');
    }

    // Obtiene el ancho completo de una tarjeta incluido el gap
    function getFullSlideWidth() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        return slideWidth + getGap();
    }

    function updateSlidePosition(index) {
        const visibleCards = getVisibleCards();
        currentIndex = Math.min(Math.max(index, 0), getMaxIndex());
        // Obtén el desplazamiento del slide objetivo
        const offset = slides[currentIndex].offsetLeft;
        currentTranslate = -offset;
        prevTranslate = currentTranslate;
        setSlidePosition(currentTranslate);
    }

    // Desktop Navigation
    if (!isMobile) {
        const prevButton = document.querySelector('.testimonial-nav.prev');
        const nextButton = document.querySelector('.testimonial-nav.next');
        const dotsContainer = document.querySelector('.testimonial-dots');
        let dots = [];

        // Crea los indicadores (dots) según el número de páginas visibles
        function createDots() {
            const pageCount = Math.ceil(totalSlides / getVisibleCards());
            dotsContainer.innerHTML = '';
            for (let i = 0; i < pageCount; i++) {
                const dot = document.createElement('button');
                dot.className = 'testimonial-dot';
                dot.addEventListener('click', () => {
                    updateSlidePosition(i * getVisibleCards());
                    updateDots();
                });
                dotsContainer.appendChild(dot);
            }
            dots = Array.from(dotsContainer.querySelectorAll('.testimonial-dot'));
        }

        // Actualiza estado de dots y visibilidad de botones
        function updateDots() {
            const pageIndex = Math.floor(currentIndex / getVisibleCards());
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === pageIndex);
            });

            if (prevButton && nextButton) {
                prevButton.style.opacity = currentIndex === 0 ? '0.5' : '1';
                nextButton.style.opacity = currentIndex >= getMaxIndex() ? '0.5' : '1';
            }
        }

        // Navegación con botones
        if (prevButton && nextButton) {
            prevButton.addEventListener('click', () => {
                if (currentIndex > 0) {
                    updateSlidePosition(currentIndex - getVisibleCards());
                    updateDots();
                }
            });

            nextButton.addEventListener('click', () => {
                if (currentIndex < getMaxIndex()) {
                    updateSlidePosition(currentIndex + getVisibleCards());
                    updateDots();
                }
            });
        }

        // Manejar cambios de tamaño de ventana
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                createDots();
                // Ajustar índice a la página adecuada y reposicionar
                currentIndex = Math.min(currentIndex, getMaxIndex());
                currentIndex = Math.floor(currentIndex / getVisibleCards()) * getVisibleCards();
                updateSlidePosition(currentIndex);
                updateDots();
            }, 100);
        });

        // Inicialización del carrusel de escritorio
        createDots();
        updateSlidePosition(0);
        updateDots();
    }

    // Salir si es móvil: el desplazamiento se maneja con scroll-snap CSS
    if (isMobile) {
        return;
    }

    // Mobile Touch Functionality (legacy - disabled)
    function getPositionX(event) {
        return event.touches[0].clientX;
    }

    track.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = getPositionX(e);
        track.style.transition = 'none';
    }, { passive: true });

    track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const currentX = getPositionX(e);
        const diff = currentX - startX;
        currentTranslate = prevTranslate + diff;
        setSlidePosition(currentTranslate);
    }, { passive: false });

    track.addEventListener('touchend', () => {
        isDragging = false;
        const slideWidth = slides[0].getBoundingClientRect().width + getGap();
        const moveBy = currentTranslate - prevTranslate;
        
        track.style.transition = 'transform 0.3s ease-out';
        
        if (Math.abs(moveBy) > slideWidth * 0.2) {
            if (moveBy < 0 && currentIndex < totalSlides - 1) {
                currentIndex++;
            } else if (moveBy > 0 && currentIndex > 0) {
                currentIndex--;
            }
        }
        
        currentTranslate = currentIndex * -slideWidth;
        prevTranslate = currentTranslate;
        setSlidePosition(currentTranslate);
    });

    carousel.addEventListener('touchmove', (e) => {
        if (isDragging) e.preventDefault();
    }, { passive: false });
});

// Funcionalidad del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.querySelector('.success-message');
    const loadingPdf = document.querySelector('.loading-pdf');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Validar el formulario
            const nombre = document.getElementById('nombre').value.trim();
            // Obtener teléfono con prefijo de país usando intl-tel-input
            let telefono = '';
            if (iti) {
                telefono = iti.getNumber(); // Formato internacional, e.g., +52556667788
            } else {
                telefono = document.getElementById('telefono').value.trim();
            }
            // Código de país (ISO2) en mayúsculas
            const countryCode = iti ? iti.getSelectedCountryData().iso2.toUpperCase() : 'MX';

            const email = document.getElementById('email').value.trim();

            // Resetear mensajes de error
            document.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');

            // Validaciones
            let isValid = true;

            if (!nombre) {
                document.getElementById('nombreError').textContent = 'Por favor ingresa tu nombre';
                isValid = false;
            }

            if (!telefono) {
                document.getElementById('telefonoError').textContent = 'Por favor ingresa tu teléfono';
                isValid = false;
            }

            if (!email) {
                document.getElementById('emailError').textContent = 'Por favor ingresa tu email';
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                document.getElementById('emailError').textContent = 'Por favor ingresa un email válido';
                isValid = false;
            }

            if (!isValid) return;

            try {
                // Deshabilitar el botón de envío
                const submitBtn = document.getElementById('submitBtn');
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

                // Enviar datos al servidor
                const response = await fetch('/api/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nombre,
                        telefono,
                        email,
                        countryCode
                    })
                });

                const data = await response.json();

                if (data.success) {
                    // Mostrar mensaje de éxito
                    contactForm.style.display = 'none';
                    successMessage.style.display = 'block';
                    loadingPdf.style.display = 'block';

                    // Descargar PDF
                    setTimeout(async () => {
                        try {
                            const pdfResponse = await fetch('/download-pdf');
                            if (pdfResponse.ok) {
                                const blob = await pdfResponse.blob();
                                const url = window.URL.createObjectURL(blob);
                                const a = document.createElement('a');
                                a.href = url;
                                a.download = 'confirmacion.pdf';
                                document.body.appendChild(a);
                                a.click();
                                window.URL.revokeObjectURL(url);
                                document.body.removeChild(a);
                            }
                            loadingPdf.style.display = 'none';
                        } catch (error) {
                            console.error('Error al descargar el PDF:', error);
                            loadingPdf.style.display = 'none';
                        }
                    }, 2000);

                } else {
                    throw new Error(data.error || 'Error al enviar el formulario');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Hubo un error al enviar el formulario. Por favor intenta de nuevo.');
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar';
            }
        });
    }
});


