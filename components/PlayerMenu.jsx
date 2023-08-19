import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

const PlayerMenu = ({setPlayerSelected},{playerSelected}) => {
  //console.log("from playermenu value of playerselected is "+playerSelected);
    const {setPlayerCount} = useContext(MyContext);
    
    function changeHandler(event){
        setPlayerCount(event.target.value);
        console.log(event.target.value)
    }
    function clickHandler(){
        setPlayerSelected(true);
    }
  return (
    <div>
      <div className="text-3xl">Select Number of Players</div>
      <div>
        <input onChange={changeHandler} className="invisible" type="radio" id="2" value={2} name="playerCount" />
        <label className="cursor-pointer" htmlFor="2">2</label>
        <input onChange={changeHandler} className="invisible" type="radio" id="3" value={3} name="playerCount" /> 
        <label className="cursor-pointer" htmlFor="3">3</label>
        <input onChange={changeHandler} className="invisible" type="radio" id="4" value={4} name="playerCount" /> 
        <label className="cursor-pointer" htmlFor="4">4</label>
      </div>
      <div>
        <button onClick={clickHandler}>
            Start Game
        </button>
      </div>
    </div>
  );
};

export default PlayerMenu;
