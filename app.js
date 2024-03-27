// Operators functions
function operate(operator, a, b) {
    if (operator.value === "" || operator.selected === true) {
        return displayResult(parseFloat(display.textContent));
    }
    if (operator.value === "add") {
        return displayResult(a + b);
    } else if (operator.value === "subtract") {
        return displayResult(a - b);
    } else if (operator.value === "multiply") {
        return displayResult(a * b);
    } else if (operator.value === "divide") {
        return displayResult(a / b);
    }
}

function displayResult(result) {
    const roundedResult = Math.round(result * 1000) / 1000;
    if (roundedResult.toString().length > 10) {
        return roundedResult.toExponential(4);
    } else {
        return roundedResult;
    }
}

// Variables
let firstInput = 0;
let secondInput = 0;
let operator = { value: "", selected: false };

const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const equalBtn = document.querySelector('#equal');

const allclearBtn = document.querySelector('#allclear');
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
    if (operator.selected === true || display.textContent === '0') {
        if (num === '.') {
            display.textContent = '0.';
        } else {
            display.textContent = `${num}`;
        }
        operator.selected = false;
    } else if (display.textContent.length < 10) {
        if (num === '.' && !display.textContent.includes('.') ||
            num !== '.') {
            display.textContent += `${num}`;
        }
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
dotBtn.addEventListener('click', () => {
    displayDigit('.');
})

// Clears the display and resets variables
function allclear() {
    [operator.value, operator.selected] = ["", false];
    display.textContent = "0";
    a = 0;
    b = 0;
}

function clear() {
    [operator.value, operator.selected] = ["", false];
    if (display.textContent.length > 2 || display.textContent.length === 2 && !display.textContent.includes('-')) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = '0';
    }
}

allclearBtn.addEventListener('click', allclear);
clearBtn.addEventListener('click', clear)

// Click on operator

addBtn.addEventListener('click', () => {
    secondInput = parseFloat(display.textContent);
    firstInput = operate(operator, firstInput, secondInput);
    display.textContent = `${firstInput}`;
    operator.value = "add";
    operator.selected = true;
})

subtractBtn.addEventListener('click', () => {
    secondInput = parseFloat(display.textContent);
    firstInput = operate(operator, firstInput, secondInput);
    display.textContent = `${firstInput}`;
    operator.value = "subtract";
    operator.selected = true;
})

multiplyBtn.addEventListener('click', () => {
    secondInput = parseFloat(display.textContent);
    firstInput = operate(operator, firstInput, secondInput);
    display.textContent = `${firstInput}`;
    operator.value = "multiply";
    operator.selected = true;
})

divideBtn.addEventListener('click', () => {
    secondInput = parseFloat(display.textContent);
    firstInput = operate(operator, firstInput, secondInput);
    display.textContent = `${firstInput}`;
    operator.value = "divide";
    operator.selected = true;
})

equalBtn.addEventListener('click', () => {
    secondInput = parseFloat(display.textContent);
    firstInput = operate(operator, firstInput, secondInput);
    display.textContent = `${firstInput}`;
    operator.value = "";
    operator.selected = true;

})