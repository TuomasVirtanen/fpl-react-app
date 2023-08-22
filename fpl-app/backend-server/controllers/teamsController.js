const teams = require("../models/teamsModel");

const getAllTeams = async (req, res) => {
  const response = await teams.getAllTeams();
  if (response) {
    res.send(response);
  }
};

module.exports = { getAllTeams };
