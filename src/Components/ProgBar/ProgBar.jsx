import React from 'react'
import "./progBar.css"

export default function ProgBar() {

  const progress = 67;
  const progressBarStyle = {
    width: `${progress}%`,
    backgroundColor: "#A3DA8D",
    height: '5px',
    margin: "2px solid white",
  }; 


  return (
    <div className='barConatainer'>
      <div className='percentage'>{`${progress}%`}</div>
      <div style={{ border: '1px solid #A3DA8D', }} className='mainbar'>
        <div style={progressBarStyle}></div>
      </div>
      <div className='money'>
        <p>Raised : $10.11 million</p>
        <p>Goal: $23 million</p>
      </div>
    </div>
  )
}
