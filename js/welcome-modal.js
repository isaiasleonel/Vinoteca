
let header = document.querySelector("header");
const modalWelcome = document.querySelector(".modal_welcome");
const closeWelcome = document.querySelector(".cerrar_modal_welcome");

if (!localStorage.getItem("first-time")) {
    header.classList.add("close-header");
    modalWelcome.classList.add("modal_welcome");


    closeWelcome.addEventListener("click", (e) => {
        e.preventDefault();
        modalWelcome.classList.remove("modal_welcome");
        modalWelcome.classList.add("remove-modal");
        header.classList.remove("close-header");
    })
    localStorage.setItem("first-time", 1);
}
else {
    modalWelcome.style.display = "none";
}
