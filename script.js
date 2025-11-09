// ============================================
// CONFIGURACIÓN
// ============================================
const CONFIG = {
    whatsappNumber: '56968208696', // Número de WhatsApp de Chile (formato: 56 + 9 + número sin espacios)
    whatsappMessage: 'Hola, me interesa conocer más sobre los servicios de KaiZenith.',
    emailEmpresa: 'contacto.kaizenith@gmail.com',
    telefonoEmpresa: '+56 9 6820 8696'
};

// ============================================
// NAVEGACIÓN
// ============================================
const navbar = document.querySelector('.navbar');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

// Efecto de scroll en navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Toggle menú móvil
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
}

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active')) {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// ============================================
// WHATSAPP BUTTON
// ============================================
const whatsappBtn = document.getElementById('whatsappBtn');

function updateWhatsAppLink() {
    const message = encodeURIComponent(CONFIG.whatsappMessage);
    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${message}`;
    whatsappBtn.href = whatsappUrl;
}

updateWhatsAppLink();

// Actualizar información de contacto en el HTML
const telefonoElement = document.getElementById('telefonoEmpresa');
const emailElement = document.getElementById('emailEmpresa');
if (telefonoElement) telefonoElement.textContent = CONFIG.telefonoEmpresa;
if (emailElement) emailElement.textContent = CONFIG.emailEmpresa;

// ============================================
// GALERÍA DE TRABAJOS
// ============================================
const galleryGrid = document.getElementById('galleryGrid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Cargar imágenes desde la carpeta imagenes/
async function loadGalleryImages() {
    try {
        // Intentar cargar imágenes desde la carpeta imagenes/
        // Nota: En un entorno real, esto se haría desde un servidor
        // Por ahora, creamos placeholders que el usuario puede reemplazar
        
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
        const categories = ['construccion', 'soldadura', 'maquinaria', 'logistica'];
        
        // Esta función se puede mejorar para cargar imágenes dinámicamente
        // cuando se suban a la carpeta imagenes/
        console.log('Galería lista para recibir imágenes. Sube tus imágenes a la carpeta imagenes/');
    } catch (error) {
        console.error('Error cargando imágenes:', error);
    }
}

// Filtrado de galería
if (filterButtons.length > 0 && galleryGrid) {
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remover active de todos los botones
        filterButtons.forEach(b => b.classList.remove('active'));
        // Agregar active al botón clickeado
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        const items = galleryGrid.querySelectorAll('.gallery-item');
        
        items.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});
}

// Cargar imágenes reales si existen
function initializeGallery() {
    if (!galleryGrid) return;
    const items = galleryGrid.querySelectorAll('.gallery-item');
    
    // Mapeo de nombres de archivo según el título del proyecto
    const imageMap = {
        'Demolición de Bodega (2)': 'imagenes/demolicion-bodega-2.jpg',
        'Demolición de Bodega': 'imagenes/demolicion-bodega.jpg',
        'Construcción de Portón': 'imagenes/construccion-porton.jpg',
        'Protecciones Metálicas': 'imagenes/protecciones-metalicas.jpg',
        'Estructura Metálica para Cancha': 'imagenes/estructura-metalica-cancha.jpg',
        'Cortavista (Estructura Metálica)': 'imagenes/cortavista.jpg',
        'Regularización de Bodega': 'imagenes/regularizacion-bodega.jpg',
        'Soldaduras Especiales': 'imagenes/soldaduras-especiales.jpg',
        'Reparación de Soldaduras': 'imagenes/reparacion-soldaduras.jpg',
        'Instalación de Tina de Baño': 'imagenes/instalacion-tina-bano.jpg',
        'Reparación de Jardinera': 'imagenes/reparacion-jardinera.jpg',
        'Reparación de Fugas de Aceite': 'imagenes/reparacion-fugas-aceite.jpg',
        'Pintura (Interior y Exterior)': 'imagenes/pintura-interior-exterior.jpg'
    };
    
    items.forEach((item) => {
        const placeholder = item.querySelector('.gallery-image-placeholder');
        const titleElement = placeholder.querySelector('p');
        const title = titleElement ? titleElement.textContent.trim() : '';
        const img = document.createElement('img');
        
        // Obtener la ruta de la imagen desde el mapeo
        const imagePath = imageMap[title] || `imagenes/${title.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}.jpg`;
        img.src = imagePath;
        img.alt = title || 'Imagen del proyecto';
        img.style.display = 'none';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        
        img.onload = () => {
            placeholder.style.display = 'none';
            img.style.display = 'block';
            item.insertBefore(img, placeholder);
        };
        
        img.onerror = () => {
            // Si la imagen no existe, mantener el placeholder
            console.log(`Imagen ${imagePath} no encontrada. Usando placeholder.`);
        };
        
        // Click para abrir modal
        item.addEventListener('click', () => {
            if (img.complete && img.naturalHeight !== 0) {
                const overlayTitle = item.querySelector('.gallery-overlay h4')?.textContent || title;
                openModal(img.src, overlayTitle);
            }
        });
    });
}

// ============================================
// MODAL DE IMÁGENES
// ============================================
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const modalClose = document.getElementById('modalClose');

function openModal(src, caption) {
    modalImage.src = src;
    modalCaption.textContent = caption || '';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ============================================
// FORMULARIOS
// ============================================
const cotizacionForm = document.getElementById('cotizacionForm');
const contactoForm = document.getElementById('contactoForm');

// Formatear número de teléfono para WhatsApp
function formatPhoneForWhatsApp(phone) {
    return phone.replace(/\D/g, '');
}

// Enviar formulario de cotización
if (cotizacionForm) {
    cotizacionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(cotizacionForm);
        const data = Object.fromEntries(formData);
        
        // Crear mensaje para WhatsApp
        const telefono = formatPhoneForWhatsApp(data.telefono);
        const mensaje = `*Nueva Solicitud de Cotización - KaiZenith*\n\n` +
            `*Nombre:* ${data.nombre}\n` +
            `*Teléfono:* ${data.telefono}\n` +
            `*Email:* ${data.email}\n` +
            `*Tipo de Servicio:* ${data.tipoServicio}\n` +
            `*Ubicación:* ${data.ubicacion}\n` +
            `*Presupuesto Estimado:* ${data.presupuesto || 'No especificado'}\n` +
            `*Fecha Estimada de Inicio:* ${data.fechaInicio || 'No especificada'}\n\n` +
            `*Descripción del Proyecto:*\n${data.descripcion}\n\n` +
            (data.mensaje ? `*Mensaje Adicional:*\n${data.mensaje}` : '');
        
        const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
        
        // Abrir WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Mostrar mensaje de confirmación
        showNotification('¡Solicitud enviada! Te redirigimos a WhatsApp para completar el proceso.', 'success');
        
        // Limpiar formulario
        cotizacionForm.reset();
    });
}

// Enviar formulario de contacto
if (contactoForm) {
    contactoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactoForm);
        const data = Object.fromEntries(formData);
        
        // Crear mensaje para WhatsApp
        const mensaje = `*Nuevo Mensaje de Contacto - KaiZenith*\n\n` +
            `*Nombre:* ${data.nombre}\n` +
            `*Email:* ${data.email}\n` +
            (data.telefono ? `*Teléfono:* ${data.telefono}\n` : '') +
            `*Asunto:* ${data.asunto}\n\n` +
            `*Mensaje:*\n${data.mensaje}`;
        
        const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
        
        // Abrir WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Mostrar mensaje de confirmación
        showNotification('¡Mensaje enviado! Te redirigimos a WhatsApp para completar el proceso.', 'success');
        
        // Limpiar formulario
        contactoForm.reset();
    });
}

// ============================================
// NOTIFICACIONES
// ============================================
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos inline para la notificación
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#25D366' : '#D4AF37'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        max-width: 400px;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Remover después de 5 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Agregar animaciones CSS para notificaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// SMOOTH SCROLL
// ============================================
// Smooth scroll (solo para enlaces internos en la misma página)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;
        
        // Solo hacer smooth scroll si el target está en la misma página
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// ANIMACIONES AL SCROLL
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos para animación
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.servicio-card, .gallery-item, .form-container');
    animateElements.forEach(el => observer.observe(el));
});

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    loadGalleryImages();
    initializeGallery();
    
    console.log('KaiZenith Landing Page - Cargado correctamente');
    console.log('Recuerda actualizar CONFIG en script.js con tus datos reales');
});

// ============================================
// VALIDACIÓN DE FORMULARIOS
// ============================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Agregar validación en tiempo real
document.querySelectorAll('input[type="email"]').forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value && !validateEmail(input.value)) {
            input.style.borderColor = '#e74c3c';
            showNotification('Por favor, ingresa un email válido', 'error');
        } else {
            input.style.borderColor = '';
        }
    });
});

document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value && !validatePhone(input.value)) {
            input.style.borderColor = '#e74c3c';
            showNotification('Por favor, ingresa un teléfono válido', 'error');
        } else {
            input.style.borderColor = '';
        }
    });
});

