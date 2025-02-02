document.addEventListener("DOMContentLoaded", function() {
  const content = document.querySelector('.content');
  const elements = content.querySelectorAll('h1, h2, p, .intro'); // Selecciona solo los elementos de texto
  let text = '';
  elements.forEach(element => {
      text += element.textContent + '\n'; // Captura el texto visible
  });
  content.innerHTML = ""; // Limpia el contenido visible
  let i = 0;
  function typeWriter() {
      if (i < text.length) {
          content.innerHTML += text.charAt(i); // Escribe el texto visible
          i++;
          setTimeout(typeWriter, 20); // Reduce el tiempo de espera para aumentar la velocidad
      } else {
          content.classList.remove('typing'); // Elimina la clase typing al finalizar
      }
  }
  typeWriter();
});