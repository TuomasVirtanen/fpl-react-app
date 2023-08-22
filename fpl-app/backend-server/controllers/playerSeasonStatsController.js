const playerStats = require("../models/playerSeasonStatsModel");

const getAllPlayerSeasonStats = async (req, res) => {
  const response = await playerStats.getAllPlayerSeasonStats();
  if (response) {
    res.send(response);
  }
};

const addPlayerSeasonStats = async (req, res) => {
  const playerSeasonData = {
    player_id: req.body.player_id,
    season_id: req.body.season_id,
    team_id: req.body.team_id,
    position_id: req.body.position_id,
    nationality_id: req.body.nationality_id,
    fpl_points: req.body.fpl_points,
    games_played: req.body.games_played,
    minutes_played: req.body.minutes_played,
    goals: req.body.goals,
    assists: req.body.assists,
    clean_sheets: req.body.clean_sheets,
    goals_conceded: req.body.goals_conceded,
    own_goals: req.body.own_goals,
    yellow_cards: req.body.yellow_cards,
    red_cards: req.body.red_cards,
    missed_penalties: req.body.missed_penalties,
    saved_penalties: req.body.saved_penalties,
  };
  const response = await playerStats.addPlayerSeasonStats(playerSeasonData);
  if (response) {
    res.send(response);
  }
};

module.exports = { getAllPlayerSeasonStats, addPlayerSeasonStats };
