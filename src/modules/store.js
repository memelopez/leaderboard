// /src/modules/store.js - Store Class: Encapsulates de locacl storage

export default class Store {
  static getGameKey() {
    let gameKey;
    if (localStorage.getItem('gameKey') !== null) {
      gameKey = JSON.parse(localStorage.getItem('gameKey'));
    }
    return gameKey;
  }

  static setGameKey(key) {
    localStorage.setItem('gameKey', JSON.stringify(key));
  }
}