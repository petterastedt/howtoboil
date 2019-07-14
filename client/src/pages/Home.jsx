import React from 'react'

export default function Home() {
  return (
    <div className="home">
    <div className="home-content">
      <h1>So, what are you cooking?</h1>
      <div className="food-icon-container">
      <img 
        src={require('../icons/noun_potatoes_663492_000000.svg')}
        className="food-icon" 
        alt="food-icon"
      />
      <img 
        src={require('../icons/noun_Egg_1815808_000000.svg')}
        className="food-icon" 
        alt="food-icon"
      />
      <img 
        src={require('../icons/noun_rice_162558_000000.svg')}
        className="food-icon" 
        alt="food-icon"
      />
    </div>    
    </div>    
    </div>
  )
}
