"use strict";
const close = document.querySelector(".cerrar_modal");
const open = document.querySelector(".btn-carrito");
const modal = document.querySelector(".modal");

open.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("modal--show");
});

close.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("modal--show");
});

// ------------------btn-menu-toggle-------------
const menu = document.querySelector(".header_contenedor1");
const btnMenu = document.querySelector("#btn-menu").addEventListener("click", (e) => {
    menu.classList.toggle("activado");
});
