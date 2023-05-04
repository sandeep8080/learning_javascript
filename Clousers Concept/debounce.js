// Without Debounce
// This function will invoked on every keyup event
let count = 0;
function handleChange(e) {
  console.log(`CALLED .. ${count++}`);
};

/**
 * DEBOUNCE
 * Concept is to limit the times when this function is invoked
 */

// debounce(func,delay);

const betterChangeHandler = debounce(handleChange, 1000);

// Debounce function
/**
 * 
 * @param {handler function}  
 * @param {value of the delay} delay 
 * @returns 
 * An anonomyus function [Clouser] 
 * And whenever the use will input more the returned anonomyus function is called
 * devounce function is call only once at the time of initilization
 * Basically return clouser will have the same reference of the timer function which we can use for the debounce concept
 */
function debounce(func, delay) {
  let timer;
  // Returning a clouser with timer variable
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, delay);
  }
};