function start() {
  setTimeout(() => {
    console.log('Hi I am looping Infinitely today');
    start();
  }, 3000);
};
start();