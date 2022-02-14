'use strict';

// console.log('hey world hey!!');
function movieQuestion() {
  let favoiteMovives = ['20,000 leagues under the sea', '12 angry men', 'titanic', 'avengers infinity war', 'inherit the wind', 'trading places', 'the princess bride', 'three billboards outside ebbing, missouri', 'operation odessa', 'wall-e'];
  let guesses = 6;
  let answeredCorrectly = false;
  console.log(guesses);
  while (guesses && answeredCorrectly === false); {
    guesses--;
    let answer8 = prompt('what is one of my favorite movies?');
    for (let i = 0; i < favoiteMovives.length; i++) {
      let movieName = favoiteMovives[i];
      if (movieName === answer8) {
        alert('Correct, that is one of them');
        answeredCorrectly = true;
      }
    }
    console.log(guesses);
    if (guesses === 0) {
      alert(`You have run out of attempts. The possible answers were ${favoiteMovives}`);
    }
  }
}

movieQuestion();
