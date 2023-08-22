import React, { useContext, useState } from "react";
import Gamecard from "./components/Gamecard";
import { chances_cards } from "./data/cards_details";
import Dice from "./components/Dice";
import PlayerMenu from "./components/PlayerMenu";
import PlayerCards from "./components/PlayerCards";
import { MyContext } from "./context/MyContext";

function App() {
  const [playerSelected, setPlayerSelected] = useState(false);
  const [playerCount, setPlayerCount] = useState(2);
  console.log("from app value of playerselected is " + playerSelected);

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row md:justify-evenly md:p-1">
      <Gamecard playerCount={playerCount}/>

      <div className="flex flex-wrap	justify-around items-center	 flex-col gap-2 sm:min-h-[calc(calc(100vh-100vw)/2)] md:min-w-[calc(calc(100vw-100vh)/2)]">
        {
          playerSelected && <Dice />
        }

        <div className="flex justify-evenly gap-2	">
          {playerSelected ? <PlayerCards playerCount={playerCount} playerSelected={playerSelected} setPlayerSelected={setPlayerSelected} /> :
            <PlayerMenu setPlayerCount={setPlayerCount} setPlayerSelected={setPlayerSelected} playerSelected={playerSelected} />}
        </div>
      </div>
    </div>
  );
}

export default App;
