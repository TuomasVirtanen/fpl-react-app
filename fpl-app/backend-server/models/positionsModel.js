const connection = require("../database/db");

const positions = {
  getAllPositions: () =>
    new Promise((resolve, reject) => {
      connection.query("SELECT * FROM Position;", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    }),
};

module.exports = positions;
