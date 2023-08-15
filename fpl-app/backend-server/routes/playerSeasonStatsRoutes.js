const express = require("express");
const router = express.Router();
const {
  getAllPlayerSeasonStats,
  getAllPlayers,
} = require("../controllers/playerSeasonStatsController");

router.get("/player-season-stats", getAllPlayerSeasonStats);
router.get("/players", getAllPlayers);
// router.post(
//   "/player-season-stats",
//   playerSeasonStatsController.addPlayerSeasonStats
// ); // New route for adding data

module.exports = router;
