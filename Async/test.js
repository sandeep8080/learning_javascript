// const FirstPromise = () => Promise.resolve('First');
// const secondPromise = () => new Promise((res, rej) => {
//   res(FirstPromise());
// });

// secondPromise().then((result) => result).
//   then(res => console.log(res));
const a = () => Promise.resolve(1);
const b = (value) => Promise.resolve(value + 2);
const c = (value) => Promise.resolve(value + 3);
const d = (value) => Promise.resolve(value + 4);
/**
 * Write a function to resolve an Array of promises recursevily 
 * 
 */

function recPromise(func) {
  if (func.length === 0) return;
  const pro = func.shift();
  pro(1).then((res) => console.log(res));
  recPromise(func);
};

recPromise([
  a, b, c, d
]);

