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

// Efecto de scroll en navbar (se optimiza más abajo con throttle)

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

const GALLERY_FILES = [
    {
        "src": "imagenes/Construcción de protecciones /1000000556.jpg",
        "title": "Construcción de protecciones",
        "category": "construccion"
    },
    {
        "src": "imagenes/Construcción de protecciones /1000000565.jpg",
        "title": "Construcción de protecciones",
        "category": "construccion"
    },
    {
        "src": "imagenes/Construcción de protecciones /1000000567.jpg",
        "title": "Construcción de protecciones",
        "category": "construccion"
    },
    {
        "src": "imagenes/Construcción de protecciones /1000000569.jpg",
        "title": "Construcción de protecciones",
        "category": "construccion"
    },
    {
        "src": "imagenes/Construcción de reja con muros de hormigón y portón de corredera/1000000579.jpg",
        "title": "Construcción de reja con muros de hormigón y portón de corredera",
        "category": "construccion"
    },
    {
        "src": "imagenes/Construcción de reja con muros de hormigón y portón de corredera/1000000581.jpg",
        "title": "Construcción de reja con muros de hormigón y portón de corredera",
        "category": "construccion"
    },
    {
        "src": "imagenes/Construcción de reja con muros de hormigón y portón de corredera/1000000591.jpg",
        "title": "Construcción de reja con muros de hormigón y portón de corredera",
        "category": "construccion"
    },
    {
        "src": "imagenes/Construcción de reja con muros de hormigón y portón de corredera/1000000603.jpg",
        "title": "Construcción de reja con muros de hormigón y portón de corredera",
        "category": "construccion"
    },
    {
        "src": "imagenes/Construcción de reja con muros de hormigón y portón de corredera/1000000609.jpg",
        "title": "Construcción de reja con muros de hormigón y portón de corredera",
        "category": "construccion"
    },
    {
        "src": "imagenes/Construcción de reja con muros de hormigón y portón de corredera/1000000646.jpg",
        "title": "Construcción de reja con muros de hormigón y portón de corredera",
        "category": "construccion"
    },
    {
        "src": "imagenes/Construcción de reja con muros de hormigón y portón de corredera/1000000660.jpg",
        "title": "Construcción de reja con muros de hormigón y portón de corredera",
        "category": "construccion"
    },
    {
        "src": "imagenes/Construcción de reja con muros de hormigón y portón de corredera/1000000665.jpg",
        "title": "Construcción de reja con muros de hormigón y portón de corredera",
        "category": "construccion"
    },
    {
        "src": "imagenes/Construcción de reja con muros de hormigón y portón de corredera/1000000670.jpg",
        "title": "Construcción de reja con muros de hormigón y portón de corredera",
        "category": "construccion"
    },
    {
        "src": "imagenes/Cortavistas en estructura metálica y policarbonato/1000000376.jpg",
        "title": "Cortavistas en estructura metálica y policarbonato",
        "category": "construccion"
    },
    {
        "src": "imagenes/Cortavistas en estructura metálica y policarbonato/1000000378.jpg",
        "title": "Cortavistas en estructura metálica y policarbonato",
        "category": "construccion"
    },
    {
        "src": "imagenes/Cortavistas en estructura metálica y policarbonato/1000000380.jpg",
        "title": "Cortavistas en estructura metálica y policarbonato",
        "category": "construccion"
    },
    {
        "src": "imagenes/Cortavistas en estructura metálica y policarbonato/1000000382.jpg",
        "title": "Cortavistas en estructura metálica y policarbonato",
        "category": "construccion"
    },
    {
        "src": "imagenes/Cortavistas en estructura metálica y policarbonato/1000004670.jpg",
        "title": "Cortavistas en estructura metálica y policarbonato",
        "category": "construccion"
    },
    {
        "src": "imagenes/Cortavistas en estructura metálica y policarbonato/1000004673.jpg",
        "title": "Cortavistas en estructura metálica y policarbonato",
        "category": "construccion"
    },
    {
        "src": "imagenes/desarme de bodega/1000001606.jpg",
        "title": "desarme de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/desarme de bodega/1000001609.jpg",
        "title": "desarme de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/desarme de bodega/1000001633.jpg",
        "title": "desarme de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/desarme de bodega/1000001636.jpg",
        "title": "desarme de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/desarme de bodega/1000001639.jpg",
        "title": "desarme de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/desarme de bodega/1000001641.jpg",
        "title": "desarme de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/desarme de bodega/1000001643.jpg",
        "title": "desarme de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/desarme de bodega/1000001645.jpg",
        "title": "desarme de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/desarme de bodega/1000001647.jpg",
        "title": "desarme de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/desarme de bodega/1000001649.jpg",
        "title": "desarme de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/desarme de bodega/1000001655.jpg",
        "title": "desarme de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/desarme de bodega/1000001657.jpg",
        "title": "desarme de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/desarme de bodega/1000001659.jpg",
        "title": "desarme de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/desarme de bodega/1000001661.jpg",
        "title": "desarme de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/desarme de bodega/1000001667.jpg",
        "title": "desarme de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/desarme de bodega/1000001669.jpg",
        "title": "desarme de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/desarme de bodega/1000001671.jpg",
        "title": "desarme de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/desarme de bodega/1000001673.jpg",
        "title": "desarme de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/desarme de bodega/1000001679.jpg",
        "title": "desarme de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/desarme de bodega/1000001681.jpg",
        "title": "desarme de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/desarme de bodega/1000001683.jpg",
        "title": "desarme de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/desarme de bodega/1000001685.jpg",
        "title": "desarme de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/Escaleras/1000004676.jpg",
        "title": "Escaleras",
        "category": "construccion"
    },
    {
        "src": "imagenes/Escaleras/1000004679.jpg",
        "title": "Escaleras",
        "category": "construccion"
    },
    {
        "src": "imagenes/Escaleras/1000004682.jpg",
        "title": "Escaleras",
        "category": "construccion"
    },
    {
        "src": "imagenes/Escaleras/1000004685.jpg",
        "title": "Escaleras",
        "category": "construccion"
    },
    {
        "src": "imagenes/Escaleras/1000004688.jpg",
        "title": "Escaleras",
        "category": "construccion"
    },
    {
        "src": "imagenes/Escaleras/1000004691.jpg",
        "title": "Escaleras",
        "category": "construccion"
    },
    {
        "src": "imagenes/Escaleras/1000004694.jpg",
        "title": "Escaleras",
        "category": "construccion"
    },
    {
        "src": "imagenes/Escaleras/1000004697.jpg",
        "title": "Escaleras",
        "category": "construccion"
    },
    {
        "src": "imagenes/Escaleras/1000004700.jpg",
        "title": "Escaleras",
        "category": "construccion"
    },
    {
        "src": "imagenes/Fabricación de soporte para tablero de basquetbol /1000000301.jpg",
        "title": "Fabricación de soporte para tablero de basquetbol",
        "category": "construccion"
    },
    {
        "src": "imagenes/Fabricación de soporte para tablero de basquetbol /1000000339.jpg",
        "title": "Fabricación de soporte para tablero de basquetbol",
        "category": "construccion"
    },
    {
        "src": "imagenes/Fabricación de soporte para tablero de basquetbol /1000000345.jpg",
        "title": "Fabricación de soporte para tablero de basquetbol",
        "category": "construccion"
    },
    {
        "src": "imagenes/Fabricación de soporte para tablero de basquetbol /1000000348.jpg",
        "title": "Fabricación de soporte para tablero de basquetbol",
        "category": "construccion"
    },
    {
        "src": "imagenes/Fabricación de soporte para tablero de basquetbol /1000000354.jpg",
        "title": "Fabricación de soporte para tablero de basquetbol",
        "category": "construccion"
    },
    {
        "src": "imagenes/fotos varias/1000004739.jpg",
        "title": "fotos varias",
        "category": "logistica"
    },
    {
        "src": "imagenes/fotos varias/1000004743.jpg",
        "title": "fotos varias",
        "category": "logistica"
    },
    {
        "src": "imagenes/fotos varias/1000004747.jpg",
        "title": "fotos varias",
        "category": "logistica"
    },
    {
        "src": "imagenes/fotos varias/1000004751.jpg",
        "title": "fotos varias",
        "category": "logistica"
    },
    {
        "src": "imagenes/fotos varias/1000004755.jpg",
        "title": "fotos varias",
        "category": "logistica"
    },
    {
        "src": "imagenes/fotos varias/1000004759.jpg",
        "title": "fotos varias",
        "category": "logistica"
    },
    {
        "src": "imagenes/fotos varias/1000004763.jpg",
        "title": "fotos varias",
        "category": "logistica"
    },
    {
        "src": "imagenes/fotos varias/1000004767.jpg",
        "title": "fotos varias",
        "category": "logistica"
    },
    {
        "src": "imagenes/fotos varias/1000004771.jpg",
        "title": "fotos varias",
        "category": "logistica"
    },
    {
        "src": "imagenes/fotos varias/1000004775.jpg",
        "title": "fotos varias",
        "category": "logistica"
    },
    {
        "src": "imagenes/fotos varias/1000004779.jpg",
        "title": "fotos varias",
        "category": "logistica"
    },
    {
        "src": "imagenes/fotos varias/1000004783.jpg",
        "title": "fotos varias",
        "category": "logistica"
    },
    {
        "src": "imagenes/fotos varias/1000004787.jpg",
        "title": "fotos varias",
        "category": "logistica"
    },
    {
        "src": "imagenes/fotos varias/1000004789.jpg",
        "title": "fotos varias",
        "category": "logistica"
    },
    {
        "src": "imagenes/fotos varias/1000004791.jpg",
        "title": "fotos varias",
        "category": "logistica"
    },
    {
        "src": "imagenes/fotos varias/1000004793.jpg",
        "title": "fotos varias",
        "category": "logistica"
    },
    {
        "src": "imagenes/fotos varias/1000004795.jpg",
        "title": "fotos varias",
        "category": "logistica"
    },
    {
        "src": "imagenes/fotos varias/1000004797.jpg",
        "title": "fotos varias",
        "category": "logistica"
    },
    {
        "src": "imagenes/Pintura de casa exterior y cambio de canaletas /1000003636.jpg",
        "title": "Pintura de casa exterior y cambio de canaletas",
        "category": "construccion"
    },
    {
        "src": "imagenes/Pintura de casa exterior y cambio de canaletas /1000003639.jpg",
        "title": "Pintura de casa exterior y cambio de canaletas",
        "category": "construccion"
    },
    {
        "src": "imagenes/Pintura de casa exterior y cambio de canaletas /1000003642.jpg",
        "title": "Pintura de casa exterior y cambio de canaletas",
        "category": "construccion"
    },
    {
        "src": "imagenes/Pintura de casa exterior y cambio de canaletas /1000003645.jpg",
        "title": "Pintura de casa exterior y cambio de canaletas",
        "category": "construccion"
    },
    {
        "src": "imagenes/Pintura de casa exterior y cambio de canaletas /1000003648.jpg",
        "title": "Pintura de casa exterior y cambio de canaletas",
        "category": "construccion"
    },
    {
        "src": "imagenes/Pintura de casa exterior y cambio de canaletas /1000003652.jpg",
        "title": "Pintura de casa exterior y cambio de canaletas",
        "category": "construccion"
    },
    {
        "src": "imagenes/Pintura de casa exterior y cambio de canaletas /1000003655.jpg",
        "title": "Pintura de casa exterior y cambio de canaletas",
        "category": "construccion"
    },
    {
        "src": "imagenes/Pintura de casa exterior y cambio de canaletas /1000003658.jpg",
        "title": "Pintura de casa exterior y cambio de canaletas",
        "category": "construccion"
    },
    {
        "src": "imagenes/Pintura de casa exterior y cambio de canaletas /1000003661.jpg",
        "title": "Pintura de casa exterior y cambio de canaletas",
        "category": "construccion"
    },
    {
        "src": "imagenes/Radier/1000004627.jpg",
        "title": "Radier",
        "category": "construccion"
    },
    {
        "src": "imagenes/Radier/1000004632.jpg",
        "title": "Radier",
        "category": "construccion"
    },
    {
        "src": "imagenes/Radier/1000004635.jpg",
        "title": "Radier",
        "category": "construccion"
    },
    {
        "src": "imagenes/Radier/1000004638.jpg",
        "title": "Radier",
        "category": "construccion"
    },
    {
        "src": "imagenes/Radier/1000004640.jpg",
        "title": "Radier",
        "category": "construccion"
    },
    {
        "src": "imagenes/Radier/1000004649.jpg",
        "title": "Radier",
        "category": "construccion"
    },
    {
        "src": "imagenes/Radier/1000004652.jpg",
        "title": "Radier",
        "category": "construccion"
    },
    {
        "src": "imagenes/Radier/1000004661.jpg",
        "title": "Radier",
        "category": "construccion"
    },
    {
        "src": "imagenes/Radier/1000004664.jpg",
        "title": "Radier",
        "category": "construccion"
    },
    {
        "src": "imagenes/Radier/1000004667.jpg",
        "title": "Radier",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelacion de bodega/1000001446.jpg",
        "title": "Remodelacion de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelacion de bodega/1000001450.jpg",
        "title": "Remodelacion de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelacion de bodega/1000001454.jpg",
        "title": "Remodelacion de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelacion de bodega/1000001461.jpg",
        "title": "Remodelacion de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelacion de bodega/1000001465.jpg",
        "title": "Remodelacion de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelacion de bodega/1000001480.jpg",
        "title": "Remodelacion de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelacion de bodega/1000001486.jpg",
        "title": "Remodelacion de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelacion de bodega/1000001495.jpg",
        "title": "Remodelacion de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelacion de bodega/1000001507.jpg",
        "title": "Remodelacion de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelacion de bodega/1000001510.jpg",
        "title": "Remodelacion de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelacion de bodega/1000001522.jpg",
        "title": "Remodelacion de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelacion de bodega/1000001528.jpg",
        "title": "Remodelacion de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelacion de bodega/1000001531.jpg",
        "title": "Remodelacion de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelacion de bodega/1000001534.jpg",
        "title": "Remodelacion de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelacion de bodega/1000001540.jpg",
        "title": "Remodelacion de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelacion de bodega/1000001543.jpg",
        "title": "Remodelacion de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelacion de bodega/1000001546.jpg",
        "title": "Remodelacion de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelacion de bodega/1000001548.jpg",
        "title": "Remodelacion de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelacion de bodega/1000001550.jpg",
        "title": "Remodelacion de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelacion de bodega/1000001552.jpg",
        "title": "Remodelacion de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelacion de bodega/1000001554.jpg",
        "title": "Remodelacion de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelacion de bodega/1000001556.jpg",
        "title": "Remodelacion de bodega",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelación de oficinas con muebles a medida y piso Vinilico/1000003487.jpg",
        "title": "Remodelación de oficinas con muebles a medida y piso Vinilico",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelación de oficinas con muebles a medida y piso Vinilico/1000003490.jpg",
        "title": "Remodelación de oficinas con muebles a medida y piso Vinilico",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelación de oficinas con muebles a medida y piso Vinilico/1000003493.jpg",
        "title": "Remodelación de oficinas con muebles a medida y piso Vinilico",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelación de oficinas con muebles a medida y piso Vinilico/1000003730.jpg",
        "title": "Remodelación de oficinas con muebles a medida y piso Vinilico",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelación de oficinas con muebles a medida y piso Vinilico/1000003731.jpg",
        "title": "Remodelación de oficinas con muebles a medida y piso Vinilico",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelación de oficinas con muebles a medida y piso Vinilico/1000003732.jpg",
        "title": "Remodelación de oficinas con muebles a medida y piso Vinilico",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelación de oficinas con muebles a medida y piso Vinilico/1000003733.jpg",
        "title": "Remodelación de oficinas con muebles a medida y piso Vinilico",
        "category": "construccion"
    },
    {
        "src": "imagenes/Remodelación de oficinas con muebles a medida y piso Vinilico/1000003742.jpg",
        "title": "Remodelación de oficinas con muebles a medida y piso Vinilico",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de cilindro de maquina Caterpilla /1000000109.jpg",
        "title": "Reparación de cilindro de maquina Caterpilla",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de cilindro de maquina Caterpilla /1000000115.jpg",
        "title": "Reparación de cilindro de maquina Caterpilla",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de cilindro de maquina Caterpilla /1000000116.jpg",
        "title": "Reparación de cilindro de maquina Caterpilla",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de cilindro de maquina Caterpilla /1000000117.jpg",
        "title": "Reparación de cilindro de maquina Caterpilla",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de cilindro de maquina Caterpilla /1000000147.jpg",
        "title": "Reparación de cilindro de maquina Caterpilla",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de cilindro de maquina Caterpilla /1000000148.jpg",
        "title": "Reparación de cilindro de maquina Caterpilla",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de cilindro de maquina Caterpilla /1000000149.jpg",
        "title": "Reparación de cilindro de maquina Caterpilla",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de cilindro de maquina Caterpilla /1000000153.jpg",
        "title": "Reparación de cilindro de maquina Caterpilla",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de cilindro de maquina Caterpilla /1000000163.jpg",
        "title": "Reparación de cilindro de maquina Caterpilla",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de cilindro de maquina Caterpilla /1000000168.jpg",
        "title": "Reparación de cilindro de maquina Caterpilla",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de cilindro de maquina Caterpilla /1000000171.jpg",
        "title": "Reparación de cilindro de maquina Caterpilla",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de cilindro de maquina Caterpilla /1000000182.jpg",
        "title": "Reparación de cilindro de maquina Caterpilla",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de cilindro de maquina Caterpilla /1000000186.jpg",
        "title": "Reparación de cilindro de maquina Caterpilla",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de jardinera /1000000193.jpg",
        "title": "Reparación de jardinera",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de jardinera /1000000196.jpg",
        "title": "Reparación de jardinera",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de jardinera /1000000199.jpg",
        "title": "Reparación de jardinera",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de jardinera /1000000202.jpg",
        "title": "Reparación de jardinera",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de jardinera /1000000205.jpg",
        "title": "Reparación de jardinera",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de jardinera /1000000208.jpg",
        "title": "Reparación de jardinera",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de jardinera /1000000211.jpg",
        "title": "Reparación de jardinera",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de jardinera /1000000214.jpg",
        "title": "Reparación de jardinera",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de jardinera /1000000217.jpg",
        "title": "Reparación de jardinera",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de jardinera /1000000220.jpg",
        "title": "Reparación de jardinera",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de jardinera /1000000223.jpg",
        "title": "Reparación de jardinera",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de jardinera /1000000232.jpg",
        "title": "Reparación de jardinera",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de jardinera /1000000235.jpg",
        "title": "Reparación de jardinera",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de paredes con humedad /1000003664.jpg",
        "title": "Reparación de paredes con humedad",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de paredes con humedad /1000003667.jpg",
        "title": "Reparación de paredes con humedad",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de paredes con humedad /1000003670.jpg",
        "title": "Reparación de paredes con humedad",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de paredes con humedad /1000003673.jpg",
        "title": "Reparación de paredes con humedad",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de paredes con humedad /1000003676.jpg",
        "title": "Reparación de paredes con humedad",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de paredes con humedad /1000003679.jpg",
        "title": "Reparación de paredes con humedad",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de paredes con humedad /1000003682.jpg",
        "title": "Reparación de paredes con humedad",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de techo (logia), limpieza y pintura para techumbre (baño)/1000003529.jpg",
        "title": "Reparación de techo (logia), limpieza y pintura para techumbre (baño)",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de techo (logia), limpieza y pintura para techumbre (baño)/1000003532.jpg",
        "title": "Reparación de techo (logia), limpieza y pintura para techumbre (baño)",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de techo (logia), limpieza y pintura para techumbre (baño)/1000003583.jpg",
        "title": "Reparación de techo (logia), limpieza y pintura para techumbre (baño)",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de techo (logia), limpieza y pintura para techumbre (baño)/1000003589.jpg",
        "title": "Reparación de techo (logia), limpieza y pintura para techumbre (baño)",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de techo (logia), limpieza y pintura para techumbre (baño)/1000003592.jpg",
        "title": "Reparación de techo (logia), limpieza y pintura para techumbre (baño)",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de techo (logia), limpieza y pintura para techumbre (baño)/1000003595.jpg",
        "title": "Reparación de techo (logia), limpieza y pintura para techumbre (baño)",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de techo (logia), limpieza y pintura para techumbre (baño)/1000003598.jpg",
        "title": "Reparación de techo (logia), limpieza y pintura para techumbre (baño)",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de techo (logia), limpieza y pintura para techumbre (baño)/1000003601.jpg",
        "title": "Reparación de techo (logia), limpieza y pintura para techumbre (baño)",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de techo (logia), limpieza y pintura para techumbre (baño)/1000003604.jpg",
        "title": "Reparación de techo (logia), limpieza y pintura para techumbre (baño)",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de techo (logia), limpieza y pintura para techumbre (baño)/1000003607.jpg",
        "title": "Reparación de techo (logia), limpieza y pintura para techumbre (baño)",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de techo (logia), limpieza y pintura para techumbre (baño)/1000003619.jpg",
        "title": "Reparación de techo (logia), limpieza y pintura para techumbre (baño)",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de techo (logia), limpieza y pintura para techumbre (baño)/1000003622.jpg",
        "title": "Reparación de techo (logia), limpieza y pintura para techumbre (baño)",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de techo (logia), limpieza y pintura para techumbre (baño)/1000003625.jpg",
        "title": "Reparación de techo (logia), limpieza y pintura para techumbre (baño)",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de techo (logia), limpieza y pintura para techumbre (baño)/1000003629.jpg",
        "title": "Reparación de techo (logia), limpieza y pintura para techumbre (baño)",
        "category": "construccion"
    },
    {
        "src": "imagenes/Reparación de techo (logia), limpieza y pintura para techumbre (baño)/1000003632.jpg",
        "title": "Reparación de techo (logia), limpieza y pintura para techumbre (baño)",
        "category": "construccion"
    },
    {
        "src": "imagenes/Restauración de muebles de terraza (etrusco) lijado, pintura y patina de acabados/1000003499.jpg",
        "title": "Restauración de muebles de terraza (etrusco) lijado, pintura y patina de acabados",
        "category": "construccion"
    },
    {
        "src": "imagenes/Restauración de muebles de terraza (etrusco) lijado, pintura y patina de acabados/1000003502.jpg",
        "title": "Restauración de muebles de terraza (etrusco) lijado, pintura y patina de acabados",
        "category": "construccion"
    },
    {
        "src": "imagenes/Restauración de muebles de terraza (etrusco) lijado, pintura y patina de acabados/1000003505.jpg",
        "title": "Restauración de muebles de terraza (etrusco) lijado, pintura y patina de acabados",
        "category": "construccion"
    },
    {
        "src": "imagenes/Restauración de muebles de terraza (etrusco) lijado, pintura y patina de acabados/1000003508.jpg",
        "title": "Restauración de muebles de terraza (etrusco) lijado, pintura y patina de acabados",
        "category": "construccion"
    },
    {
        "src": "imagenes/Restauración de muebles de terraza (etrusco) lijado, pintura y patina de acabados/1000003550.jpg",
        "title": "Restauración de muebles de terraza (etrusco) lijado, pintura y patina de acabados",
        "category": "construccion"
    },
    {
        "src": "imagenes/Restauración de muebles de terraza (etrusco) lijado, pintura y patina de acabados/1000003553.jpg",
        "title": "Restauración de muebles de terraza (etrusco) lijado, pintura y patina de acabados",
        "category": "construccion"
    },
    {
        "src": "imagenes/Restauración de muebles de terraza (etrusco) lijado, pintura y patina de acabados/1000003556.jpg",
        "title": "Restauración de muebles de terraza (etrusco) lijado, pintura y patina de acabados",
        "category": "construccion"
    },
    {
        "src": "imagenes/Restauración de muebles de terraza (etrusco) lijado, pintura y patina de acabados/1000003559.jpg",
        "title": "Restauración de muebles de terraza (etrusco) lijado, pintura y patina de acabados",
        "category": "construccion"
    },
    {
        "src": "imagenes/Restauración de muebles de terraza (etrusco) lijado, pintura y patina de acabados/1000003562.jpg",
        "title": "Restauración de muebles de terraza (etrusco) lijado, pintura y patina de acabados",
        "category": "construccion"
    },
    {
        "src": "imagenes/Restauración de muebles de terraza (etrusco) lijado, pintura y patina de acabados/1000003565.jpg",
        "title": "Restauración de muebles de terraza (etrusco) lijado, pintura y patina de acabados",
        "category": "construccion"
    },
    {
        "src": "imagenes/Restauración de muebles de terraza (etrusco) lijado, pintura y patina de acabados/1000003568.jpg",
        "title": "Restauración de muebles de terraza (etrusco) lijado, pintura y patina de acabados",
        "category": "construccion"
    },
    {
        "src": "imagenes/Restauración de muebles de terraza (etrusco) lijado, pintura y patina de acabados/1000003571.jpg",
        "title": "Restauración de muebles de terraza (etrusco) lijado, pintura y patina de acabados",
        "category": "construccion"
    },
    {
        "src": "imagenes/Vitrificado de terraza /1000003511.jpg",
        "title": "Vitrificado de terraza",
        "category": "construccion"
    },
    {
        "src": "imagenes/Vitrificado de terraza /1000003514.jpg",
        "title": "Vitrificado de terraza",
        "category": "construccion"
    },
    {
        "src": "imagenes/Vitrificado de terraza /1000003517.jpg",
        "title": "Vitrificado de terraza",
        "category": "construccion"
    },
    {
        "src": "imagenes/Vitrificado de terraza /1000003520.jpg",
        "title": "Vitrificado de terraza",
        "category": "construccion"
    }
];

function renderGalleryItems() {
    if (!galleryGrid) return;

    galleryGrid.innerHTML = '';

    GALLERY_FILES.forEach((itemData) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.setAttribute('data-category', itemData.category);

        const img = document.createElement('img');
        img.src = itemData.src;
        img.alt = itemData.title;
        img.loading = 'lazy';

        const overlay = document.createElement('div');
        overlay.className = 'gallery-overlay';
        overlay.innerHTML = `<h4>${itemData.title}</h4><p>${itemData.src.split('/').pop()}</p>`;

        item.appendChild(img);
        item.appendChild(overlay);

        item.addEventListener('click', () => {
            openModal(itemData.src, `${itemData.title} - ${itemData.src.split('/').pop()}`);
        });

        galleryGrid.appendChild(item);
    });
}

if (filterButtons.length > 0 && galleryGrid) {
    filterButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            filterButtons.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            const items = galleryGrid.querySelectorAll('.gallery-item');

            items.forEach((item) => {
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

function initializeGallery() {
    renderGalleryItems();
}

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
    const animateElements = document.querySelectorAll('.servicio-card, .gallery-item, .form-container, .feature-card, .testimonio-card');
    animateElements.forEach(el => observer.observe(el));
});

// ============================================
// CONTADORES ANIMADOS
// ============================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && !statNumber.classList.contains('animated')) {
                statNumber.classList.add('animated');
                const target = parseInt(statNumber.getAttribute('data-target'));
                animateCounter(statNumber, target);
            }
        }
    });
}, { threshold: 0.5 });

// Observar tarjetas de estadísticas
document.addEventListener('DOMContentLoaded', () => {
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => statsObserver.observe(card));
});

// ============================================
// LAZY LOADING PARA IMÁGENES
// ============================================
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// MEJORAR NAVEGACIÓN ACTIVA
// ============================================
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initializeGallery();
    setupLazyLoading();
    updateActiveNavLink();
    
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

// ============================================
// MEJORAS DE RENDIMIENTO
// ============================================
// Throttle para eventos de scroll
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimizar scroll en navbar
const handleScroll = throttle(() => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, 10);

window.addEventListener('scroll', handleScroll);

// ============================================
// MANEJO DE ERRORES
// ============================================
window.addEventListener('error', (e) => {
    console.error('Error capturado:', e.error);
    // En producción, podrías enviar esto a un servicio de logging
});

// Manejo de errores en carga de imágenes
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        console.warn('Error cargando imagen:', e.target.src);
        // Opcional: mostrar imagen placeholder
        e.target.style.display = 'none';
    }
}, true);

