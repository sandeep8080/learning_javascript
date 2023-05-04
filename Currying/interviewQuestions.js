// Write a function to currying function
/* 
evaulate('sum')()() => Add two numbers
evaulate('Subtract')()() => Subtract
evaulate('Multply')()() => Multply
evaulate('divide')()() => divide
*/


function sum(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function subtract(a, b) {
  return a - b;
}

function evaluate(operation) {
  return function (a) {
    return function (b) {
      return operation(a, b);
    }
  }
};

const a = evaluate(sum)(1)(2); //3
const b = evaluate(subtract)(2)(2); //
const c = evaluate(multiply)(4)(2);
const d = evaluate(divide)(4)(2);

console.log(a, b, c, d);


