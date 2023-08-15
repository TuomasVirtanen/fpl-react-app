import React, { useState } from "react";
import axios from "axios";

const PlayerStatsForm = () => {
  const [formData, setFormData] = useState({
    player_id: "",
    season_id: "",
    team_id: "",
    position_id: "",
    nationality_id: "",
    fpl_points: "",
    games_played: "",
    minutes_played: "",
    goals: "",
    assists: "",
    clean_sheets: "",
    goals_conceded: "",
    own_goals: "",
    yellow_cards: "",
    red_cards: "",
    missed_penalties: "",
    saved_penalties: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make an HTTP POST request to send the form data to the server
    axios
      .post("http://localhost:5000/api/player-season-stats", formData)
      .then((response) => {
        console.log("Data added successfully:", response.data);
        // Optionally, show a success message or reset the form
      })
      .catch((error) => {
        console.error("Error adding data:", error);
        // Optionally, show an error message to the user
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="player_id">Player ID:</label>
        <input
          type="number"
          name="player_id"
          value={formData.player_id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="season_id">Season ID:</label>
        <input
          type="number"
          name="season_id"
          value={formData.season_id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="team_id">Team ID:</label>
        <input
          type="number"
          name="team_id"
          value={formData.team_id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="position_id">Position ID:</label>
        <input
          type="number"
          name="position_id"
          value={formData.position_id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="nationality_id">Nationality ID:</label>
        <input
          type="number"
          name="nationality_id"
          value={formData.nationality_id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="saved_penalties">Saved Penalties:</label>
        <input
          type="number"
          name="saved_penalties"
          value={formData.saved_penalties}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Data</button>
    </form>
  );
};

export default PlayerStatsForm;
