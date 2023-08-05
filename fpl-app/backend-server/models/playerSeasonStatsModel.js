const db = require("../database/db");

const getPlayerSeasonStats = (callback) => {
  const query = "SELECT * FROM Player_Season_Stats";
  db.all(query, (err, rows) => {
    if (err) {
      console.error("Error retrieving data:", err.message);
      callback(err, null);
    } else {
      callback(null, rows);
    }
  });
};

const addPlayerSeasonStats = (data, callback) => {
  const query = `INSERT INTO Player_Season_Stats (player_id, season_id, team_id, position_id, nationality_id, fpl_points, games_played, minutes_played, goals, assists, clean_sheets, goals_conceded, own_goals, yellow_cards, red_cards, missed_penalties, saved_penalties)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [
    data.player_id,
    data.season_id,
    data.team_id,
    data.position_id,
    data.nationality_id,
    data.fpl_points,
    data.games_played,
    data.minutes_played,
    data.goals,
    data.assists,
    data.clean_sheets,
    data.goals_conceded,
    data.own_goals,
    data.yellow_cards,
    data.red_cards,
    data.missed_penalties,
    data.saved_penalties,
  ];

  db.run(query, values, function (err) {
    if (err) {
      console.error("Error adding data:", err.message);
      return callback(err, null);
    }
    const insertedId = this.lastID;
    return callback(null, { ...data, player_season_stats_id: insertedId });
  });
};

module.exports = { getPlayerSeasonStats, addPlayerSeasonStats };
