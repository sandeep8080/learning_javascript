console.log("START OF PROMISE CHAINING EXAMPLE");

/**
 * PRMOISE CHANING
 */

function myName() {
  return new Promise((res, rej) => {
    res('Sandeep');
  });
};

function myAge() {
  return new Promise((res, rej) => {
    res(26);
  });
};
function myPlace() {
  return new Promise((res, rej) => {
    const place = {
      city: "Palwal",
      state: "Haryana",
      pinCode: 121102,
    }
    res(place);
  });
};

// Seems Similar to CALL BACK HELL
/*
myName().then(data => {
  console.log(data)
  myAge().
    then(data => {
      console.log(data);
      myPlace().
        then(data => console.log(data))
    })
});
*/

function result() {
  // A Better/Elegant way to write the above code
  myName().then((name) => {
    console.log(`My Name is ${name}`);
    return myAge();
  }).then(age => {
    console.log(`Age is ${age}`);
    return myPlace();
  }).then(place => {
    console.log(place);
  });
};
result();


console.log("END OF PROMISE CHAINING EXAMPLE");