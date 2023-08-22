const express = require("express");
const router = express.Router();
const {
  getAllPlayerSeasonStats,
  addPlayerSeasonStats,
} = require("../controllers/playerSeasonStatsController");

router.get("/player-season-stats", getAllPlayerSeasonStats);
router.post("/add-player-season-stat", addPlayerSeasonStats); // New route for adding data

module.exports = router;
