function toggleMateria(elemento) {
  if (elemento.classList.contains("bloqueada")) return;

  elemento.classList.toggle("tachado");

  const materias = document.querySelectorAll(".bloqueada");
  materias.forEach(materia => {
    const reqs = materia.dataset.prerrequisitos?.split(",") || [];
    const cumplido = reqs.every(id => document.getElementById(id).classList.contains("tachado"));
    if (cumplido) materia.classList.remove("bloqueada");
  });
}
