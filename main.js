const root = document.documentElement;
root.style.setProperty('--ready', '1');

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const experienceStart = 2010;
const currentYear = new Date().getFullYear();
const experienceYears = currentYear - experienceStart;

const experienceEl = document.querySelector('.fact-number');
if (experienceEl && experienceEl.textContent.includes('Anos de experiencia') === false && experienceEl.closest('.fact')?.querySelector('.fact-label')?.textContent?.includes('Anos de experiencia')) {
  experienceEl.textContent = `${experienceYears}+`;
}

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -36px 0px' }
);
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const submit = document.getElementById('contact-submit');

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (status) status.textContent = '';
    if (submit) {
      submit.disabled = true;
      submit.textContent = 'Enviando...';
    }
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      message: String(formData.get('message') || '').trim(),
    };
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.error || 'Falha no envio.');
      }
      if (status) status.textContent = 'Mensagem enviada com sucesso.';
      form.reset();
    } catch (error) {
      if (status) status.textContent = 'Não foi possível enviar. Tente novamente.';
    } finally {
      if (submit) {
        submit.disabled = false;
        submit.textContent = 'Enviar mensagem';
      }
    }
  });
}

/* hero carousel */
const slides = document.querySelectorAll('.hero-slide');
const prevBtn = document.getElementById('hero-prev');
const nextBtn = document.getElementById('hero-next');
const dots = document.querySelectorAll('.hero-carousel-dot');
let current = 0;
let autoplayTimer = null;

function goTo(index) {
  if (index < 0 || index >= slides.length) return;
  slides[current].classList.remove('active');
  slides[current].setAttribute('aria-hidden', 'true');
  dots[current]?.classList.remove('active');
  current = index;
  slides[current].classList.add('active');
  slides[current].setAttribute('aria-hidden', 'false');
  dots[current]?.classList.add('active');
}

function startAutoplay() {
  stopAutoplay();
  autoplayTimer = setInterval(() => {
    goTo((current + 1) % slides.length);
  }, 5000);
}

function stopAutoplay() {
  if (autoplayTimer) clearInterval(autoplayTimer);
}

if (slides.length > 1) {
  prevBtn?.addEventListener('click', () => {
    goTo((current - 1 + slides.length) % slides.length);
    startAutoplay();
  });
  nextBtn?.addEventListener('click', () => {
    goTo((current + 1) % slides.length);
    startAutoplay();
  });
  dots.forEach((dot) => {
    const index = Number(dot.getAttribute('data-index'));
    dot?.addEventListener('click', () => {
      goTo(index);
      startAutoplay();
    });
  });

  /* swipe support */
  const carousel = document.querySelector('.hero-carousel');
  let startX = 0;
  let endX = 0;

  carousel?.addEventListener('touchstart', (event) => {
    startX = event.changedTouches[0]?.screenX || 0;
    stopAutoplay();
  }, { passive: true });

  carousel?.addEventListener('touchend', (event) => {
    endX = event.changedTouches[0]?.screenX || 0;
    const diff = startX - endX;
    const threshold = 50;
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        goTo((current + 1) % slides.length);
      } else {
        goTo((current - 1 + slides.length) % slides.length);
      }
    }
    startAutoplay();
  });

  startAutoplay();
}
