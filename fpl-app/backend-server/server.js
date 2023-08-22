const express = require("express");
const cors = require("cors");
const playerSeasonStatsRoutes = require("./routes/playerSeasonStatsRoutes");
const playersRoutes = require("./routes/playersRoutes");
const teamsRoutes = require("./routes/teamsRoutes");
const seasonsRoutes = require("./routes/seasonsRoutes");
const positionsRoutes = require("./routes/positionsRoutes");
const nationsRoutes = require("./routes/nationsRoutes");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Routes
app.use("/api", playerSeasonStatsRoutes);
app.use("/api", playersRoutes);
app.use("/api", teamsRoutes);
app.use("/api", seasonsRoutes);
app.use("/api", positionsRoutes);
app.use("/api", nationsRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
