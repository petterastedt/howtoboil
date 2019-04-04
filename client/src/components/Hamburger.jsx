import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Hamburger(props) {

  return (
    <div className="menu-wrapper">
    <div className="hamburger"
    onClick ={props.toggleHamburger}>
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
        </div>
        <div className={props.hamburgerState ? 'links show-menu' : 'links'}>
          <div className="link-wrapper">
            <NavLink to="/boil/rice" className="navlink">RICE</NavLink>
          </div>
          <div className="link-wrapper">
            <NavLink to="/boil/potato" className="navlink">POTATOES</NavLink>
          </div>
          <div className="link-wrapper">
            <NavLink to="/boil/egg" className="navlink">EGGS</NavLink>
          </div>
          <div className="link-wrapper">
            <NavLink to="/error" className="navlink">404 test</NavLink>
          </div>
        </div>
    </div>
  )
}
