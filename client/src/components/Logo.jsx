import React from 'react'

export default function Logo(props) {
  return (
    <div className="logo">
    <div className="logo-top">
        <h1 className="title">HOW TO BOIL {props.title}</h1>
        <img src={require(`../icons/${props.logo}`)} alt="logo" className="logo-icon" />
        </div>
        <div className="border"></div>
        <p className="text">{props.subHeader}</p>
    </div>
  )
}
