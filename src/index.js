// /scr/index.js - entry point

import './styles.css';
import UI from './modules/ui';
import validateInput from './modules/helpfulFuncs';
import Score from './modules/score';
import Store from './modules/store';
import LeaderAPI from './modules/leaderAPI';

// variables
let scoreList = [];
let gameKey;
const baseURL = `
  https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/`;
const newGameName = { name: "Elmer's Glue" };

// methods
const trans2score = (list) => {
  list.forEach((elem) => {
    const neo = new Score(elem.user, parseInt(elem.score, 10));
    scoreList.push(neo);
  });
};

const iniateLeaderboard = () => {
  gameKey = Store.getGameKey();
  if (!gameKey) { // NO gameKey in localStorage
    LeaderAPI.postName(newGameName, baseURL).then((res) => {
      Store.setGameKey(res);
      gameKey = res;
      LeaderAPI.getScores(baseURL, gameKey).then((res) => {
        const tempList = res.result;
        trans2score(tempList);
        UI.displayScoresUI(scoreList);
      });
    });
  } else { // gameKey is in localStorage
    LeaderAPI.getScores(baseURL, gameKey).then((res) => {
      const tempList = res.result;
      trans2score(tempList);
      UI.displayScoresUI(scoreList);
    });
  }
};

// Event: on content load
document.addEventListener('DOMContentLoaded', iniateLeaderboard());

// Event: submit form new score
document.querySelector('#addScore').addEventListener('submit', (e) => {
  e.preventDefault();

  const newName = document.querySelector('#userName').value.trim();
  const newScore = parseInt(document.querySelector('#userScore').value.trim(), 10);

  if (validateInput(newName, newScore)) {
    // add new score
    const neo = new Score(newName, newScore);
    scoreList.push(neo);
    LeaderAPI.postScore(newName, newScore, baseURL, gameKey);
    UI.displayScoresUI(scoreList);
  } else {
    // console.log('Please make sure that name is non-empty string and score is an interger');
  }

  document.querySelector('#userName').value = '';
  document.querySelector('#userScore').value = '';
});

// Event: when refresh button is clicked
document.querySelector('#refresh').addEventListener('click', () => {
  LeaderAPI.getScores(baseURL, gameKey).then((res) => {
    const tempList = res.result;
    scoreList = [];
    trans2score(tempList);
    UI.displayScoresUI(scoreList);
  });
});