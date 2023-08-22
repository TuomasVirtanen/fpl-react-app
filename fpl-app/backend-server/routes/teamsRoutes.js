const express = require("express");
const router = express.Router();
const { getAllTeams } = require("../controllers/teamsController");

router.get("/teams", getAllTeams);

module.exports = router;
