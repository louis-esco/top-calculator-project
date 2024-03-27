// Operators functions
function operate(operator, a, b) {
    if (operator === "") {
        return parseFloat(display.textContent);
    }
    if (operator === "add") {
        return (a + b).toFixed(3);
    } else if (operator === "subtract") {
        return (a - b).toFixed(3);
    } else if (operator === "multiply") {
        return (a * b).toFixed(3);
    } else if (operator === "divide") {
        return (a / b).toFixed(3);
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

// Displays digits when clicked
function displayDigit(num) {
    if (operator[1] === true || display.textContent === '0') {
        display.textContent = `${num}`;
        operator[1] = false;
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

// Clears the display and resets variables
function clear() {
    [operator[0], operator[1]] = ["", false];
    display.textContent = "0";
    a = 0;
    b = 0;
}

clearBtn.addEventListener('click', clear);

// Click on operator

addBtn.addEventListener('click', () => {
    secondInput = parseFloat(display.textContent);
    firstInput = operate(operator[0], firstInput, secondInput);
    display.textContent = `${firstInput}`;
    operator[0] = "add";
    operator[1] = true;
})

subtractBtn.addEventListener('click', () => {
    secondInput = parseFloat(display.textContent);
    firstInput = operate(operator[0], firstInput, secondInput);
    display.textContent = `${firstInput}`;
    operator[0] = "subtract";
    operator[1] = true;
})

multiplyBtn.addEventListener('click', () => {
    secondInput = parseFloat(display.textContent);
    firstInput = operate(operator[0], firstInput, secondInput);
    display.textContent = `${firstInput}`;
    operator[0] = "multiply";
    operator[1] = true;
})

divideBtn.addEventListener('click', () => {
    secondInput = parseFloat(display.textContent);
    firstInput = operate(operator[0], firstInput, secondInput);
    display.textContent = `${firstInput}`;
    operator[0] = "divide";
    operator[1] = true;
})

equalBtn.addEventListener('click', () => {
    secondInput = parseFloat(display.textContent);
    firstInput = operate(operator[0], firstInput, secondInput);
    display.textContent = `${firstInput}`;
    operator[0] = "";

})