// Operators functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === "add") {
        add(a, b);
    } else if (operator === "substract") {
        subtract(a, b);
    } else if (operator === "multiply") {
        multiply(a, b);
    } else if (operator === "divide") {
        divide(a, b);
    }
}

// Variables
let firstInput = 0;
let secondInput = 0;
let operator = ["", false];

const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const equal = document.querySelector('#equal');

const clear = document.querySelector('#clear');

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const dot = document.querySelector('#dot');

const display = document.querySelector('.screen');