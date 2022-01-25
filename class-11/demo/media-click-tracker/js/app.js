'use strict';

// Globals
const goatImageSectionTag = document.getElementById('all_goats');
const leftGoatImageTag = document.getElementById('left_goat_img');
const rightGoatImageTag = document.getElementById('right_goat_img');

let totalClicks = 0;

// Variables to store the goats already on the page
let leftGoatOnThePage = null;
let rightGoatOnThePage = null;

const GoatPicture = function (name, imageSrc) {
  this.name = name;
  this.clicks = 0;
  this.timesShown = 0;
  this.url = imageSrc;

  // the allImages array is a property of the GoatPicture constructor
  GoatPicture.allImages.push(this);
};

GoatPicture.allImages = [];

/*
Prevent last picked goats from being picked
      - STRETCH pick all goats evenly as possible
    Math.floor  Math.random() * array.length()
    make sure left and right image are unique
    */

const renderNewGoats = function (leftIndex, rightIndex){
  leftGoatImageTag.src = GoatPicture.allImages[leftIndex].url;
  rightGoatImageTag.src = GoatPicture.allImages[rightIndex].url;
};

const pickNewGoats = function(){
  const leftIndex = Math.floor(Math.random() * GoatPicture.allImages.length);
  let rightIndex;
  do {
    rightIndex = Math.floor(Math.random() * GoatPicture.allImages.length);
  } while (rightIndex === leftIndex);
  console.log(GoatPicture.allImages[leftIndex].name, GoatPicture.allImages[rightIndex].name);

  leftGoatOnThePage = GoatPicture.allImages[leftIndex];
  rightGoatOnThePage = GoatPicture.allImages[rightIndex];

  renderNewGoats(leftIndex, rightIndex);
};

const handleClickOnGoat = function(event){
  console.log('im still alive');
  // if they can still click, do clicky things
  if(totalClicks < 5){

    const thingWeClickedOn = event.target;
    const id = thingWeClickedOn.id;

    if(id === 'left_goat_img' || id === 'right_goat_img'){
      //track the goats
      // increment the goat image in the left_goat_image slot's clicks
      // if goat is the left goat, increment the left goat)
      if(id === 'left_goat_img'){
        leftGoatOnThePage.clicks++;
      }

      if(id === 'right_goat_img'){
        rightGoatOnThePage.clicks++;
      }

      leftGoatOnThePage.timesShown++;
      rightGoatOnThePage.timesShown++;

      //after we update the old, pick new pictures
      pickNewGoats();
    }
    console.log(event.target.id);
  }
  // increment amount of clicks
  totalClicks++;
  //when they reach total max clicks, remove the clicky function
  if(totalClicks === 5){
    goatImageSectionTag.removeEventListener('click', handleClickOnGoat);
    console.log('you picked 5 goats, thanks!');

    //TODO: display the clicks to the page
  }
};



// leftGoatImageTag.addEventListener('click', handleClickOnGoat);
// rightGoatImageTag.addEventListener('click', handleClickOnGoat);

goatImageSectionTag.addEventListener('click', handleClickOnGoat);
// goatImageSectionTag.removeEventListener('click', handleClickOnGoat);


// Instantiate my image objects

new GoatPicture('Cruising Goat', './assets/images/cruisin-goat.jpg');

new GoatPicture('Float Your Goat', './assets/images/float-your-goat.jpg');
new GoatPicture('Kissing Goat', './assets/images/kissing-goat.jpg');
new GoatPicture('Sweater Goat', './assets/images/sweater-goat.jpg');

//Track the default goats;

leftGoatOnThePage = GoatPicture.allImages[3];
rightGoatOnThePage = GoatPicture.allImages[0];

pickNewGoats();
