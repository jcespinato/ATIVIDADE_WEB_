const button = document.querySelector('[data-theme-toggle]');
const savedTheme = localStorage.getItem('tema');

if (savedTheme === 'escuro') {
  document.body.classList.add('dark');
}

function updateButton() {
  if (!button) return;
  const dark = document.body.classList.contains('dark');
  button.textContent = dark ? '☀ Tema claro' : '☾ Tema escuro';
  button.setAttribute('aria-pressed', String(dark));
}

if (button) {
  button.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('tema', document.body.classList.contains('dark') ? 'escuro' : 'claro');
    updateButton();
  });
}

updateButton();
