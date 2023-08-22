import React, { useContext, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import moneyImage from "../media/money.png";
import { PlayersContext } from '../context/PlayersContext';

const PlayerCard = (props) => {
  let avatar = props.avatar;
  let playerNo = props.playerNo;
  const [money, setMoney] = useState(1000);

  const {whosTurn} = useContext(PlayersContext)

  const playerColor = playerNo == 1 ? "red" : playerNo == 2 ? "#FF6EB4" : playerNo ==3 ? "#0000FF" : "#00CD00"
  // const borderStyle =` border-4 border-${playerColor}-200 border-b-${playerColor}-500`
  const borderStyle = {
    border: `6px solid ${playerColor}`,
    borderBottom: `6px solid ${playerColor}`,
    borderStyle: `inset`
  };


  return (
    <div className={`rounded-lg  w-[350px] mx-2 my-1 flex flex-row bg-[#071277] bg-gradient-to-l from-transparent via-[#3744ba] to-[#071277 ]
      ${(whosTurn+1 == playerNo) ? "animate-scale-in-out" : "" } `} style={borderStyle} >
      <div className="rounded-full w-[80px] h-[80px] m-2 z-10" style={{ backgroundImage: `url(${avatar})`, backgroundSize: "cover",}} >
      </div>

      <div className="flex flex-col w-[30%] h-full">
        <div className="h-[50%] p-3">
          <BiUserCircle />
        </div>
        <div className="h-[50%]">
          <img className="w-[50px] h-[50px]" src={moneyImage} />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="h-[50%] p-3">
          <p className="text-white text-2xl font-bold tracking-wider font-mono">
            Player {playerNo}
          </p>
        </div>

        <p className="text-[#FFD89E] text-xl font-bold mt-2">$ {money}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
