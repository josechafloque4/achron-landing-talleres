# Manual de Operación y Configuración — Landing Page ACHRON ACADEMIC

Landing page profesional y funcional creada para la convocatoria a los dos talleres gratuitos en vivo:
**«Inteligencia artificial para tesis y artículos científicos»**.

---

## 1. Estructura del Proyecto

El proyecto está implementado en la carpeta independiente `landing-achron`:

```
landing-achron/
├── index.html                   # Documento HTML5 semántico y accesible
├── site-config.js               # Archivo central de configuración de datos y enlaces
├── assets/
│   ├── css/
│   │   └── main.css             # Estilos responsivos, accesibilidad, paleta y tipografía
│   ├── js/
│   │   └── main.js              # Lógica de navegación móvil y acordeón FAQ nativo
│   └── images/
│       ├── achron-academic-logo.jpg    # Logo original
│       ├── achron-logo-opt.jpg         # Logo optimizado para la web
│       ├── dr-jose-chafloque.jpg       # Fotografía formal original del docente
│       ├── dr-jose-chafloque-opt.jpg   # Fotografía optimizada (sin recortes indebidos)
│       ├── favicon.png                 # Icono del sitio derivado del símbolo oficial
│       └── og-preview.jpg              # Tarjeta de vista previa para redes sociales
└── screenshots/
    ├── desktop.png              # Captura de pantalla en escritorio (1280px)
    ├── tablet-768.png           # Captura de pantalla en tableta (768px)
    ├── mobile-390.png           # Captura en móvil (390px)
    └── mobile-360.png           # Captura en móvil compacto (360px)
```

---

## 2. Instrucciones de Ejecución y Previsualización Local

No requiere frameworks pesados, compiladores ni base de datos. Se puede servir con cualquier servidor web estático local:

### Opción A (Python 3):
```bash
cd "c:\Users\josec\Downloads\curso IA\landing-achron"
python -m http.server 8080
```
Abrir en el navegador: [http://localhost:8080](http://localhost:8080)

### Opción B (Node.js):
```bash
npx serve "c:\Users\josec\Downloads\curso IA\landing-achron"
```

### Opción C (Doble clic directo):
Puedes abrir el archivo `index.html` directamente en cualquier navegador moderno.

---

## 3. Ubicación de Campos para Actualizaciones

Toda la información clave está centralizada en `site-config.js` e `index.html`:

1. **Enlace oficial de WhatsApp**:
   - `site-config.js` -> `SITE_CONFIG.event.whatsappGroupUrl`
   - Enlace actual configurado en todos los botones: `https://chat.whatsapp.com/CPId1L3a4Gf0M6X9UUge4Q`
2. **Fechas y Horarios**:
   - `site-config.js` -> `SITE_CONFIG.event.datesDisplay` ("15 y 16 de noviembre de 2026")
   - `site-config.js` -> `SITE_CONFIG.event.timeDisplay` ("7:00 p. m. · Hora de Perú")
3. **Fotografía del docente**:
   - Guardar el nuevo archivo en `assets/images/` y actualizar la ruta en `index.html` (o reemplazar `dr-jose-chafloque-opt.jpg`).
4. **Perfil profesional verificable**:
   - En `site-config.js`, coloca la URL en `SITE_CONFIG.docente.verifiedProfileUrl`. Al tener valor, el botón aparecerá automáticamente en la sección del docente.
5. **Video de invitación del docente**:
   - En `site-config.js`, cambia `SITE_CONFIG.video.hasVideo = true` y coloca la URL en `SITE_CONFIG.video.videoSrc`. La página reemplazará la invitación escrita por el reproductor con controles limpios.

---

## 4. Criterio de Medición Futura

- Los clics en los enlaces o botones de WhatsApp reflejan **intención de ingreso**, no confirmación de suscripción o ingreso efectivo al grupo.
