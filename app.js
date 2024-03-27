// Basic variables
let firstInput = 0;
let secondInput = 0;
let operator = { value: "", selected: false };
const display = document.querySelector('.screen');

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

// Operator buttons actions
const operatorBtns = document.querySelectorAll('.operator-btn')

for (let operatorBtn of operatorBtns) {
    operatorBtn.addEventListener('click', () => {
        operate(operatorBtn.value);
    })
}

// Num buttons actions
const numBtns = document.querySelectorAll('.num-btn');

for (let numBtn of numBtns) {
    numBtn.addEventListener('click', () => {
        displayDigit(numBtn.value);
    })
}

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

const allclearBtn = document.querySelector('#allclear');
const clearBtn = document.querySelector('#clear');

allclearBtn.addEventListener('click', allclear);
clearBtn.addEventListener('click', clear)

// Keyboard support
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
})