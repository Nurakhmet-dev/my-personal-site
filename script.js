const glow = document.querySelector('.cursor-glow');
let tx = innerWidth / 2, ty = innerHeight / 2, x = tx, y = ty;

window.addEventListener('pointermove', (e) => {
  tx = e.clientX;
  ty = e.clientY;
});

function animateGlow() {
  x += (tx - x) * 0.12;
  y += (ty - y) * 0.12;
  glow.style.left = `${x}px`;
  glow.style.top = `${y}px`;
  requestAnimationFrame(animateGlow);
}
animateGlow();

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('projectForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(`Новая заявка от ${data.get('name')}`);
  const body = encodeURIComponent(
`Имя: ${data.get('name')}
Email: ${data.get('email')}
Тип проекта: ${data.get('type')}
Бюджет: ${data.get('budget')}

Задача:
${data.get('message')}`
  );

  // Замените email ниже на ваш рабочий адрес.
  window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  status.textContent = 'Откроется почтовый клиент для отправки заявки.';
});
