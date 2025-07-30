const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// BONUS: Keyboard support
document.addEventListener('keydown', (e) => {
  const allowedKeys = '0123456789+-*/.=EnterBackspace';

  if (allowedKeys.includes(e.key)) {
    if (e.key === 'Enter') calculate();
    else if (e.key === 'Backspace') deleteLast();
    else if (e.key === '=') calculate();
    else appendValue(e.key);
  }

  if (e.key === 'c' || e.key === 'C') clearDisplay();
});
