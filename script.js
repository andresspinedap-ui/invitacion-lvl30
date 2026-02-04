function huir() {
  const resultado = document.getElementById("resultado");
  resultado.style.display = "block";
}

function aceptar() {
  document.getElementById("escena-1").classList.remove("activa");
  document.getElementById("escena-2").classList.add("activa");
}
