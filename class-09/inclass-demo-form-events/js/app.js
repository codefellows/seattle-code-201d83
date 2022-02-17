'use strict';


// Step one - grab the element to listen to
let myform = document.getElementById('my-form');


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
