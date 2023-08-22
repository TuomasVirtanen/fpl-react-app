const nations = require("../models/nationsModel");

const getAllNations = async (req, res) => {
  const response = await nations.getAllNations();
  if (response) {
    res.send(response);
  }
};

module.exports = { getAllNations };
