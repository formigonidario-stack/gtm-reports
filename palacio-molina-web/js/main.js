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

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxNOLOzlQU6wfl0rF5E19k_yycG80gQLKfhEuVdym63lX9wODJ25mj6OQlGBQIdDQ1GkA/exec';

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const data = Object.fromEntries(new FormData(form));

    btn.textContent = 'Enviando...';
    btn.disabled = true;

    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(data),
      });
      btn.textContent = 'Enviado. Te contactamos pronto.';
      form.reset();
    } catch (err) {
      console.error('Error fetch:', err);
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
