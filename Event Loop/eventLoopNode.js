console.log('Script Started');

const interval = setInterval(() => {
  debugger;
  console.log('Set Interval');
}, 0);

setTimeout(() => {
  console.log('Set Timeout 1');
  Promise.resolve().
    then(() => console.log('Promise 1')).
    then(() => console.log('Promise 2')).
    then(() => {
      setTimeout(() => {
        console.log('Set Timeout 2');
        Promise.resolve().
          then(() => console.log('Promise 3')).
          then(() => console.log('Promise 4'))
          .then(() => clearInterval(interval));
      }, 0)
    });

}, 0);

Promise.resolve().
  then(() => console.log('Promise 5')).
  then(() => console.log('Promise 6'));
