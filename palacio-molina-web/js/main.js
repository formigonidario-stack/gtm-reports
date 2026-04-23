// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Mobile hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(open));
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// Form — envío a email vía Formspree (reemplazar con endpoint real)
// Opciones: https://formspree.io  |  EmailJS  |  backend propio
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const data = Object.fromEntries(new FormData(form));

    btn.textContent = 'Enviando...';
    btn.disabled = true;

    // TODO: reemplazar URL con endpoint de Formspree u otro servicio
    // Ejemplo Formspree: fetch('https://formspree.io/f/XXXXXXXX', {...})
    try {
      // Simulación hasta conectar backend
      await new Promise(r => setTimeout(r, 800));
      btn.textContent = 'Enviado. Te contactamos pronto.';
      form.reset();
    } catch {
      btn.textContent = 'Error. Intentá de nuevo.';
      btn.disabled = false;
    }
  });
}

// Smooth reveal on scroll (IntersectionObserver)
const revealEls = document.querySelectorAll(
  '.stats__item, .tipo-card, .amenity-item, .origen__text, .oportunidad__box'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
