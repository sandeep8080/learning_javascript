// Q1
// var x = 21;

// let fun = function () {
//   console.log(x);
//   let x = 20;
// };

// fun();

// Q2

var a = 1;
let x = 27;
function b() {
  a = 10;
  return;
  function a() { }
}

b();

console.log(a);