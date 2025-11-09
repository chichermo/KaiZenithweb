# KaiZenith - Landing Page

Landing page profesional para KaiZenith Spa - Empresa especializada en construcción general, soldaduras especiales, reparación de maquinaria pesada y servicios logísticos.

## 🚀 Características

- **Diseño Moderno y Profesional**: Interfaz elegante con tema dorado que refleja la identidad de la marca
- **Galería de Trabajos**: Sección para mostrar proyectos realizados con filtros por categoría
- **Formulario de Cotización**: Formulario completo para solicitar presupuestos
- **Formulario de Contacto**: Canal directo de comunicación
- **Botón de WhatsApp**: Integración funcional para contacto inmediato
- **Totalmente Responsive**: Optimizado para todos los dispositivos
- **Animaciones Suaves**: Transiciones y efectos visuales profesionales

## 📁 Estructura del Proyecto

```
patolin 2/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidad JavaScript
├── logo.jpg           # Logo de la empresa
├── imagenes/          # Carpeta para imágenes de trabajos
│   ├── trabajo1.jpg
│   ├── trabajo2.jpg
│   └── ...
└── README.md          # Este archivo
```

## ⚙️ Configuración

### 1. Logo

El logo `logo.jpg` ya está configurado en la raíz del proyecto. Si necesitas actualizarlo, reemplaza el archivo manteniendo el mismo nombre.

### 2. Agregar Imágenes de Trabajos

Sube las imágenes de tus trabajos a la carpeta `imagenes/` con los siguientes nombres:
- `trabajo1.jpg`, `trabajo2.jpg`, `trabajo3.jpg`, etc.

**Formato recomendado:**
- Resolución: Mínimo 1200x900px
- Formato: JPG, PNG o WebP
- Tamaño: Optimizado (máximo 500KB por imagen)

### 3. Datos de Contacto

Los datos de contacto ya están configurados en `script.js`:

- **WhatsApp**: +56 9 6820 8696
- **Email**: contacto.kaizenith@gmail.com
- **Teléfono**: +56 9 6820 8696
- **Ubicación**: Badajoz 100 OF 621 Ps 6 1, Dpto. 623, Las Condes, Chile

Si necesitas actualizar estos datos, edita la sección `CONFIG` en `script.js`.

**Formato del número de WhatsApp:**
- Incluye el código de país (56 para Chile)
- Sin espacios, guiones o paréntesis
- Ejemplo: `56968208696` (para Chile)

## 🎨 Personalización

### Colores

Los colores principales están definidos en `styles.css` en la sección `:root`:

```css
--color-primary: #D4AF37;        /* Dorado principal */
--color-primary-dark: #B8941F;   /* Dorado oscuro */
--color-primary-light: #E5C866;  /* Dorado claro */
```

Puedes modificar estos valores para ajustar la paleta de colores.

### Fuentes

El proyecto usa:
- **Playfair Display**: Para títulos y elementos destacados
- **Inter**: Para texto general

Ambas fuentes se cargan desde Google Fonts.

## 📱 Funcionalidades

### Formularios

Ambos formularios (Cotización y Contacto) están configurados para:
1. Validar los datos ingresados
2. Generar un mensaje formateado
3. Abrir WhatsApp con el mensaje prellenado
4. Mostrar notificación de confirmación

### Galería

La galería incluye:
- Filtros por categoría (Construcción, Remodelación, Reparación)
- Modal para ver imágenes en tamaño completo
- Carga automática de imágenes desde la carpeta `imagenes/`

### Navegación

- Menú fijo que cambia de estilo al hacer scroll
- Navegación suave entre secciones
- Menú hamburguesa para dispositivos móviles

## 🌐 Despliegue

### Opción 1: Servidor Local

1. Abre la carpeta del proyecto
2. Si tienes Python instalado:
   ```bash
   python -m http.server 8000
   ```
3. Abre `http://localhost:8000` en tu navegador

### Opción 2: Servicio de Hosting

Puedes subir todos los archivos a cualquier servicio de hosting como:
- Netlify
- Vercel
- GitHub Pages
- Hosting tradicional

**Importante**: Asegúrate de que la carpeta `imagenes/` se suba junto con los demás archivos.

## 📝 Notas Importantes

1. **WhatsApp**: El botón de WhatsApp requiere que el número esté en formato internacional sin espacios.

2. **Imágenes**: Las imágenes deben estar optimizadas para web para mejorar el rendimiento.

3. **Logo**: El logo está configurado como `logo.jpg` en la raíz del proyecto.

4. **Formularios**: Los formularios redirigen a WhatsApp. Si prefieres usar un backend, necesitarás modificar la funcionalidad en `script.js`.

## 🔧 Solución de Problemas

### Las imágenes no se muestran
- Verifica que las imágenes estén en la carpeta `imagenes/`
- Asegúrate de que los nombres sean: `trabajo1.jpg`, `trabajo2.jpg`, etc.
- Verifica que las extensiones sean correctas (.jpg, .jpeg, .png)

### El botón de WhatsApp no funciona
- Verifica que el número en `CONFIG.whatsappNumber` esté en formato correcto
- Asegúrate de incluir el código de país

### El menú móvil no se abre
- Verifica que el archivo `script.js` esté cargado correctamente
- Revisa la consola del navegador para errores

## 📞 Soporte

Para cualquier duda o personalización adicional, revisa los comentarios en el código fuente.

---

**KaiZenith - REACH THE SUMMIT** 🏔️

