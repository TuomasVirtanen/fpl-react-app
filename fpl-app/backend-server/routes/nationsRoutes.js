const express = require("express");
const router = express.Router();
const { getAllNations } = require("../controllers/nationsController");

router.get("/nationalities", getAllNations);

module.exports = router;
