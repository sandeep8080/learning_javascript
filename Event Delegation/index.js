console.log('Stript loaded');
const list = document.getElementById("idListContainer");
const div = document.querySelector('div');
const html = document.querySelector('html');

// Event Bubbling
list.addEventListener('click', (e) => {
  console.log(e);
});

div.addEventListener('click', (e) => {
  console.log('Clicked!!');
});

html.addEventListener('click', (e) => {
  console.log('Clicked Reached to Html tag');
})

// Event Capturing
list.addEventListener('click', (e) => {
  console.log(e);
}, true);

div.addEventListener('click', (e) => {
  console.log('Clicked!!');
}, true);

html.addEventListener('click', (e) => {
  console.log('Clicked Reached to Html tag');
}, true)
