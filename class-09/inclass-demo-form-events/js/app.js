'use strict';


// Step one - grab the element to listen to
let myform = document.getElementById('my-form');

// Step 1: Grab the element that we want to listen to - for the boxes demo
//let myContainer = document.getElementById('container');
//let parentEl = document.getElementById('results');


// Step 3: Define our event handler - callback function
// function handleClick(event) {
//   console.log('this is the event', event);
//   console.log('this is the target', event.target);

//   if (event.target.id === 'box-one') {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'Box 1 was clicked!';
//     parentEl.append(pEl);
//   } else if (event.target.id === 'box-two') {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'Box 2 was clicked!';
//     parentEl.append(pEl);
//   } else if (event.target.id === 'box-three') {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'Box 3 was clicked!';
//     parentEl.append(pEl);
//   } else {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'CLICK THE BOXES ONLY!';
//     parentEl.append(pEl);
//   }
// }

// Step 2: Add the Event Listener
// myContainer.addEventListener('click', handleClick);


// Step 3 - event handler

function handleSubmit(event){
  event.preventDefault();
  console.log('submit');

  let name = event.target.fullName.value;
  console.log('name', name);

  let age = parseInt(event.target.age.value);
  console.log('age', age);
  console.log(typeof age);
}


// Step 2 - attached your event listener to your element and tell it what event to listen for and pass in our Event handler (callback function)

myform.addEventListener('submit', handleSubmit);
