// Impement the Infinite Currying sum(1)(2)(3)(4)()

function sum() {
  return function add(a) {
    return function (b) {
      if (b) {
        return add(a + b);
      }
      return a;
    }
  }
};

const sdd = sum();
console.log(sdd(1)(2)(3)(4)());