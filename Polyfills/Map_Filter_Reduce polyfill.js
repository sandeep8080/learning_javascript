// Polyfill for Array.map

const arr = [1, 2, 3, 4];

const num1 = arr.map((val, idx, arr) => val * 2);
console.log(num1);


// Implementing your own map with the help of Prototypal Inheritance

Array.prototype.myMap = function (callback) {
  this.temp = [];
  for (let i = 0; i < this.length; i++) {
    this.temp[i] = callback(this[i], i, this);
  }
  return this.temp; // returing the new Array
};

const num2 = arr.myMap((val, idx, arr) => val * 3);
console.log(num2);