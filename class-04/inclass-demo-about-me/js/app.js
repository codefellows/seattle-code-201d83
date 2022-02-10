'use strict';

console.log('hey world hey!');

let userName = prompt('What is your name?');

alert(`Welcome ${userName}! Please play my guessing game!`);

// let answerOne = prompt('Do I have a daughter?').toLowerCase();

// if(answerOne === 'yes' || answerOne === 'y'){
//   alert('Yes I do have a daughter!');
// } else if(answerOne === 'no' || answerOne === 'n'){
//   alert('Sorry you are incorrect');
// }


let attempts = 4;
let answer = 10;

while(attempts){
  attempts--;
  let userGuess = prompt('Guess a number'); // '10'
   console.log(typeof userGuess);
  if(+userGuess === answer){
    alert('Yay you are correct!');
    break;
  } else if(userGuess > answer){
    alert('too high');
  } else {
    alert('too low');
  }

  if(attempts === 0) {
    alert('Correct answer was 10')
  }

}

// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// let userGuess = prompt('Guess a number'); numeric input
// let answer = 4;

// Indicates through an alert if the guess is “too high”
// if(userGuess > answer){
//   alert('too high')
// }

// alert if “too low”.
// if(userGuess < answer){
//   alert('too low')
// }

// It should give the user exactly four opportunities to get the correct answer.
// let attempts = 4  - decrement attempts in my code to get to 0

// After all attempts have been exhausted, tell the user the correct answer.
// if(attempts === 0) {  -> alert('Correct answer was 4')}

//Consider using a loop of some sort.
// while or for loop? while attempts != false  while(attempts)  falsy value = 0


// Add a 7th question that has multiple possible correct answers that are stored in an array.

let myArr = ['pink', 'navy', 'red'];
// Give the user 6 attempts to guess the correct answer.

// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.
let newAttempts = 6;
let correctAnswer = false;

while(newAttempts && !correctAnswer){  // slow first guess
  newAttempts--;
  let colorGuess = prompt('Guess a color that i like');

  for(let i = 0; i < myArr.length; i++){  // fast loop quickly go through the array to check if guess is in the array
    if(colorGuess === myArr[i]) {
      alert('yay you guessed right!');
      correctAnswer = true;
    }

  }

}

let favBoyBands = ['bts', 'backstreet boys', 'one direction', 'take that'];

// -------- NESTED FOR LOOP ----------

for (let count = 1; count <= 6; count++) {
  let response = prompt("Name one of my fav boy bands").toLowerCase();
  for (let i = 0; i < favBoyBands.length; i++) {
    let fav = favBoyBands[i];
    if (fav === response) {
      alert('You got one!');
      count = 6;
      break;
    }
  }
}

alert(favBoyBands);
