const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const btnPlus = document.getElementById("btn-plus");
const btnTimes = document.getElementById("btn-times");
const resultBox = document.getElementById("result-box");
const btnClear = document.getElementById("btn-clear");

btnTimes.addEventListener("click", timesValue);
btnPlus.addEventListener("click", plusValue);
btnClear.addEventListener("click", clearInput);
number1.addEventListener("keyup", inputNumberChange);
number2.addEventListener("keyup", inputNumberChange);

function timesValue(event) {
  const result = Number(number1.value) * Number(number2.value);
  resultBox.innerText = result;
}

function plusValue(event) {
  const result = Number(number1.value) + Number(number2.value);
  resultBox.innerText = result;
}

function inputNumberChange(event) {
  const input = event.target;
  if (isNumber(input.value)) {
    input.classList.remove("input-error");
    return false;
  } else {
    input.classList.add("input-error");
  }
}

function clearInput(event) {
  number1.value = "";
  number2.value = "";
  resultBox.innerHTML = "0";
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
