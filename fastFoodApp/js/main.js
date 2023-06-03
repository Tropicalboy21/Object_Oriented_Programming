"use strict";

import { Product } from "./model/product.js";
import { ProductView } from "./view/ProductView.js";

window.addEventListener('load', init, false);

function init() {
    var productsContainer = document.getElementById('productsContainer');
    var payButton = document.getElementById('doneButton');
    var headerTotal = document.getElementById('headerTotal');
    payButton.innerHTML = "Pay";
    var products = [];
    var selectedProducts = [];
    loadData();

    function loadData() {

        var request = new XMLHttpRequest();
        request.open('GET', 'js/data/data.json');
        request.onload = function () {

            var jsonData = JSON.parse(request.response);
            var data = jsonData.data;

            data.forEach(productData => {
                var product = new Product(productData.id, productData.name, productData.price, productData.image, productData.quantity);
                products.push(product);

            });

            showProducts();
        }

        request.send();
    }

    function showProducts() {
        products.forEach(product => {
            var productView = new ProductView(productsContainer, product, addSelectedProduct);
        });
    }

    function onAddButton(event) {
        console.log('onAddButton', event);
    }

    function addSelectedProduct(product) {

        let productIndex = selectedProducts.findIndex((element => element.id === product.id))

        if (!selectedProducts.includes(product)) {
            selectedProducts.push(product);
        } else if (selectedProducts.includes(product)) {
            selectedProducts[productIndex].quantity += 1;
        }

        showSelectedProducts();

        console.log(selectedProducts)
        console.log(product.id);
    }

    function showSelectedProducts() {

        listContainer.innerHTML = '';
        var total = 0;

        selectedProducts.forEach(product => {


            var p = document.createElement('p');
            p.innerHTML = product.quantity + ' ' + product.name + ' ' + '$' + (product.price * product.quantity);
            p.className = 'list_product';
            listContainer.appendChild(p);
            total += (product.price * product.quantity);


        });

        headerTotal.innerHTML = `Total: $${total}`
    }
}

