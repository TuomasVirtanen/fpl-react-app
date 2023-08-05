// routes/playerSeasonStatsRoutes.js
const express = require("express");
const router = express.Router();
const playerSeasonStatsController = require("../controllers/playerSeasonStatsController");

router.get(
  "/player-season-stats",
  playerSeasonStatsController.getAllPlayerSeasonStats
);
router.post(
  "/player-season-stats",
  playerSeasonStatsController.addPlayerSeasonStats
); // New route for adding data

module.exports = router;
