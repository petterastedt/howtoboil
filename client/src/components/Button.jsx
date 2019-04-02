import React from 'react'

export default function Button(props) {
    const setClassName = () => {
        let name = ''
        if (props.menuClicked) {name = 'main-button slideUp'}
        if (!props.menuClicked) {name = 'main-button slideDown'}
        if (props.buttonClicked) {name = 'main-button shrink'}
        return name
    }
  return (
    <div 
    className={setClassName()}
    onClick={props.loadComponent}>
      <div className="button">
      <h3>START</h3>
      </div>
    </div>
  )
}