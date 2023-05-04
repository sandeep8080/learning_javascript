/** 
 * MEMOIZATION Concept
 */

// Typicall caching/memoization without using clouser
/*
const cacheName = {};

function storeName(name) {
  if (cacheName[name]) {
    return cacheName[name];
  }
  const rand = Math.floor(Math.random() * 3);
  cacheName[name] = rand;
  return rand;
};


console.log(storeName('Sandeep'));
console.log(storeName('Aman'));
console.log(storeName('Sandeep'));
console.log(storeName('Aman'));

*/

/**
 * Using <CLOUSERS/>
 */

function setAge() {
  const cacheData = {};
  return function (name) {
    if (cacheData[name]) {
      return cacheData[name];
    }
    const age = Math.floor(Math.random() * 3 + 20);
    cacheData[name] = age;
    return age;
  }
};

const age = setAge();

console.log(age('Sandeep'));
console.log(age('Aman'));
console.log(age('Sunny'));
console.log(age('Sandeep'));


function handleBlur(){
  console.log('hi');
  const ele = document.getElementById("test");
  const a =1;
}



