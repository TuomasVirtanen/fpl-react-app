import React, { useState, useEffect } from "react";
import axios from "axios";

const PlayerList = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/player-season-stats")
      .then((response) => {
        console.log("Data fetched successfully:", response.data);
        setPlayers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Player List</h1>
      <ul>
        {players.map((player) => (
          <li key={player.player_season_stats_id}>
            {player.shirt_name} - {player.goals}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
