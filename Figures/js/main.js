import { Ball } from './ball.js';
import { Box } from './box.js';
import { Triangle } from './triangle.js';

"use strict";
window.addEventListener('load', init);
function init() {
    var widthInput = document.getElementById('widthInput');
    var heightInput = document.getElementById('heightInput');
    var colorSelect = document.getElementById('colorSelect');
    var typeSelect = document.getElementById('typeSelect');
    var createButton = document.getElementById('createButton');
    var container = document.getElementById('container');

    createButton.onclick = onCreateButton();

    function onCreateButton() {
        var width = Number(widthInput.value);
        var height = Number(heightInput.value);
        var color = colorSelect.value;
        var type = typeSelect.value;
        if (width > 0 && width <= 100 && height > 0 && height <= 100 && color !== '' && type !== '') {

            switch (type) {
                case 'box':
                    var box = new Box(container, width, height, color);
                    break;
                case 'ball':
                    var ball = new Ball(container, width, height, color);
                    break;
                case 'triangle':
                    var triangle = new Triangle(container, width, height, color);
                    break;
                default:
                    break;
            }

        } else {
            alert('Debe ingresar los datos correctos');
        }
    }
}