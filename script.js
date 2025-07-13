function toggle(elem) {
  if (elem.classList.contains("bloqueada")) return;
  elem.classList.toggle("tachado");

  document.querySelectorAll('.materia.bloqueada').forEach(m => {
    const reqs = m.dataset.prerrequisitos?.split(',') || [];
    if (reqs.every(r => document.getElementById(r).classList.contains('tachado'))) {
      m.classList.remove('bloqueada');
    }
  });
}
