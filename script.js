// Ejemplo de JavaScript para un menú desplegable en móviles
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('nav ul');
  const toggle = document.createElement('div');
  toggle.classList.add('nav-toggle');
  toggle.innerHTML = '☰';
  document.querySelector('header').appendChild(toggle);

  toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
  });
});