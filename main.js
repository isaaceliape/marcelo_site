const root = document.documentElement;
root.style.setProperty('--ready', '1');

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

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
