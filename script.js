let display = document.getElementById('display');
let currentValue = '0';
let currentOperation = null;
let hasDecimal = false;

function appendNumber(num) {
  if (currentValue === '0' || currentValue === '-0') {
    currentValue = num;
  } else {
    currentValue += num;
  }
  updateDisplay();
}

function appendDecimal() {
  if (!hasDecimal) {
    currentValue += '.';
    hasDecimal = true;
    updateDisplay();
  }
}

function setOperation(operation) {
  currentOperation = operation;
  currentValue += ' ' + operation + ' ';
  hasDecimal = false;
  updateDisplay();
}

function calculateResult() {
  let result = eval(currentValue);
  currentValue = result.toString();
  currentOperation = null;
  hasDecimal = currentValue.includes('.');
  updateDisplay();
}

function clearDisplay() {
  currentValue = '0';
  currentOperation = null;
  hasDecimal = false;
  updateDisplay();
}

function toggleSign() {
  currentValue = (parseFloat(currentValue) * -1).toString();
  updateDisplay();
}

function applyPercentage() {
  currentValue = (parseFloat(currentValue) / 100).toString();
  hasDecimal = currentValue.includes('.');
  updateDisplay();
}

function deleteLastDigit() {
  if (currentValue.length > 1) {
    currentValue = currentValue.slice(0, -1);
  } else {
    currentValue = '0';
  }
  if (!currentValue.includes('.')) {
    hasDecimal = false;
  }
  updateDisplay();
}

function updateDisplay() {
  display.value = currentValue;
}
