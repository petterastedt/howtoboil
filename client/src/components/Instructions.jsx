import React from 'react'

export default function Instructions(props) {
  return (
    <div className="instructions">
        <h2>{props.title}</h2>
        <p>{props.content.page1}</p>
    </div>
  )
}