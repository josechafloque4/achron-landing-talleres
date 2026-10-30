/**
 * ACHRON ACADEMIC - Comportamiento de interfaz accesible y ligero
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menú móvil accesible
  const navToggleBtn = document.getElementById('navToggleBtn');
  const mobileNavPanel = document.getElementById('mobileNavPanel');

  if (navToggleBtn && mobileNavPanel) {
    navToggleBtn.addEventListener('click', () => {
      const isExpanded = navToggleBtn.getAttribute('aria-expanded') === 'true';
      navToggleBtn.setAttribute('aria-expanded', !isExpanded);
      mobileNavPanel.classList.toggle('is-open', !isExpanded);
      if (!isExpanded) {
        mobileNavPanel.removeAttribute('hidden');
      } else {
        mobileNavPanel.setAttribute('hidden', '');
      }
    });

    // Cerrar menú al hacer clic en un enlace interno
    const mobileLinks = mobileNavPanel.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggleBtn.setAttribute('aria-expanded', 'false');
        mobileNavPanel.classList.remove('is-open');
        mobileNavPanel.setAttribute('hidden', '');
      });
    });
  }

  // 2. Acordeón accesible: asegurar apertura única opcional si el usuario lo desea,
  // permitiendo funcionamiento 100% nativo mediante <details> y navegación por teclado.
  const faqDetails = document.querySelectorAll('.faq-item');
  faqDetails.forEach(detail => {
    detail.addEventListener('toggle', () => {
      if (detail.open) {
        // Opcional: mantener abierto solo uno a la vez para lectura ordenada
        faqDetails.forEach(other => {
          if (other !== detail && other.open) {
            other.removeAttribute('open');
          }
        });
      }
    });
  });

  // 3. Documentación para medición futura:
  // Los clics en enlaces salientes a WhatsApp NO equivalen a ingresos confirmados al grupo.
  // Solo registran la intención del usuario.
  const whatsappTriggers = document.querySelectorAll('a[href*="chat.whatsapp.com"]');
  whatsappTriggers.forEach((trigger, index) => {
    trigger.addEventListener('click', (e) => {
      // Registrar evento si existe un sistema analítico futuro
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'whatsapp_click_intent',
          location: trigger.dataset.location || 'unknown',
          trigger_index: index + 1
        });
      }
    });
  });
});
