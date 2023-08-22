const seasons = require("../models/seasonsModel");

const getAllSeasons = async (req, res) => {
  const response = await seasons.getAllSeasons();
  if (response) {
    res.send(response);
  }
};

module.exports = { getAllSeasons };
