/**
 * JS Data Types
 * - Primitive
 * - Structural/Referential
 *  */

// All primitive data types are immutable and pass by value

let res = 'Sandeep';
res[0] = 'M'; // This is call Mutation
console.log(res); // Sandeep

res = 'Sunny'; // This is not Mutation but its reassignments
console.log(res); // Sunny

/** 
 * Reassignments are not same as mutation
 * let/const/var has nothing to contribute towards mutation
 */

// Structural data is Mutable and pass by reference

const xArr = [0, 1, 2, 3];
const yArr = xArr;

// Mutation
yArr[0] = 9;

console.log(yArr); // [9,1,2,3]
console.log(xArr); // [9,1,2,3]

// Shallow Copy Vs Deep Copy

const zArr = [...yArr, 10]; // Shallow copy of yArr using Spread operator
console.log(zArr); // [9,1,2,3,10]
console.log(yArr); // [9,1,2,3]

console.log(xArr === yArr); // True [share the same reference]
console.log(yArr === zArr); // false [Do not share the same reference]

const obj1 = {
  name: 'Sandeep'
};

const obj2 = {
  name: 'Sandeep'
};

console.log(obj1 === obj2); // false [as both do have the same value but the references are different]
const obj3 = obj2;

const obj4 = Object.assign({}, obj2); // shallow copy
obj4.age = 26;
obj3.city = 'Palwal';
console.log(obj2, obj3);
console.log(obj4);

//! Nested Structured data types still share the same reference even after a shallow copy
// For nested data types Object.assign & spread operator does not work

const xxArr = [0, 1, 2, [3, 4, 5]];
const yyArr = [...xxArr]; // Shallow Copy
yyArr[3].push(99);
console.log(yyArr);
console.log(xxArr);
console.log(xxArr === yyArr);