/**
 * CALLBACK'S AND CALLBACK HELL
 */

console.log('START OF CALL BACK HELL');
const place = {
  city: "Palwal",
  state: "Haryana",
  pinCode: 121102,
};
function myName(name, callback) {
  setTimeout(() => {
    callback(name);
  }, 1000);
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

// Now I want to call the function one after other
// Call Back hell
const message = myName('Sandeep', (mes) => {
  console.log(mes);
  myAge(26, (mes) => {
    console.log(mes);
    myPlace(place, (mes) =>
      console.log(mes)
    );
  })
});

console.log('END OF CALL BACK HELL');