// /src/modules/score.js - class that represents a single score

export default class Score {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  score2str() {
    return `Name: ${this.name} Score: ${this.score}`;
  }
}