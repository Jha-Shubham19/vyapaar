import React, { useContext } from 'react';

import PlayerCard from "./PlayerCard";
import avatar1 from "../media/avatar_1.jpeg";
import avatar2 from "../media/avatar_2.png";
import avatar3 from "../media/avatar_3.jpg";
import avatar4 from "../media/avatar_4.png";
import { MyContext } from '../context/MyContext';

const PlayerCards = (props) => {
  let playerSelected = props.playerSelected;
  
  let playerCount = props.playerCount;
  console.log("player selected value in player cards "+playerSelected);
  console.log("playr count ki value "+playerCount);
  
  const avatars = [avatar1, avatar2, avatar3, avatar4];
  let playerCard = [];
  for (let i = 0; i < playerCount; i++) {
    console.log("run hua")
    playerCard.push(i);
  }
  
  return (
    (<div className="">
    
    <div className="">
        
        {playerCard.map((i) => {
          return <PlayerCard key={i}  playerNo={i + 1} avatar={avatars[i]} />;
        })}
    </div>
    
    
  </div>)
  )
  
}
export default PlayerCards


