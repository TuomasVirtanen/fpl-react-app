const playerStats = require("../models/playerSeasonStatsModel");
const players = require("../models/playersModel");

const getAllPlayerSeasonStats = async (req, res) => {
  const response = await playerStats.getAllPlayerSeasonStats();
  if (response) {
    res.send(response);
  }
};

const getAllPlayers = async (req, res) => {
  const response = await players.getAllPlayers();
  if (response) {
    res.send(response);
  }
};

module.exports = { getAllPlayerSeasonStats, getAllPlayers };
