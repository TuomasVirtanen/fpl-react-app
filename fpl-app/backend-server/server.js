// server.js
const express = require("express");
const cors = require("cors");
const playerSeasonStatsRoutes = require("./routes/playerSeasonStatsRoutes");

const app = express();
const port = process.env.PORT || 5000;

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Routes
app.use("/api", playerSeasonStatsRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
