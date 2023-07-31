document.addEventListener('DOMContentLoaded', loadModalWelcome());
async function loadModalWelcome() {
    let header = document.querySelector("header");
    const modalWelcome = document.querySelector(".modal_welcome");

    header.classList.add("close-header");
    modalWelcome.classList.add("modal--show-welcome");

    const closeWelcome = document.querySelector(".cerrar_modal_welcome");
    closeWelcome.addEventListener("click", (e) => {
        console.log("estoy aca");
        e.preventDefault();
        modalWelcome.classList.remove("modal_welcome");
        modalWelcome.classList.add("remove-modal");
        header.classList.remove("close-header");
    })
}