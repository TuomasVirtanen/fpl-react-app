const connection = require("../database/db");

const teams = {
  getAllTeams: () =>
    new Promise((resolve, reject) => {
      connection.query("SELECT * FROM Team;", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    }),
};

module.exports = teams;
