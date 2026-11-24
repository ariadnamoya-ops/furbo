document.addEventListener("DOMContentLoaded", function () {
  var boton = document.getElementById("btn-mensaje");
  var mensaje = document.getElementById("mensaje");
  if (boton) {
    boton.addEventListener("click", function () {
      mensaje.textContent = "¡Hola! Bienvenido/a a la web de La Liga ⚽";
    });
  }
});
