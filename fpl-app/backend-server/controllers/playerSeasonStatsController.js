const playerSeasonStatsModel = require("../models/playerSeasonStatsModel");

const getAllPlayerSeasonStats = (req, res) => {
  playerSeasonStatsModel.getPlayerSeasonStats((err, data) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json(data);
  });
};

const addPlayerSeasonStats = (req, res) => {
  const data = req.body;
  playerSeasonStatsModel.addPlayerSeasonStats(data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json({ message: "Data added successfully", data: result });
  });
};

module.exports = { getAllPlayerSeasonStats, addPlayerSeasonStats };
