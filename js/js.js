"use strict";
let enviar = document.querySelector("#enviar");
enviar.addEventListener("click", verificarFormulario);

function verificarFormulario(e) {
  e.preventDefault();
  let datosRegis = document.querySelector("#datosRegis");
  let nombre = document.querySelector("#name");
  let email = document.querySelector("#email");
  if (nombre.value === "" || email.value === "") {
    datosRegis.innerHTML = "Por favor rellene todas las casillas";
    datosRegis.classList.add("danger");
    datosRegis.classList.remove("correct");
  } else {
    datosRegis.innerHTML = "Enviado";
    datosRegis.classList.add("correct");
    datosRegis.classList.remove("danger");
    setTimeout(() => {
      datosRegis.innerHTML = " ";
      nombre.value = "";
      email.value = "";
    }, 2000);
  }
}
