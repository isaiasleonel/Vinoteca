"use strict";
import { bodega } from './bd.js';

function mostrar() {
    let card = document.querySelector('#card-get');
    card.innerHTML = '';
    for (const vino of bodega) {
        card.innerHTML +=
            ` <div class="card-container" data-text="Oferta!">
            <div>
            <img src= "${vino.thumb}" class="card-container__img" width= "120" height = "20"/>
            <div class="card-body">
                <p class="card-container__trip-name" >${vino.name}</p>
                <div class="card-container__date">
                    <p class="oferta"> ${vino.region}</p>
                </div>
                <p class="card-container__price">$USD ${vino.price}</p>
                <button id="btn-catalogue-${vino.id} " class="card-container__btn-pay">AGREGAR</button>
            </div>
        </div>
    </div>`;
    }
}
mostrar();

const searchInput = document.querySelector("#search");
const cards = document.querySelectorAll(".card-container");

function filterCards(searchQuery) {
    let nothingFound = document.querySelector("#nothing-alert");
    let number = 0;
    cards.forEach(function (card) {
        let name = card.querySelector(".card-container__trip-name").textContent.toLowerCase();

        if (name.includes(searchQuery.toLowerCase())) {
            nothingFound.style.display = "none";
            card.style.display = "block";
            number++;
        }
        else {
            card.style.display = "none";
        }
    });
    if (number == 0) {
        nothingFound.style.display = "block";
    }
}

searchInput.addEventListener("input", function () {
    const searchQuery = searchInput.value.trim();
    filterCards(searchQuery);
});