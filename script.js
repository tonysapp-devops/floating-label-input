const field = document.querySelector('.field');
const input = field.querySelector('input');

input.addEventListener('input', () => {
  const value = input.value;
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  field.classList.remove('error', 'success');

  if (value.length === 0) return;

  if (isValid) {
    field.classList.add('success');
  } else {
    field.classList.add('error');
  }
});

/* Liquid cursor tracking */
field.addEventListener('mousemove', (e) => {
  const rect = field.getBoundingClientRect();
  field.style.setProperty('--x', `${e.clientX - rect.left}px`);
  field.style.setProperty('--y', `${e.clientY - rect.top}px`);
});