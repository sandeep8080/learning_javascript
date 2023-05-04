/**
 * ASYNC & AWAIT
 */

function getName(name) {
  return Promise.resolve(name);
};

function getAge(name) {
  const data = {
    'Sandeep': 27,
    'Sunny': 24,
    'Aman': 29,
  };
  const result = data[name];
  return Promise.resolve(result);
};

function getCompany(company) {
  return Promise.resolve(company);
};

// function getDetails() {

//   const result = getName('Sandeep').then((name) => {
//     console.log(name);
//     return getAge(name);
//   }).then(age => {
//     console.log(age);
//     return getCompany('PS');
//   }).then((org) => console.log(org));

//   // const result2 = getCompany('PS').then((org) => console.log(org));

//   /**
//    * result2 will print first after printing age due to event loop execution
//    */
// }

// Above implementation of Promise chaining is rewritten using async and await 
async function getDetails() {
  const name = await getName('Sunny');
  const age = await getAge(name);
  const org = await getCompany('Agrowave');
  console.log(name, age, org);
}

getDetails();

