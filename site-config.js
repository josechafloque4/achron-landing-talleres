/**
 * Configuración centralizada de contenidos y enlaces de ACHRON ACADEMIC
 * 
 * Si necesitas actualizar fechas, el enlace de WhatsApp, datos del docente,
 * o incorporar un video o enlace profesional verificable, modifícalos directamente aquí.
 */
export const SITE_CONFIG = {
  brand: {
    name: "ACHRON ACADEMIC",
    tagline: "De la idea a la investigación",
    logoAlt: "Logotipo de Achron Academic - De la idea a la investigación",
  },
  event: {
    badge: "Talleres gratuitos · En vivo por Zoom",
    title: "Inteligencia artificial para tesis y artículos científicos",
    heroDescription: "Aprende a utilizar la IA con una ruta metodológica para organizar tu investigación, revisar su coherencia y avanzar en la redacción con sustento.",
    datesDisplay: "15 y 16 de noviembre de 2026",
    timeDisplay: "7:00 p. m. · Hora de Perú",
    modalityDisplay: "Vía Zoom",
    costDisplay: "Participación gratuita",
    
    // Enlace oficial al grupo de WhatsApp (usado en todos los botones de conversión principales)
    whatsappGroupUrl: "https://chat.whatsapp.com/CPId1L3a4Gf0M6X9UUge4Q",
    whatsappButtonText: "Quiero participar: unirme al grupo",
    whatsappSubtext: "En el grupo de WhatsApp recibirás la información y los enlaces para ingresar a las clases.",

    // Contacto directo con el Administrador / Chatbot de WhatsApp para consultas personalizadas
    adminWhatsapp: {
      phone: "+51972569165",
      phoneDigits: "51972569165",
      welcomeMessage: "Bienvenidos al mundo del uso etico de la IA para investigación para ayudarte indicame el motivo de tu consulta es por el taller gratuito  o por asistencia guiada solo con acceso autorizado.",
      directUrl: "https://wa.me/51972569165?text=Bienvenidos%20al%20mundo%20del%20uso%20etico%20de%20la%20IA%20para%20investigaci%C3%B3n%20para%20ayudarte%20indicame%20el%20motivo%20de%20tu%20consulta%20es%20por%20el%20taller%20gratuito%20%20o%20por%20asistencia%20guiada%20solo%20con%20acceso%20autorizado."
    },
  },
  docente: {
    fullName: "Dr. José Eugenio Chafloque Capuñay",
    credentials: "Investigador RENACYT · Docente y consultor académico",
    bio: "Acompaña procesos de investigación y forma a estudiantes y profesionales en el uso de inteligencia artificial para tesis, artículos científicos y revisión de la escritura académica. Es creador del método ACHRON y del Método Chaflo de Humanización Asistida.",
    photoAlt: "Fotografía formal del Dr. José Eugenio Chafloque Capuñay",
    // Si posteriormente se dispone de un enlace profesional verificable (ej. perfil RENACYT / CTI Vitae / ORCID), agrégalo aquí:
    verifiedProfileUrl: "", // Ej: "https://ctivitae.concytec.gob.pe/..."
    verifiedProfileLabel: "Ver perfil profesional",
  },
  video: {
    // Si se dispone de un video de invitación oficial del docente, configura hasVideo en true y completa la ruta o URL:
    hasVideo: false,
    videoSrc: "", // Ej: "assets/videos/invitacion-docente.mp4" o iframe embed URL
    videoPoster: "assets/images/dr-jose-chafloque-opt.jpg",
    videoTitle: "Invitación en video del Dr. José Eugenio Chafloque Capuñay",
  },
};
