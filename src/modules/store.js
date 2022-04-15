// /src/modules/store.js - Store Class: Encapsulates de locacl storage

export default class Store {
  static getScores() {
    let list;
    if (localStorage.getItem('scores') === null) {
      list = [];
    } else {
      list = JSON.parse(localStorage.getItem('scores'));
    }

    return list;
  }

  static setScores(list) {
    localStorage.setItem('scores', JSON.stringify(list));
  }
}