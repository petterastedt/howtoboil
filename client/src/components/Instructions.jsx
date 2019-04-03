import React from 'react'

export default function Instructions(props) {
  return (
    <div className="instructions">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <div className="icons-wrapper">
        <img 
        src={require("../icons/001__arrow_left.svg")} 
        alt="arrow-left" 
        className="left-icon"
        onClick={props.slideRight}
        />
        <img 
        src={require("../icons/002__arrow_right.svg")} 
        alt="arrow-right" 
        className="right-icon"
        onClick={props.slideLeft}
        />
        </div>
    </div>
  )
}