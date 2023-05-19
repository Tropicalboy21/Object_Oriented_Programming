import { Square } from "./square.js";
import { Circle } from './circle.js';
import { Triangle } from "./triangle.js";
import { Parallelogram } from "./parallelogram.js";
import { Trapezoid } from "./trapezoid.js";
import { BottomRight } from "./bottomRight.js";
import { TopRight } from "./topRight.js";
import { Right } from "./right.js";

"use strict";
window.addEventListener('load', init);
function init() {
    var widthInput = document.getElementById('widthInput');
    var heightInput = document.getElementById('heightInput');
    var heightInput = document.getElementById('heightInput');
    var colorSelect = document.getElementById('colorSelect');
    var formSelect = document.getElementById('formSelect');
    var createButton = document.getElementById('createButton');
    var container = document.getElementById('container');

    createButton.onclick = onCreateButton;

    function onCreateButton() {
        var width = Number(widthInput.value);
        var height = Number(heightInput.value);
        var color = colorSelect.value;
        var figure = formSelect.value;
        if (width > 0 && width <= 100 && height > 0 && height <= 100 && color !== '' && figure !== '') {
            switch (figure) {
                case 'square':
                    var box = new Square(container, width, height, color);
                    break;
                case 'circle':
                    var ball = new Circle(container, width, height, color);
                    break;
                case 'triangle':
                    var triangle = new Triangle(container, width, height, color);
                    break;
                case 'parallelogram':
                    var parallel = new Parallelogram(container, width, height, color);
                    break;
                case 'trapezoid':
                    var Trap = new Trapezoid(container, width, height, color);
                    break;
                case 'bottomRight':
                    var BT = new BottomRight(container, width, height, color);
                    break;
                case 'topRight':
                    var TR = new TopRight(container, width, height, color);
                    break
                case 'Right':
                    var right = new Right(container, width, height, color);
                    break
                default:
                    break
            }
        } else {
            alert('Debe ingresar los datos correctos');
        }
    }
}
