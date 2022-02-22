'use strict';

// console.log('hey there hey!');

// ******** GLOBAL VARIABLES *******

let votesAllowed = 15; // decrement in my code to end the voting round
// let votesAllowed = 0; increment in my code to end the voting round

// Goat Storage
let allGoats = [];

//  DOM REFERENCES
let myContainer = document.getElementById('container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
console.log(imgOne);
// let resultsBtn = document.getElementById('show-results-btn');
// let showResults = document.getElementById('display-results-list');


// Canvas Element for Chart.js
let ctx = document.getElementById('my-chart');


// ********* CONSTRUCTOR *************

function Goat(name, fileExtension = 'jpg') {
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  this.src = `img/${name}.${fileExtension}`;

  allGoats.push(this);
}

// OR you can create it like this to add the complete file path when instantiating
// function Goat(name, img){
//   this.name = name;
//   this.img = img;
// }
// new Goat('bunny-goat', 'img/bunny-goat.png');

new Goat('bunny-goat', 'png');
new Goat('cool-goat');
new Goat('cruisin-goat');
new Goat('float-your-goat');
new Goat('goat-out-of-hand');
new Goat('kissing-goat');
new Goat('sassy-goat');
new Goat('smiling-goat');
new Goat('sweater-goat');

console.log(allGoats);


// Executable Code


// make sure they're random
// need a random number between 0 and the length-1
function getRandomIndex() {
  return Math.floor(Math.random() * allGoats.length);
}


// render images
function renderImgs() {
  let goatOneIndex = getRandomIndex();
  let goatTwoIndex = getRandomIndex();

  // need the validation to make sure they do not show up in the same round
  // NOTE: Your lab will require you to have 3 unique images per round
  // HINT: Consider using a container to store your random indexes and then validate if there are 3 unique numbers in that container

  while (goatOneIndex === goatTwoIndex) {
    goatTwoIndex = getRandomIndex();
  }

  imgOne.src = allGoats[goatOneIndex].src;
  imgOne.alt = allGoats[goatOneIndex].name;
  allGoats[goatOneIndex].views++;

  imgTwo.src = allGoats[goatTwoIndex].src;
  imgTwo.alt = allGoats[goatTwoIndex].name;
  allGoats[goatTwoIndex].views++;
}

renderImgs();


// ********* EVENT LISTENERS *******

// *** EVENT LISTENER #1 - Clicks

// EVENT HANDLER - CALL BACK

function handleClick(event) {
  votesAllowed--;

  let imgClicked = event.target.alt;

  for (let i = 0; i < allGoats.length; i++) {
    if (imgClicked === allGoats[i].name) {
      allGoats[i].clicks++;
    }
  }

  // rerender 2 new goat images
  renderImgs();

  // once voting rounds completed -  stop clicks
  if (votesAllowed === 0) {
    myContainer.removeEventListener('click', handleClick);

    // Calls my render chart function once voting has ended
    renderChart();
  }
}

// EVENT #2 - BTN to show results - render list items

// function handleShowResults(event){  //eslint-disable-line
//   // if no more votes - then render a list

//   if(votesAllowed === 0){
//     for(let i = 0; i < allGoats.length; i++){
//       let li = document.createElement('li');
//       li.textContent = `${allGoats[i].name} was viewed ${allGoats[i].views} times, and was voted for ${allGoats[i].clicks} times.`;
//       showResults.appendChild(li);
//     }
//   }
// }


// Function that will render the chart once votings are done

function renderChart() {

  // array to hold all goat names for labels on bottom of chart
  let goatNames = [];

  // data for each dataset
  let goatClicks = [];
  let goatViews = [];

  // for loop that will populate the above array dynamically
  for(let i = 0; i < allGoats.length; i++){
    goatNames.push(allGoats[i].name);
    goatClicks.push(allGoats[i].clicks);
    goatViews.push(allGoats[i].views);
  }


  let chartObject = {
    type: 'bar',
    data: {
      labels: goatNames,
      datasets: [{ // array of objects - each object is a bar on the chart
        label: '# of Clicks',
        data: goatClicks,
        backgroundColor: [
          'red'
        ],
        borderColor: [
          'red'
        ],
        borderWidth: 1,
        hoverBorderColor: 'black'
      },
      {
        label: '# of Views',
        data: goatViews,
        backgroundColor: [
          'blue'
        ],
        borderColor: [
          'blue'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  const myChart = new Chart(ctx, chartObject);
}







// Step 2: Grab what we want to listen to
myContainer.addEventListener('click', handleClick);

// resultsBtn.addEventListener('click', handleShowResults);
