/* =============================================
   FAB — main.js
   ============================================= */

// --- Custom Cursor ---
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');

document.addEventListener('mousemove', e => {
  cursor.style.left     = e.clientX + 'px';
  cursor.style.top      = e.clientY + 'px';
  cursorRing.style.left = e.clientX + 'px';
  cursorRing.style.top  = e.clientY + 'px';
});

document.querySelectorAll('a, button, .srv, .tm').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

// --- Navbar scroll ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// --- Scroll Reveal ---
const revealEls = document.querySelectorAll('.rv');
const observer  = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

// --- Tabs ---
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(target).classList.add('active');
  });
});

// --- Modal Contacto ---
const modalOverlay = document.getElementById('modal-contacto');
const btnOpenModal = document.getElementById('btn-open-modal');
const btnCloseModal = document.querySelector('.modal-close');
const formContacto  = document.getElementById('form-contacto');

function openModal() {
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

const validations = [
  { id: 'fc-nombre', fn: v => v.trim().length >= 2 },
  { id: 'fc-tel',    fn: v => /^\+?[\d\s\-()\\.]{7,}$/.test(v.trim()) },
  { id: 'fc-email',  fn: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) },
  { id: 'fc-tipo',   fn: v => v !== '' },
  { id: 'fc-mensaje',fn: v => v.trim().length >= 10 },
];

formContacto.addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;

  validations.forEach(({ id, fn }) => {
    const el = document.getElementById(id);
    const group = el.closest('.form-group');
    if (!fn(el.value)) {
      group.classList.add('invalid');
      valid = false;
    } else {
      group.classList.remove('invalid');
    }
  });

  if (valid) {
    const payload = {
      access_key: '00fb60de-f22c-4830-9b58-cbfcb308c4c2',
      subject:    'Nuevo mensaje desde FAB Consulting',
      from_name:  'FAB Consulting Web',
      cc:         'martin@fabconsulting.com.ar',
      nombre:     document.getElementById('fc-nombre').value,
      telefono:   document.getElementById('fc-tel').value,
      email:      document.getElementById('fc-email').value,
      tipo:       document.getElementById('fc-tipo').value,
      mensaje:    document.getElementById('fc-mensaje').value,
    };

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })
    .then(res => {
      if (res.ok) {
        document.querySelector('.modal-title').style.display = 'none';
        formContacto.innerHTML = '<p class="form-success">Gracias por escribirnos. Te contactaremos a la brevedad.</p>';
      } else {
        formContacto.innerHTML = '<p class="form-success">Hubo un error al enviar. Por favor escribinos a contacto@fabconsulting.com.ar</p>';
      }
    })
    .catch(() => {
      formContacto.innerHTML = '<p class="form-success">Hubo un error al enviar. Por favor escribinos a contacto@fabconsulting.com.ar</p>';
    });
  }
});
