const express = require("express");
const router = express.Router();
const { getAllPositions } = require("../controllers/positionsController");

router.get("/positions", getAllPositions);

module.exports = router;
