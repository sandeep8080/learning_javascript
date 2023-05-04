

// This is a JavaScript coding problem from BFE.dev 

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */

const join = (a, b, c) => {
  return `${a}_${b}_${c}`
}


function curry(fn) {
  return function curried(...args) {
    // if recieved arguments length is more or equal to the given function arguments call 
    // the func with the incoming arguments
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...b) {
        return curried(...args, ...b);
      }
    }
  }
};

const curriedJoin = curry(join);

console.log(curriedJoin(1, 2, 3)); // '1_2_3'

console.log(curriedJoin(1)(2, 3)); // '1_2_3'

console.log(curriedJoin(1, 2)(3)); // '1_2_3'

console.log(curriedJoin(1)(2)(3)); // '1_2_3'




