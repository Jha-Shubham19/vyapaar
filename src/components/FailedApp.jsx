import React, { useContext, useEffect, useState } from "react";
import Gamecard from "./Gamecard";
import Dice from "./Dice";
import PlayerMenu from "./PlayerMenu";
import PlayerCards from "./PlayerCards";
import { MyContext } from "../context/MyContext";

function FailedApp({catchRandomDice}) {
  const [playerSelected, setPlayerSelected] = useState(true);
  
  return (
    <div className="h-screen flex max-lg:flex-col md:justify-evenly md:p-1 gap-4 bg-cover bg-center bg-no-repeat cursor-retro" style={{backgroundImage:"url('../src/media/main-bg.svg')",backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',}}>
      <Gamecard/>

      <div className="flex flex-nowrap justify-around items-center gap-2 flex-row sm:min-h-[calc(calc(100vh-100vw)/2)] md:min-w-[calc(calc(100vw-100vh)/2)] lg:flex-col">
        {
          playerSelected && <Dice catchRandomDice={catchRandomDice}/>
        }

        <div className="flex justify-evenly gap-2 sm:flex-1">
          {playerSelected ? <PlayerCards playerSelected={playerSelected} setPlayerSelected={setPlayerSelected} /> :
            <PlayerMenu setPlayerSelected={setPlayerSelected} playerSelected={playerSelected} />}
        </div>
      </div>
    </div>
  );
}

export default FailedApp;
