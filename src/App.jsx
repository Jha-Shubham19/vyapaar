import React, { useContext, useState } from "react";
import Gamecard from "./components/Gamecard";
import { chances_cards } from "./data/cards_details";
import Dice from "./components/Dice";
import PlayerMenu from "./components/PlayerMenu";
import PlayerCards from "./components/PlayerCards";
import { MyContext } from "./context/MyContext";

function App() {
  const [playerSelected, setPlayerSelected] = useState(false);
  const {playerCount, setPlayerCount} = useContext(MyContext);
  
  return (
    <div className="lg:h-screen flex max-lg:flex-col  md:justify-evenly md:p-1 gap-8 bg-cover bg-center bg-no-repeat cursor-retro" style={{backgroundImage:"url('../src/media/main-bg.svg')",backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',}}>
      <Gamecard/>

      <div className="flex flex-nowrap	justify-around items-center	 flex-col gap-2 sm:min-h-[calc(calc(100vh-100vw)/2)] md:min-w-[calc(calc(100vw-100vh)/2)]">
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
