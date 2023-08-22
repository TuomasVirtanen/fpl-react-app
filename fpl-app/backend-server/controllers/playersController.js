const players = require("../models/playersModel");

const getAllPlayers = async (req, res) => {
  const response = await players.getAllPlayers();
  if (response) {
    res.send(response);
  }
};

module.exports = { getAllPlayers };
