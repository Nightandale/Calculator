let numButtons = document.querySelector(".buttons")
/* let button = document.createElement("div");
button.className = "button"
button.textContent = "temp"
numButtons.appendChild(button) */

let operators = ["+", "-", "*", "/"]

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    let numb = a / b;
    return Math.round(numb * 100) / 100;
}

function operate(operator, a, b){
    switch(operator){
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
    }
}