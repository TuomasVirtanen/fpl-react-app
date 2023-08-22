const express = require("express");
const router = express.Router();
const { getAllPlayers } = require("../controllers/playersController");

router.get("/players", getAllPlayers);

module.exports = router;
