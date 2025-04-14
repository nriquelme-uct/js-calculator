// Script de calculadora

const display = document.getElementById('display');

let x = 0;
let y = 0;
let result = 0;

let operation = "";

function appendToDisplay(input) {
    if (display.value == "0") {
        display.value = input;
    } else {
        display.value += input;
    }
}

function setOperator(input) {
    x = display.value;

    operation = input;
    display.value = 0;
}

function displayBackspace() {
    if (display.value == "0") {
        return;
    }
    else {
        display.value = display.value.slice(0, -1);
    }
}

function getPercentage() {
    display.value = Number(display.value / 100);
}

function resetDisplay() {
    x = 0;
    y = 0;
    display.value = x;
}

/*aparentemente esto es un riesgo de seguridad xd
(para evitar futuros errores, voy a mantenerla comentada)
function doTheMath() {
    try {
        display.value = eval(display.value)
    }
    catch (ex) {
        console.error(ex)
    }
}
*/

function doTheMath() {
    try {
        y = display.value;

        if (operation == "+") {
            result = Number(x) + Number(y);
        } else if (operation == "-") {
            result = Number(x) - Number(y);
        } else if (operation == "*") {
            result = Number(x) * Number(y);
        } else if (operation == "/") {
            result = Number(x) / Number(y);
        }
        display.value = result
    } catch (ex) {
        console.error(ex);
    }
    
}