// /src/modules/leaderAPI - class that deals with API calls

export default class LeaderAPI {
  static async postName(newGameName, url) {
    const response = await fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newGameName),
    });
    const data = await response.json();
    const arrData = data.result.split(' ');
    return arrData[3];
  }

  static async getScores(url, gameKey) {
    const newURL = `${url}${gameKey}/scores/`;
    const response = await fetch(newURL);
    const data = response.json();
    return data;
  }

  static async postScore(name, score1, url, gameKey) {
    const player2send = {
      user: name,
      score: score1,
    };
    const newURL = `${url}${gameKey}/scores/`;

    const response = await fetch(newURL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(player2send),
    });

    return response.json();
  }
}