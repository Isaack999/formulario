const nombre = document.getElementById("myname");
const apellidos = document.getElementById("userame");
const correro = document.getElementById("email");
const celular = document.getElementById("mobile");
const contrasenia = document.getElementById("password");
const contrasenia2 = document.getElementById("repeatpassword");
const terminosycon = document.getElementById("termsAndConditions");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form--input");



form.addEventListener("submit", (e) => {
    e.preventDefault();
    listInputs.forEach((element) => {
        element.lastElementChild.innerHTML = "";
      });



    if (nombre.value.length < 1 || nombre.value.trim() =="") {
        let elemento = document.querySelector(".myname");
        elemento.lastElementChild.innerHTML =("Nombre no valido");
    }
    if (apellidos.value.length < 1 || apellidos.value.trim() =="") {
        let elemento = document.querySelector(".userame");
        elemento.lastElementChild.innerHTML =("Apellido no valido");
        
    }
    
    if (correro.value.length < 1 || correro.value.trim() =="") {
        let elemento = document.querySelector(".mail");
        elemento.lastElementChild.innerHTML =("Correo no valido");
        
    }
    if (
        celular.value.length != 10 || celular.value.trim() == "" || isNaN(celular.value)) {
        let elemento = document.querySelector(".mobile");
        elemento.lastElementChild.innerHTML =("celular no valido");
        
    }
    if (contrasenia.value.length < 1 || contrasenia.value.trim() =="") {
        let elemento = document.querySelector(".password");
        elemento.lastElementChild.innerHTML =("contraseña no valido");
        
    }
    if (contrasenia2.value != contrasenia.value) {
        let elemento = document.querySelector(".repeatpassword");
        elemento.lastElementChild.innerHTML =("contraseña no Coinside");
        
    }
    if (!terminosycon.checked) {
        let elemento = document.querySelector(".termsAndConditions");
        elemento.lastElementChild.innerHTML =("Aceptar Terminos");
    }else{
        let elemento = document.querySelector(".termsAndConditions");
        elemento.lastElementChild.innerHTML =("");

    }


  });