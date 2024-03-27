// Operators functions
function operate(newOperator) {
    secondInput = parseFloat(display.textContent);
    if (operator.value === "" || operator.selected === true) {
        firstInput = displayResult(parseFloat(display.textContent));
    } else if (operator.selected === false) {
        if (operator.value === "add") {
            firstInput = displayResult(firstInput + secondInput);
        } else if (operator.value === "subtract") {
            firstInput = displayResult(firstInput - secondInput);
        } else if (operator.value === "multiply") {
            firstInput = displayResult(firstInput * secondInput);
        } else if (operator.value === "divide") {
            firstInput = displayResult(firstInput / secondInput);
        }
    }
    display.textContent = `${firstInput}`;
    operator.value = newOperator;
    operator.selected = true;
    return firstInput;
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
    operate("add");
})

subtractBtn.addEventListener('click', () => {
    operate("subtract");
})

multiplyBtn.addEventListener('click', () => {
    operate("multiply");
})

divideBtn.addEventListener('click', () => {
    operate("divide");
})

equalBtn.addEventListener('click', () => {
    operate("");
})


document.addEventListener('keyup', (e) => {
    for (let i = 0; i < 10; i++) {
        if (e.key === i.toString()) {
            displayDigit(i);
        }
    }
    if (e.key === '.') {
        displayDigit('.');
    }
    if (e.key === 'Backspace') {
        clear();
    }
    if (e.key === '*') {
        operate("multiply");
    }
    if (e.key === '/') {
        operate("divide");
    }
    if (e.key === '+') {
        operate("add");
    }
    if (e.key === '-') {
        operate("subtract");
    }
    if (e.key === '=' || e.key === 'Enter') {
        operate("");
    }
    console.log(e);
})