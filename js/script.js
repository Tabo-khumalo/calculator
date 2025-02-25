let firstNum = "";
let secondNum = "";
let step = 0;
let operator = "";
let result = ""
let display = document.getElementById("display");

let firstNumArr = [];
let secNumArr = [];


function allClear() {
  firstNum = "";
  secondNum = "";
  firstNumArr = [];
  secNumArr = [];
  step = 0;
  operator = "";
  result = ""
  display.textContent = "";
}

function clear() {
  console.log("clear char");
}

function getPeriod() {
  console.log(".")
}

function getPercent() {
  console.log("num / % * 100")
}

function getOperator (opr) {
  step = 2;
  operator = opr;
}

function getNum(num) {
  if(step === 0 || step === 1) {
    firstNumArr.push(num);
    step = 1;
    firstNum = Number(firstNumArr.join(""));
    display.textContent = firstNum;
  } 
  else if(step === 2) {
    secNumArr.push(num);
    secondNum = Number(secNumArr.join(""))
    display.textContent = secondNum;
  }
}

function operate() {
  if(operator === "+") {
     result = firstNum + secondNum;
     display.textContent = result;
  }
  else if(operator === "-") {
    result = firstNum - secondNum;
    display.textContent = result;
 }
 else if(operator === "*") {
  result = firstNum * secondNum;
  display.textContent = result;
}
else if(operator === "/") {
  result = firstNum / secondNum;
  display.textContent = result;
} 
else if(operator === "%") {
  result = (firstNum / 100) * secondNum;
  display.textContent = result;
}
}