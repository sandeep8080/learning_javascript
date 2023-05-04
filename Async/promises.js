/**
 * PROMISES
 */

console.log('Start of Promise Expample');
// return Promise object imediatelly
function xyz() {
  const result = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Executed");
    }, 1000)
  });
  return result;
};

// Attaching handler to the returned Promise Object
const value = xyz().then(res => console.log(res));
console.log(value);
// const rest = xyz().then(res => console.log(res));
// console.log(rest);
console.log('End of Promise Expample');

