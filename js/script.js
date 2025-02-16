let num1 = 6;
let num2 = 9;
let operator = "/";

const operations = {
  add: (a,b) => a + b,
  minus: (a,b) => a - b,
  multiply: (a,b) => a * b,
  divide: (a,b) => a / b
}



function operate(a, c, b) {

  if(c === "+") {
    return operations.add(a,b);
  }
  else if(c === "-") {
    return operations.minus(a,b);
  }
  else if(c === "/") {
    if(b === 0) {
      alert("Division by 0 is undefined")
    } else {
      return operations.divide(a,b)
    }
  } else {
    return operations.multiply(a,b);
  }
}

console.log(operate(num1,operator, num2))

