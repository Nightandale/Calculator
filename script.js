
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

let displayValue = []

let display = document.querySelector(".display")
let buttons = document.querySelectorAll(".left-buttons>div, .right-buttons>div")
let operatorButtons = document.querySelectorAll(".right-buttons>div")
buttons.forEach((button) => button.addEventListener("click", handleClick))

function handleClick(e){
    buttonMap(e.target.textContent)
}
function displayView(e){    
    displayValue.push(e)
    checkOperators(e)
    display.textContent = displayValue.join('')
}
function clear(){
    displayValue.length = 0;
    display.textContent = ''
    operatorButtons.forEach(
        (operator) => operator.addEventListener("click", handleClick))
}
function checkOperators(e){
    if(displayValue[0] == 0 && displayValue[1] == 0){
        displayValue.pop()
    }
    if(displayValue[0] == 0 && displayValue[1] >0){
        displayValue.shift()
    }
    if(operators.includes(displayValue[0])){
        displayValue.length = 0;
    }
    if(operators.includes(displayValue[displayValue.length-1])
        && operators.includes(displayValue[displayValue.length-2])){
        displayValue.pop()
        displayValue[displayValue.length-1] = e
    }
    
    if((displayValue.filter(value => {
        if(operators.includes(value)){
            return true;
        }
        return false;
    }).length) > 1){
        displayValue.pop()
        operatorButtons.forEach(
            (operator) => operator.removeEventListener("click", handleClick))
    }
   
}
function calculate(displayValue){
    let firstNumber = 0;
    let secondNumber = 0;
    let operator = "";
    let index = 0;
    

    for(let i = 0; i < displayValue.length; i++){
        if(operators.includes(displayValue[i])){
            index = i;
        }
    }
    firstNumber = parseInt(displayValue.slice(0, index).join(''))
    
    operator = displayValue[index];
    if(displayValue.slice(index + 1, displayValue.length).length == 0){
        secondNumber = 0;
    }
    else{
        secondNumber = parseInt(displayValue.slice(index + 1, displayValue.length).join(''));
    }
    console.log(displayValue.slice(secondNumber))
    clear()
    display.textContent = operate(operator, firstNumber, secondNumber)
    displayValue.length = 0;
}

function buttonMap(e)
{
    switch(e){
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            displayView(e);
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            displayView(e);
            break;
        case "C":
            clear();
            break;
        case "=":
            calculate(displayValue)
            break;

    }
}