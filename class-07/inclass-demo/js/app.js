'use strict';

let kittenSection = document.getElementById('kitten-profiles');
// let table = document.querySelector('table');
let kittenCaboodle = []; // this will store all my kittens created by my constructor

// ******** CONSTRUCTOR FUNCTION *********

function Kitten(name, interests, isGoodWithCats, isGoodWithDogs, isGoodWithKids, photo) {
  this.name = name;
  this.interests = interests;
  this.isGoodWithCats = isGoodWithCats;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithKids = isGoodWithKids;
  this.photo = photo;
  this.age = 0;

  kittenCaboodle.push(this); // this is pushing all of my instatiated objects into an array
}

// prototype = inherits: each object will inherit this method
Kitten.prototype.getAge = function () {
  this.age = `${randomAge(3, 12)} months`;
}

// renders kitten data to page
Kitten.prototype.render = function () {

  // renders name
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = this.name;
  kittenSection.appendChild(h2Elem);

  // renders age
  let paraElem = document.createElement('p');
  paraElem.textContent = `${this.name} is adorable and is ${this.age}.`
  kittenSection.appendChild(paraElem);

  // renders interests as a list item
  let ulElem = document.createElement('ul')
  kittenSection.appendChild(ulElem);

  for (let i = 0; i < this.interests.length; i++) {
    let currentInterest = this.interests[i];
    let liElem = document.createElement('li');
    liElem.textContent = currentInterest;
    ulElem.appendChild(liElem);
  }

  // renders photo
  let imgElem = document.createElement('img');
  imgElem.src = this.photo;
  imgElem.alt = `${this.name} is adorable and is ${this.age}.`
  kittenSection.appendChild(imgElem);

  // ****** TABLE RENDER TO DOM ******
  let table = document.createElement('table');  // creates table for each kitty
  kittenSection.appendChild(table); // adds table to section

  // creates a row for the table
  let row1 = document.createElement('tr');
  // adds that one row to the table
  table.appendChild(row1);

  // giving my row1 context in the form of 'th' cells that will have text content
  let th1Elem = document.createElement('th');
  th1Elem.textContent = 'Good with Cats';
  row1.appendChild(th1Elem);
  let th2Elem = document.createElement('th');
  th2Elem.textContent = 'Good with Dogs';
  row1.appendChild(th2Elem);
  let th3Elem = document.createElement('th');
  th3Elem.textContent = 'Good with Kids';
  row1.appendChild(th3Elem);

  // creating a second row for my table and adding to the table
  let row2 = document.createElement('tr');
  table.appendChild(row2)

  // giving my row2 context in the form of td cells that will have context
  let td1Elem = document.createElement('td');
  td1Elem.textContent = this.isGoodWithCats;
  row2.appendChild(td1Elem);
  let td2Elem = document.createElement('td');
  td2Elem.textContent = this.isGoodWithDogs;
  row2.appendChild(td2Elem);
  let td3Elem = document.createElement('td');
  td3Elem.textContent = this.isGoodWithKids;
  row2.appendChild(td3Elem);
}


new Kitten('Frankie', ['wet food', 'fish toys', 'cat nip'], true, false, true, 'img/frankie.jpeg');

new Kitten('Jumper', ['dry food', 'crinkle toy', 'treats'], true, false, false, 'img/jumper.jpeg');

new Kitten('Serena', ['mice', 'lazers', 'scratching'], false, false, true, 'img/serena.jpeg');

console.log(kittenCaboodle);

// helper function that gets a random age between 3-12 months
function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// helper function that will loop through kittenCaboodle array and calls getAge and render on each kitten
function renderAllKittens() {
  for (let i = 0; i < kittenCaboodle.length; i++) {
    let currentKitten = kittenCaboodle[i];
    currentKitten.getAge();
    currentKitten.render();
  }
}

renderAllKittens();


// ***** OBJECT LITERALS ********
// reference to old object for frankie

// let frankie = {
//   name: 'Frankie',
//   age: 0,
//   interests: ['wet food', 'fish toys', 'cat nip'],
//   isGoodWithDogs: false,
//   isGoodWithCats: true,
//   isGoodWithKids: true,
//   photo: 'img/frankie.jpeg',
//   getAge: function() {
//     this.age = `${randomAge(3,12)} months`;
//   }
// }




