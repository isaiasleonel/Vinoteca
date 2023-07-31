"use strict";
// ---------------------Formulario-------------
let enviar = document.querySelector("#enviar");
enviar.addEventListener("click", verificarFormulario);

let regEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

function verificarFormulario(e) {
  e.preventDefault();
  let dateRegister = document.querySelector("#datosRegis");
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let emailOk = regEx.test(email.value);
  console.log(emailOk);

  if (email.value === "" || name.value === "" || !emailOk) {
    dateRegister.innerHTML = "Por favor rellene todas las casillas e ingrese un email valido";
    dateRegister.classList.add("danger");
    dateRegister.classList.remove("correct");
  } else {
    dateRegister.innerHTML = "Enviado";
    dateRegister.classList.add("correct");
    dateRegister.classList.remove("danger");
    setTimeout(() => {
      dateRegister.innerHTML = " ";
      name.value = "";
      email.value = "";
    }, 2000);
  }

}




