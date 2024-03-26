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

const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const equalBtn = document.querySelector('#equal');

const clearBtn = document.querySelector('#clear');

const oneBtn = document.querySelector('#one');
const twoBtn = document.querySelector('#two');
const threeBtn = document.querySelector('#three');
const fourBtn = document.querySelector('#four');
const fiveBtn = document.querySelector('#five');
const sixBtn = document.querySelector('#six');
const sevenBtn = document.querySelector('#seven');
const eightBtn = document.querySelector('#eight');
const nineBtn = document.querySelector('#nine');
const zeroBtn = document.querySelector('#zero');
const dotBtn = document.querySelector('#dot');

const display = document.querySelector('.screen');

function displayDigit(num) {
    if (operator[1] === true || display.textContent === '0') {
        display.textContent = `${num}`;
    } else {
        display.textContent += `${num}`;
    }
}

oneBtn.addEventListener('click', () => {
    displayDigit(1);
})
twoBtn.addEventListener('click', () => {
    displayDigit(2);
})
threeBtn.addEventListener('click', () => {
    displayDigit(3);
})
fourBtn.addEventListener('click', () => {
    displayDigit(4);
})
fiveBtn.addEventListener('click', () => {
    displayDigit(5);
})
sixBtn.addEventListener('click', () => {
    displayDigit(6);
})
sevenBtn.addEventListener('click', () => {
    displayDigit(7);
})
eightBtn.addEventListener('click', () => {
    displayDigit(8);
})
nineBtn.addEventListener('click', () => {
    displayDigit(9);
})
zeroBtn.addEventListener('click', () => {
    displayDigit(0);
})