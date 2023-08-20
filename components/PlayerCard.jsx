import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import moneyImage from "../media/money.png";

const PlayerCard = (props) => {
  let avatar = props.avatar;
  let playerNo = props.playerNo;
  const [money, setMoney] = useState(1000);
  return (
    <div className="border rounded-lg  w-[350px] mx-2 my-1 flex flex-row bg-[#6581ff] bg-gradient-to-l from-transparent via-blue-500 to-cyan-400">
      <div className="rounded-full bg-red-400  w-[80px] h-[80px] m-2">
        <img className="rounded-full object-cover w-full h-full" src={avatar} />
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
          <p className="text-white text-2xl font-bold tracking-wider">
            Player {playerNo}{" "}
          </p>
        </div>

        <p className="text-white text-xl font-bold mt-2">$ {money}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
