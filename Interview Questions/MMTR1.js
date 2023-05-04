/**
 * Write the below function using Prototypal Inheritance
 * let num = new Mathematics(5).add(5).sub(8).add(8).getVal(); // 10
 *  
 */

// Using Prototypal Inheritance
function Mathematics(val) {
  this.value = val;
};

Mathematics.prototype.add = function (val) {
  this.value += val;
  return this;
}
Mathematics.prototype.sub = function (val) {
  this.value -= val;
  return this;
}
Mathematics.prototype.getVal = function () {
  return this.value;
}

let num = new Mathematics(5).add(5).sub(8).add(8).getVal();
console.log(num) //


// Using Constructor function or Classes Implementation

/**
function Mathematics(val) {
  this.value = val;
  this.add = (val) => {
    this.value += val;
    return this;
  }
    ;
  this.sub = (val) => {
    this.value -= val;
    return this;
  }
  this.getVal = () => {
    return this.value;
  }
}

let num1 = new Mathematics(5).add(5).sub(8).add(8).getVal();

let num = new Mathematics(2);
num.add(3);
num.sub(2);
num.add(7);
console.log(num.getVal());

*/

// Using Clousers but not with FUNCTION CHAINING

function Math(val) {
  let value = val;
  return {
    add: (val) => {
      value += val;
    },
    sub: (val) => {
      value -= val;
    },
    getVal: () => value,
  }
};

const cNum = Math(1);
cNum.add(2);
cNum.sub(2);
cNum.add(3);
console.log(cNum.getVal());