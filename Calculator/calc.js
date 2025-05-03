let operator = null;

function setOperator(op) {
  operator = op;
}

function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let resultText = "";

  if (isNaN(num1) || isNaN(num2)) {
    resultText = "Please enter valid numbers.";
  } else if (!operator) {
    resultText = "Please select an operator.";
  } else {
    switch (operator) {
      case "+":
        resultText = `${num1 + num2}`;
        break;
      case "-":
        resultText = `${num1 - num2}`;
        break;
      case "*":
        resultText = `${num1 * num2}`;
        break;
      case "/":
        if (num2 === 0) {
          resultText = "Cannot divide by zero.";
        } else {
          resultText = `${num1 / num2}`;
        }
        break;
    }
  }

  document.getElementById("result").textContent = `Result: ${resultText}`;
}

function resetCalc() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").textContent = "";
  operator = null;
}
