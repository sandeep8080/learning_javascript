/**
 * CURRYING IN JAVASCRIPT
 * Used the same implementation of Clousers concept
 * Transforming the func(a,b) to fn(a)(b)
 */

function sum(a, b) {
  return a + b;
};

// console.log(sum(2, 3));

// implementing currying => Imperative style Programming

// function curry(fn) {
//   return function (a) {
//     return function (b) {
//       return fn(a, b);
//     }
//   }
// };


// Functional/Declarative style implementation
const curry = fn => a => b => fn(a, b);

const currying = curry(sum);

console.log(currying(1)(2));
console.log(currying(2)(3));


