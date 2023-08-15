const connection = require("../database/db");

const players = {
  getAllPlayers: () =>
    new Promise((resolve, reject) => {
      connection.query("SELECT * FROM Players;", (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),
};

module.exports = players;
