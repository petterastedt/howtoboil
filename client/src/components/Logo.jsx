import React from 'react'

export default function Logo(props) {
  return (
    <div className={props.buttonClicked ? 'logo shrink-logo' : 'logo'}>
    <div className="logo-top">
        <h1 className={props.title === 'potato' || props.title === 'egg' && window.innerWidth < 768 ? 'title potato' : 'title'}>{props.title === 'egg' ? `How to boil an ${props.title}` : `How to boil ${props.title}`}</h1>
        <img src={require(`../icons/${props.logo}`)} alt="logo" className="logo-icon" />
        </div>
        <div className="border"></div>
        <p className="text">{props.subHeader}</p>
    </div>
  )
}
