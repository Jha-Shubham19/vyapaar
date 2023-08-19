import React, { useContext, useState } from "react";
import Gamecard from "../components/Gamecard";
import { chances_cards } from "../data/cards_details";
import Dice from "../components/Dice";
import PlayerMenu from "../components/PlayerMenu";
import PlayerCards from "../components/PlayerCards";
import { MyContext } from "../context/MyContext";

function App() {
  const [playerSelected,setPlayerSelected] = useState(false);
  const [playerCount, setPlayerCount]=useState(2);
  console.log("from app value of playerselected is " + playerSelected);

  return (
    <div className="h-screen w-screen flex flex-col lg:flex-row lg:justify-evenly lg:p-1">
      <Gamecard />

      <div>
        <Dice />
      </div>

      {playerSelected ? <PlayerCards playerCount={playerCount} playerSelected={playerSelected} setPlayerSelected={setPlayerSelected}/> :
      <PlayerMenu setPlayerCount={setPlayerCount} setPlayerSelected={setPlayerSelected}/>}
    </div>
  );
}

export default App;
