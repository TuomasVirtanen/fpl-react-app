const positions = require("../models/positionsModel");

const getAllPositions = async (req, res) => {
  const response = await positions.getAllPositions();
  if (response) {
    res.send(response);
  }
};

module.exports = { getAllPositions };
