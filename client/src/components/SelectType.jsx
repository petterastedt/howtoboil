import React, { useState } from 'react';

export default function SelectType(props) {
    const [listState, setListState] = useState({
            listOpen: false
    })
    // DO I NEED THIS?
    const handleClickOutside = title => {
        setListState({
          listOpen: false
        })
      }
    const toggleList = () => {
        !listState.listOpen ? setTimeout(() => { setListState(prevState => ({ listOpen: !prevState.listOpen, headerTitle: props.title}))}, 300) :
        setListState(prevState => ({ listOpen: !prevState.listOpen, headerTitle: props.title}))
      }
    const setIcon= () => {
        let img = ''
        if (!listState.listOpen) {img = <img src={require("../icons/004__arrow_down.svg")} alt="arrow-down" className="arrow-icons" />}
        if (listState.listOpen) {img = <img src={require("../icons/003__arrow_up.svg")} alt="arrow-up" className="arrow-icons" />}
        if (props.title !== 'Select type of rice') {img = <img src={require("../icons/008__choose.svg")} alt="arrow-check" className="arrow-icons" />}
        return img
    }  
  return (
    <div className="dd-wrapper">
        <div className="dd-header" onClick={() => {toggleList(); props.toggleMenu()}}>
            <div className="dd-header-title">{props.title}</div>
            {setIcon()}
        </div>
        {listState.listOpen && <ul className="dd-list">
        {props.list.map((item) => (
        <li className="dd-list-item" key={item.id} onClick={() => {props.toggleItem(item.id, item.key); toggleList()}}>{item.title}</li>
        ))}
      </ul>}
    </div>
  )
}
