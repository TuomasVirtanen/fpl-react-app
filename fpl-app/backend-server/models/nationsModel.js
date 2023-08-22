const connection = require("../database/db");

const nations = {
  getAllNations: () =>
    new Promise((resolve, reject) => {
      connection.query("SELECT * FROM Nationality;", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    }),
};

module.exports = nations;
