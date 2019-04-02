import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hamburger(props) {

  return (
    <div className={props.hamburgerState? 'hamburger green': 'hamburger'}
    onClick ={props.toggleHamburger}>
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
        <div className="links">
        <Link exact to="/boilrice">Boil Rice mafukka</Link>
        </div>
    </div>
  )
}
