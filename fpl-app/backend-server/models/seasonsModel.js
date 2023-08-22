const connection = require("../database/db");

const seasons = {
  getAllSeasons: () =>
    new Promise((resolve, reject) => {
      connection.query("SELECT * FROM Season;", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    }),
};

module.exports = seasons;
