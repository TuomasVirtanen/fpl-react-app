const connection = require("../database/db");

const playerStats = {
  getAllPlayerSeasonStats: () =>
    new Promise((resolve, reject) => {
      connection.query("SELECT * FROM Player_Season_Stats;", (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),
  addPlayerSeasonStats: (values) =>
    new Promise((resolve, reject) => {
      connection.query(
        `INSERT INTO Player_Season_Stats (player_id, season_id, team_id, position_id, nationality_id, fpl_points, games_played, minutes_played, goals, assists, clean_sheets, goals_conceded, own_goals, yellow_cards, red_cards, missed_penalties, saved_penalties)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        values,
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    }),
};

module.exports = playerStats;
