const toggleButton = document.createElement('button');
toggleButton.textContent = 'Cambiar tema';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
