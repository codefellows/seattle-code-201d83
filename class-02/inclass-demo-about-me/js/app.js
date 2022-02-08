'use strict';

console.log('hey world hey!');

let userName = prompt('What is your name?');

alert(`Welcome ${userName}! Please play my guessing game!`);

let answerOne = prompt('Do I have a daughter?').toLowerCase();

if(answerOne === 'yes' || answerOne === 'y'){
  alert('Yes I do have a daughter!');
} else if(answerOne === 'no' || answerOne === 'n'){
  alert('Sorry you are incorrect');
}
