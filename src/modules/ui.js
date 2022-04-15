// /src/modules/ui.js - USER INTERFACE class, deals with all modifications to the DOM

// import Store from "./store";
// import Score from "./score";

export default class UI {
  static addScoreUI(score) {
    const scorelist = document.querySelector('#scoresList');
    const li = document.createElement('li');
    li.className = 'liScore';
    const p = document.createElement('p');
    p.className = 'pScore';
    p.textContent = `${score.name}: ${score.score}`;

    li.appendChild(p);
    scorelist.appendChild(li);
  }

  static addEmptyScoresMesg() {
    const scorelist = document.querySelector('#scoresList');
    scorelist.innerHTML = '';

    const item = document.createElement('li'); // creates list item
    item.className = 'noScores';

    const p = document.createElement('p');
    p.className = 'pNoScores';
    p.textContent = 'No scores right now';

    item.appendChild(p);
    scorelist.appendChild(item);
  }

  static displayScoresUI(scores) {
    const scorelist = document.querySelector('#scoresList');
    scorelist.innerHTML = '';

    // const scores = Store.getScores();
    if (scores.length === 0) {
      this.addEmptyScoresMesg();
    } else {
      scores.forEach((score) => this.addScoreUI(score));
    }
  }
}