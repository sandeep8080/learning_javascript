/**
 * CALLBACKS
 */

console.log('START OF CALL BACK');
const place = {
  city: "Palwal",
  state: "Haryana",
  pinCode: 121102,
};
function myName(name, callback) {
  setTimeout(() => {
    callback(name);
  }, 100);
};

function myAge(age, cb) {
  setTimeout(() => {
    cb(26);
  }, 1000);
};
function myPlace(place, cb) {
  setTimeout(() => {
    cb(place);
  }, 1000);
};
// Call back function
function display(message) {
  console.log(message);
};

myName('Sandeep', display);
myAge(26, display);
myPlace(place, display);


console.log('END OF CALL BACK');
