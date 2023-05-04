/**
 * Interview question
 * Implement counter function
 * var c = counter();
 * c.add(5)
 * c.add(9)
 * c.retrieve // 14
 */


// Using constructor function
// function Counter() {
//   let sum = 0;
//   this.add = (a) => {
//     sum = sum + a;
//   };
//   this.retrieve = () => {
//     return sum;
//   }
// };

// var c = new Counter();

/**
 * Similar can be implemented using classes
 */

//  class Counter {
//   constructor() {
//     let sum = 0;
//     this.add = (a) => {
//       sum = sum + a;
//     };
//     this.retrieve = () => {
//       return sum;
//     };
//   }
// };


// Using clouser

/**
 * can return multiple function in clousers
 * sum is a PRIVATE variable. Cant access sum, directly outside counter
 * 
 */
function counter() {
  let sum = 0;
  return {
    add: (a) => sum += a,
    retrieve: () => sum
  }
};

var c = counter();
c.add(5);
c.add(6);
console.log(c.retrieve());
