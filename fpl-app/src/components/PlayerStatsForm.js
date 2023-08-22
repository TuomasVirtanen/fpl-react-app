import React, { useState, useEffect } from "react";
import axios from "axios";

const AddPlayerSeasonStats = () => {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [positions, setPositions] = useState([]);
  const [nationalities, setNationalities] = useState([]);

  const [selectedPlayer, setSelectedPlayer] = useState();
  const [selectedTeam, setSelectedTeam] = useState();
  const [selectedSeason, setSelectedSeason] = useState();
  const [selectedPosition, setSelectedPosition] = useState();
  const [selectedNationality, setSelectedNationality] = useState();
  const [fplPoints, setFplPoints] = useState("");
  const [gamesPlayed, setGamesPlayed] = useState("");
  const [minutesPlayed, setMinutesPlayed] = useState("");
  const [goals, setGoals] = useState("");
  const [assists, setAssists] = useState("");
  const [cleanSheets, setCleanSheets] = useState("");
  const [goalsConceded, setGoalsConceded] = useState("");
  const [ownGoals, setOwnGoals] = useState("");
  const [yellowCards, setYellowCards] = useState("");
  const [redCards, setRedCards] = useState("");
  const [missedPenalties, setMissedPenalties] = useState("");
  const [savedPenalties, setSavedPenalties] = useState("");

  useEffect(() => {
    // Fetch dropdown options from APIs
    axios.get("http://localhost:5000/api/players").then((response) => {
      setPlayers(response.data);
    });
    axios.get("http://localhost:5000/api/teams").then((response) => {
      setTeams(response.data);
    });
    axios.get("http://localhost:5000/api/seasons").then((response) => {
      setSeasons(response.data);
    });
    axios.get("http://localhost:5000/api/positions").then((response) => {
      setPositions(response.data);
    });
    axios.get("http://localhost:5000/api/nationalities").then((response) => {
      setNationalities(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = {
      player_id: selectedPlayer,
      team_id: selectedTeam,
      season_id: selectedSeason,
      position_id: selectedPosition,
      nationality_id: selectedNationality,
      fpl_points: fplPoints,
      games_played: gamesPlayed,
      minutes_played: minutesPlayed,
      goals: goals,
      assists: assists,
      clean_sheets: cleanSheets,
      goals_conceded: goalsConceded,
      own_goals: ownGoals,
      yellow_cards: yellowCards,
      red_cards: redCards,
      missed_penalties: missedPenalties,
      saved_penalties: savedPenalties,
    };

    console.log(newData);

    axios
      .post("http://localhost:5000/api/add-player-season-stat", newData)
      .then((response) => {
        console.log("Data added successfully", response.data);
        // Clear the selected values after submission
        setSelectedPlayer("");
        setSelectedTeam("");
        setSelectedSeason("");
        setSelectedPosition("");
        setSelectedNationality("");
        setFplPoints("");
        setGamesPlayed("");
        setMinutesPlayed("");
        setGoals("");
        setAssists("");
        setCleanSheets("");
        setGoalsConceded("");
        setOwnGoals("");
        setYellowCards("");
        setRedCards("");
        setMissedPenalties("");
        setSavedPenalties("");
      });
  };

  return (
    <div>
      <h2>Add Player Season Stats</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Player:</label>
          <select
            value={selectedPlayer}
            onChange={(event) => setSelectedPlayer(event.target.value)}
          >
            <option value="">Select Player</option>
            {players.map((player) => (
              <option key={player.player_id} value={player.player_id}>
                {player.shirt_name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Select Team:</label>
          <select
            value={selectedTeam}
            onChange={(event) => setSelectedTeam(event.target.value)}
          >
            <option value="">Select Team</option>
            {teams.map((team) => (
              <option key={team.team_id} value={team.team_id}>
                {team.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Select Season:</label>
          <select
            value={selectedSeason}
            onChange={(event) => setSelectedSeason(event.target.value)}
          >
            <option value="">Select Season</option>
            {seasons.map((season) => (
              <option key={season.season_id} value={season.season_id}>
                {season.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Select Position:</label>
          <select
            value={selectedPosition}
            onChange={(event) => setSelectedPosition(event.target.value)}
          >
            <option value="">Select Position</option>
            {positions.map((position) => (
              <option key={position.position_id} value={position.position_id}>
                {position.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Select Nationality:</label>
          <select
            value={selectedNationality}
            onChange={(event) => setSelectedNationality(event.target.value)}
          >
            <option value="">Select Nationality</option>
            {nationalities.map((nationality) => (
              <option
                key={nationality.nationality_id}
                value={nationality.nationality_id}
              >
                {nationality.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>FPL Points:</label>
          <input
            type="number"
            value={fplPoints}
            onChange={(event) => setFplPoints(event.target.value)}
          />
        </div>
        <div>
          <label>Pelatut pelit:</label>
          <input
            type="number"
            value={gamesPlayed}
            onChange={(event) => setGamesPlayed(event.target.value)}
          />
        </div>
        <div>
          <label>Pelatut minuutit:</label>
          <input
            type="number"
            value={minutesPlayed}
            onChange={(event) => setMinutesPlayed(event.target.value)}
          />
        </div>
        <div>
          <label>Maalit:</label>
          <input
            type="number"
            value={goals}
            onChange={(event) => setGoals(event.target.value)}
          />
        </div>
        <div>
          <label>Syötöt:</label>
          <input
            type="number"
            value={assists}
            onChange={(event) => setAssists(event.target.value)}
          />
        </div>
        <div>
          <label>Nollapelit:</label>
          <input
            type="number"
            value={cleanSheets}
            onChange={(event) => setCleanSheets(event.target.value)}
          />
        </div>
        <div>
          <label>Päästetyt maalit:</label>
          <input
            type="number"
            value={goalsConceded}
            onChange={(event) => setGoalsConceded(event.target.value)}
          />
        </div>
        <div>
          <label>Omat maalit:</label>
          <input
            type="number"
            value={ownGoals}
            onChange={(event) => setOwnGoals(event.target.value)}
          />
        </div>
        <div>
          <label>Keltaiset kortit:</label>
          <input
            type="number"
            value={yellowCards}
            onChange={(event) => setYellowCards(event.target.value)}
          />
        </div>
        <div>
          <label>Punaiset kortit:</label>
          <input
            type="number"
            value={redCards}
            onChange={(event) => setRedCards(event.target.value)}
          />
        </div>
        <div>
          <label>Epäonnistuneet pilkut:</label>
          <input
            type="number"
            value={missedPenalties}
            onChange={(event) => setMissedPenalties(event.target.value)}
          />
        </div>
        <div>
          <label>Torjutut pilkut:</label>
          <input
            type="number"
            value={savedPenalties}
            onChange={(event) => setSavedPenalties(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">Add Data</button>
        </div>
      </form>
    </div>
  );
};

export default AddPlayerSeasonStats;
