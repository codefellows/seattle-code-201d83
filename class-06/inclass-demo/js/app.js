'use strict';

// Jose is a volunteer for the kitten rescue... they need a way to get the profiles of kittens who will be up for adoption onto the page... new kittens come in and they need to be added. Jose knows a little bit of javascript... he can make objects!

// what are we going to display?
// Kittens
// figure out what info about each kitten we need to show:
// name
// age with a function
// interests []
// isGoodWithDogs
// isGoodWithCats
// isGoodWithKids
// photo

// STEP 1: WINDOW INTO THE DOM
// 1 way - document.getElementById - method that will take a string for ID
// 2nd - document.querySelector - method that takes in a string, id, class, element type

let kittenSection = document.getElementById('kitten-profiles');

console.log(kittenSection);
console.dir(kittenSection);


let frankie = {
  name: 'Frankie',
  age: 0,
  interests: ['wet food', 'fish toys', 'cat nip'],
  isGoodWithDogs: false,
  isGoodWithCats: true,
  isGoodWithKids: true,
  photo: 'img/frankie.jpeg',
  getAge: function() {
    this.age = `${randomAge(3,12)} months`;
  }
}

let jumper = {
  name: 'Jumper',
  age: 0,
  interests: ['wet food', 'fish toys', 'cat nip'],
  isGoodWithDogs: false,
  isGoodWithCats: true,
  isGoodWithKids: true,
  photo: 'img/jumper.jpeg',
  getAge: function() {
    this.age = `${randomAge(3,12)} months`;
  }
}

// frankie.getAge();
// jumper.getAge();

console.log(frankie);

// helper function that gets a random age between 3-12 months
function randomAge(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// ********* DOM MANIPULATION ***********

// Step 1 - JS Needs a window into the DOM - normally listed at the top of the JS page

// Step 2 - JS will create an element - document.createElement - method, string of the html element you want create

frankie.render = function() {
  // Step 2 - create the element
  let h2Elem = document.createElement('h2');
  // Step 3 - Give it context if needed (optional)
  h2Elem.textContent = this.name;
  // Step 4 - add it to the DOM -- parent.appendChild(child)
  kittenSection.appendChild(h2Elem);

  let paraElem = document.createElement('p');
  paraElem.textContent = `${this.name} is adorable and is ${this.age}.`
  kittenSection.appendChild(paraElem);

  let ulElem = document.createElement('ul')
  kittenSection.appendChild(ulElem);

  for(let i = 0; i < this.interests.length; i++){
    let currentInterest = this.interests[i];
    let liElem = document.createElement('li');
    liElem.textContent = currentInterest;
    ulElem.appendChild(liElem);
  }

  let imgElem = document.createElement('img');
  imgElem.src = this.photo;
  imgElem.alt = `${this.name} is adorable and is ${this.age}.`
  kittenSection.appendChild(imgElem);
}

jumper.render = function() {
  // Step 2 - create the element
  let h2Elem = document.createElement('h2');
  // Step 3 - Give it context if needed (optional)
  h2Elem.textContent = this.name;
  // Step 4 - add it to the DOM -- parent.appendChild(child)
  kittenSection.appendChild(h2Elem);

  let paraElem = document.createElement('p');
  paraElem.textContent = `${this.name} is adorable and is ${this.age}.`
  kittenSection.appendChild(paraElem);

  let ulElem = document.createElement('ul')
  kittenSection.appendChild(ulElem);

  for(let i = 0; i < this.interests.length; i++){
    let currentInterest = this.interests[i];
    let liElem = document.createElement('li');
    liElem.textContent = currentInterest;
    ulElem.appendChild(liElem);
  }

  let imgElem = document.createElement('img');
  imgElem.src = this.photo;
  imgElem.alt = `${this.name} is adorable and is ${this.age}.`
  kittenSection.appendChild(imgElem);
}


let kittenCadboodle = [frankie, jumper];

function renderAllKittens() {
  for(let i = 0; i<kittenCadboodle.length; i++){
    let currentKitten = kittenCadboodle[i];
    currentKitten.getAge();
    currentKitten.render();
  }
}

renderAllKittens();

// frankie.render();
// jumper.render();

