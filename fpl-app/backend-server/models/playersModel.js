const connection = require("../database/db");

const players = {
  getAllPlayers: () =>
    new Promise((resolve, reject) => {
      connection.query("SELECT * FROM Player;", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    }),
};

module.exports = players;
