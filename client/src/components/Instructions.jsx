import React from 'react'
import Timer from './Timer'

export default function Instructions(props) {
  return (
    <div className="instructions">
        <img 
        src={require("../icons/001__arrow_left.svg")} 
        alt="arrow-left" 
        className="left-icon"
        onClick={props.slideRight}
        />
        <div className="instructions-content-wrapper">
        <h2 className="instructions-title">{ props.content.headline }</h2>
        {/* first off peel it */}
        <img 
        src={require(`../icons/${props.icon}`)}
        className="instructions-icon" 
        alt="instructions-icon"/>
        <p className="instructions-textContent" dangerouslySetInnerHTML={{ __html: props.content.text }}></p>
        {props.content.text.includes('minutes') && <Timer timer={props.timer}/>}
        </div>
        {props.slideStyle !== '100%' &&
        <img 
        src={require("../icons/002__arrow_right.svg")} 
        alt="arrow-right" 
        className="right-icon"
        onClick={props.slideLeft}
        />
      }  
    </div>
  )
}