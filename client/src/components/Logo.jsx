import React from 'react'

export default function Logo(props) {
  return (
    <div className={props.buttonClicked ? 'logo shrink-logo' : 'logo'}>
    <div className="logo-top">
        <h1 className={props.title === 'potato' && window.innerWidth < 768 ? 'title potato' : 'title'}>HOW TO BOIL {props.title}</h1>
        <img src={require(`../icons/${props.logo}`)} alt="logo" className="logo-icon" />
        </div>
        <div className="border"></div>
        <p className="text">{props.subHeader}</p>
    </div>
  )
}
