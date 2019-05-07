import React from 'react'

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
        <h2>Step {props.id +1}</h2>
        <img 
        src={require(`../icons/${props.icon}`)}
        className="instructions-icon" 
        alt="instructions-icon"/>
        <p dangerouslySetInnerHTML={{ __html: props.content }}></p>
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