"use strict";

import { Product } from "./model/product.js";

window.addEventListener('load', init, false);

function init() {
    var productsContainer = document.getElementById('productsContainer');

    var payButton = document.getElementById('doneButton')

    payButton.innerHTML = "Pay";
    payButton.onclick = onBuyButton

    var products = [];
    loadData();

    function loadData() {
        var request = new XMLHttpRequest();
        request.open('GET', 'js/data/data.json');
        request.onload = function () {

            var jsonData = JSON.parse(request.response);
            var data = jsonData.data;

            data.forEach(productData => {
                var product = new Product(productData.name, productData.price, productData.image);
                products.push(product);

            });

            showProducts();
        }

        request.send();
    }

    function showProducts() {
        products.forEach(product => {
            var container = document.createElement('div');
            container.className = "product_container";
            productsContainer.appendChild(container);

            var title = document.createElement('p');
            title.className = 'product_title';
            title.innerHTML = product.name;
            container.appendChild(title);

            var price = document.createElement('p');
            price.className = 'product_price';
            price.innerHTML = '$' + product.price;
            container.appendChild(price);

            var image = document.createElement('img');
            image.className = 'product_image';
            image.src = product.image;
            container.appendChild(image);

            var addButton = document.createElement('div');
            addButton.className = 'product_add_button';
            addButton.innerHTML = 'ADD';
            container.appendChild(addButton);
            addButton.onclick = onAddbutton;

        });
    }

    function onAddbutton(event) {
        console.log('onAddButton', event);
    }


    function onBuyButton(event) {
        console.log('onBuyButton', event);
    }
}
