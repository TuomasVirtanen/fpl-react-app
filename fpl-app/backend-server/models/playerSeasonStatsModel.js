const connection = require("../database/db");

const playerStats = {
  getAllPlayerSeasonStats: () =>
    new Promise((resolve, reject) => {
      const query = `
        SELECT 
          PS.player_season_stats_id, 
          P.first_name,
          P.last_name,
          P.shirt_name,
          T.name AS team_name,
          S.name AS season_name,
          Po.name AS position_name,
          N.name AS nationality_name,
          PS.fpl_points,
          PS.games_played,
          PS.minutes_played,
          PS.goals,
          PS.assists,
          PS.clean_sheets,
          PS.goals_conceded,
          PS.own_goals,
          PS.yellow_cards,
          PS.red_cards,
          PS.missed_penalties,
          PS.saved_penalties
        FROM Player_Season_Stats PS
        JOIN Player P ON PS.player_id = P.player_id
        JOIN Team T ON PS.team_id = T.team_id
        JOIN Season S ON PS.season_id = S.season_id
        JOIN Position Po ON PS.position_id = Po.position_id
        JOIN Nationality N ON PS.nationality_id = N.nationality_id;`;

      connection.query(query, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    }),

  addPlayerSeasonStats: (playerSeasonData) =>
    new Promise((resolve, reject) => {
      console.log(playerSeasonData);
      const insertQuery = `
        INSERT INTO Player_Season_Stats 
        (player_id, season_id, team_id, position_id, nationality_id, fpl_points, games_played, minutes_played, 
        goals, assists, clean_sheets, goals_conceded, own_goals, yellow_cards, red_cards, missed_penalties, saved_penalties)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

      const values = [
        playerSeasonData.player_id,
        playerSeasonData.season_id,
        playerSeasonData.team_id,
        playerSeasonData.position_id,
        playerSeasonData.nationality_id,
        playerSeasonData.fpl_points,
        playerSeasonData.games_played,
        playerSeasonData.minutes_played,
        playerSeasonData.goals,
        playerSeasonData.assists,
        playerSeasonData.clean_sheets,
        playerSeasonData.goals_conceded,
        playerSeasonData.own_goals,
        playerSeasonData.yellow_cards,
        playerSeasonData.red_cards,
        playerSeasonData.missed_penalties,
        playerSeasonData.saved_penalties,
      ];

      connection.query(insertQuery, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    }),
};

module.exports = playerStats;
