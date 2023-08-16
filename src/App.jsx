import React from 'react'
import Gamecard from '../components/Gamecard'
import Gamecard_item_details from "../components/Gamecard_item_details"

function App() {
  return (
    <div className='h-screen w-screen flex justify-center p-5 relative'>
      <Gamecard />
      <Gamecard_item_details />
    </div>
  )
}

export default App