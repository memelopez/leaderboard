// /scr/index.js - entry point

import './styles.css';
import UI from './modules/ui';
import validateInput from './modules/helpfulFuncs';
import Score from './modules/score';

const scorez = [];
const score1 = new Score('Elmer', 10);
const score2 = new Score('Ja', 12);
const score3 = new Score('Lebron', 6);

scorez.push(score1);
scorez.push(score2);
scorez.push(score3);

// Event: on content load
document.addEventListener('DOMContentLoaded', UI.displayScoresUI(scorez));

// Event: submit form new score
document.querySelector('#addScore').addEventListener('submit', (e) => {
  e.preventDefault();

  const newName = document.querySelector('#userName').value.trim();
  const newScore = parseInt(document.querySelector('#userScore').value.trim(), 10);

  if (validateInput(newName, newScore)) {
    // add new score
  } else {
    console.log('Please make sure that name is non-empty string and score is an interger');
  }

  document.querySelector('#userName').value = '';
  document.querySelector('#userScore').value = '';
});