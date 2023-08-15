const express = require("express");
const cors = require("cors");
const playerSeasonStatsRoutes = require("./routes/playerSeasonStatsRoutes");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Routes
app.use("/api", playerSeasonStatsRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
