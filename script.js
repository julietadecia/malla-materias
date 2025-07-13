document.querySelectorAll('.materia').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('tachada');
  });
});
