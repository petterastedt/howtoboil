import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Hamburger(props) {

  return (
    <div className="navigation">
    <div className="navigation-hamburger"
    onClick ={props.toggleHamburger}>
        <div className={props.hamburgerState ? 'one hamburger-close-top' : 'one'}></div>
        <div className={props.hamburgerState ? 'two hamburger-close-middle' : 'two'}></div>
        <div className={props.hamburgerState ? 'three hamburger-close-bottom' : 'three'}></div>
        </div>
        <div className={props.hamburgerState ? 'links show-menu' : 'links'}>
          <div className="navlink-wrapper">
            <NavLink to="/boil/rice" className="navlink" activeClassName="navlink-active">RICE</NavLink>
          </div>
          <div className="navlink-wrapper">
            <NavLink to="/boil/potato" className="navlink" activeClassName="navlink-active">POTATOES</NavLink>
          </div>
          <div className="navlink-wrapper">
            <NavLink to="/boil/egg" className="navlink" activeClassName="navlink-active">EGGS</NavLink>
          </div>
          <div className="navlink-wrapper">
            <NavLink to="/error" className="navlink" activeClassName="navlink-active">404 test</NavLink>
          </div>
        </div>
    </div>
  )
}