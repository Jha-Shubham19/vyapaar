import React,{useState} from 'react'
import Gamecard from './components/Gamecard'
import {chances_cards} from './data/cards_details';
import Dice from './components/Dice';

function App() {
  
  return (
    <div className='h-screen w-screen flex flex-col lg:flex-row lg:justify-evenly lg:p-1'>
      
      <Gamecard/>

      <div>
        <Dice/>
      </div>
    </div>
  )
}

export default App