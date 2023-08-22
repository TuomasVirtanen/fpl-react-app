import "./App.css";
import React from "react";
import PlayerStatsForm from "./components/PlayerStatsForm";
import PlayerList from "./components/GetPlayerStats";

const App = () => {
  return (
    <div>
      <PlayerList></PlayerList>
      <PlayerStatsForm></PlayerStatsForm>
    </div>
  );
};

export default App;
