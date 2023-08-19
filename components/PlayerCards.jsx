import React, { useContext } from 'react';

import PlayerCard from "../components/PlayerCard";
import avatar1 from "../media/avatar_1.jpeg";
import avatar2 from "../media/avatar_2.png";
import avatar3 from "../media/avatar_3.jpg";
import avatar4 from "../media/avatar_4.png";
import { MyContext } from '../context/MyContext';

const PlayerCards = () => {
  
  const playerCount = useContext(MyContext);
  console.log("no of players are "+ playerCount)
  const avatars = [avatar1, avatar2, avatar3, avatar4];
  let playerCard = [];
  for (let i = 0; i < playerCount; i++) {
    playerCard.push(i);
  }
  
  return (
    (<div className="">yaha cards render nahi ho rhaa hai
    
    <div className="">
        
        {playerCard.map((i) => {
          return <PlayerCard  playerNo={i + 1} avatar={avatars[i]} />;
        })}
    </div>
    
    
  </div>)
  )
  
}
export default PlayerCards


