const btnAceptar = document.getElementById("btn-aceptar");
const btnHuir = document.getElementById("btn-huir");
const mensaje = document.getElementById("mensaje-huir");

const escena1 = document.getElementById("escena-1");
const escena2 = document.getElementById("escena-2");

btnHuir.addEventListener("click", () => {
  mensaje.classList.remove("oculto");
});

btnAceptar.addEventListener("click", () => {
  escena1.classList.remove("activa");
  escena2.classList.add("activa");
});
