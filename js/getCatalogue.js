"use strict";
import { bodega } from './bd.js';

function mostrar() {
    let card = document.querySelector('#card-get');
    card.innerHTML = '';
    for (const vino of bodega) {
        card.innerHTML +=
            ` <div class="card-container">
            <div>
            <img src= "${vino.thumb}" class="card-container__img" width= "120" height = "20"/>
            <div class="card-body">
                <p class="card-container__trip-name" >${vino.name}</p>
                <div class="card-container__date">
                    <p class="oferta"> ${vino.region}</p>
                </div>
                <p class="card-container__price">$${vino.price}</p>
                <button id="btn-catalogue-${vino.id} " class="card-container__btn-pay">AGREGAR</button>
            </div>
        </div>
    </div>`;
    }
}
mostrar();

