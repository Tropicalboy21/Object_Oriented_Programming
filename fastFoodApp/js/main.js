"use strict";

import { Product } from "./model/product.js";
import { ProductView } from "./view/ProductView.js";

window.addEventListener('load', init, false);

function init() {
    var productsContainer = document.getElementById('productsContainer');
    var shakesContainer = document.getElementById('shakesContainer');
    var top_bg = document.getElementById('bg');
    var payButton = document.getElementById('doneButton');
    var foodButton = document.getElementById('food_button');
    var shakesButton = document.getElementById('shakes_button');
    var filter = document.getElementById('h_p_c');
    var headerTotal = document.getElementById('headerTotal');
    payButton.innerHTML = "Pay";
    shakesButton.innerHTML = "shakes";
    foodButton.innerHTML = "Food";
    var products = [];
    var selectedProducts = [];
    loadFoodData();
    loadShakesData();


    function loadFoodData() {

        var request = new XMLHttpRequest();
        request.open('GET', 'js/data/food.json');
        request.onload = function () {

            var jsonData = JSON.parse(request.response);
            var data = jsonData.data;

            data.forEach(productData => {
                var product = new Product(productData.id, productData.name, productData.price, productData.image, productData.quantity);
                products.push(product);

            });

            showProducts();

            shakesButton.onclick = shakesWindow;
            foodButton.onclick = foodWindow;
        }

        request.send();
    }

    function loadShakesData() {

        var request = new XMLHttpRequest();
        request.open('GET', 'js/data/shakes.json');
        request.onload = function () {

            var jsonData = JSON.parse(request.response);
            var data = jsonData.data;

            data.forEach(productData => {
                var product = new Product(productData.id, productData.name, productData.price, productData.image, productData.quantity);
                products.push(product);

            });

            showShakes();

            shakesButton.onclick = shakesWindow;
            foodButton.onclick = foodWindow;
        }

        request.send();
    }


    function showProducts() {
        products.forEach(product => {
            if (product.id <= 12)
                var productView = new ProductView(productsContainer, product, addSelectedProduct, removeSelectedProduct);
        });
    }

    function showShakes() {

        products.forEach(product => {
            if (product.id >= 14)
                var productView = new ProductView(shakesContainer, product, addSelectedProduct, removeSelectedProduct);
        });
    }

    function addSelectedProduct(product) {

        let productIndex = selectedProducts.findIndex((element => element.id === product.id))

        if (!selectedProducts.includes(product)) {
            selectedProducts.push(product);
        } else if (selectedProducts.includes(product)) {
            selectedProducts[productIndex].quantity += 1;
        }

        showSelectedProducts();
    }

    function removeSelectedProduct(product) {

        let productIndex = selectedProducts.findIndex((element => element.id === product.id))

        if (selectedProducts.includes(product) && selectedProducts[productIndex].quantity === 1) {
            delete selectedProducts[product]
            if (selectedProducts.length <= 0) {
                clean();
            }
            console.log(selectedProducts)
        } else if (selectedProducts.includes(product)) {
            selectedProducts[productIndex].quantity -= 1;
        }

        showSelectedProducts();
    }

    function clean() {
        location.reload();
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

        var cancelButton = document.createElement('div');
        cancelButton.className = 'cancel_button';
        cancelButton.innerHTML = 'Cancel';
        listContainer.appendChild(cancelButton);
        cancelButton.addEventListener("click", clean);

        headerTotal.innerHTML = `Total: $${total}`

    }

    function shakesWindow(event) {
        productsContainer.style.display = 'none';
        shakesContainer.style.display = 'flex';
    }

    function foodWindow(event) {
        productsContainer.style.display = 'flex';
        shakesContainer.style.display = 'none';
    }


}

