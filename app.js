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
let operator = "";