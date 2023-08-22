const express = require("express");
const router = express.Router();
const { getAllSeasons } = require("../controllers/seasonsController");

router.get("/seasons", getAllSeasons);

module.exports = router;
