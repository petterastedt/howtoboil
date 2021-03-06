import React from 'react';

export default function Button(props) {
  const setClassName = () => {        
      let name
      if (!props.menuClicked) {name = 'main-button slideUp'}
      if (props.menuClicked) {name = 'main-button slideDown'}
      if (props.buttonClicked) {name = 'main-button shrink-button'}
      return name
    }
  return (
    <div 
    className={setClassName()}
    onClick={props.loadComponent}>
      <div className="button">
      <h3 className="button-text">START</h3>
      </div>
    </div>
  )
}