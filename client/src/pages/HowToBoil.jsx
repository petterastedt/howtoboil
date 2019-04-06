import React, { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import SelectType from '../components/SelectType';
import Button from '../components/Button';
import Instructions from '../components/Instructions';
import api from '../api';

export default function HowToBoil(props) {
  const [reload, setReload] = useState (true) // Controlling shrink/enlarge animation on URL change
  const [check, setCheck] = useState (false)  // Checks if type selected before loading instructions
  const [startButtonClicked, setStartButtonClicked] = useState (false) // Checks if start button is clicked
  const [subMenuClicked, setSubMenuClicked] = useState (false) // Checks if submenu is clicked
  const [selectedSubMenuItem, setSelectedSubMenuItem] = useState (null) // Stores the name of the selected subitem
  const [divStyle, setDivStyle] = useState({right: '0%'}) // Stores position value for instructions slider
  const [data, setData] = useState({ // Stores data retrieved from database
    name: null,
    subHeader: null,
    imgs: ['placeholder.png'],
    instructions: {},
    subMenu: false,
    subMenuItems: null
  })
  useEffect(() => {
    setTimeout(() => {
    api.getContent(props.match.params.typeId) // Calling backend on component load
    .then(res => {
      setStartButtonClicked(false)
      setReload(true)
      setData({
        name: res[0].name,
        subHeader: res[0].subHeader,
        imgs: res[0].imgUrls,
        instructions: res[0].instructions,
        subMenu: res[0].subMenu,
        subMenuItems: res[0].subMenuItems
      })
  })
  }, 500);
  return () => { // Resets values when leaving/reloading component
    setSelectedSubMenuItem(null)
    setSubMenuClicked(false)
    setDivStyle({right: 0})
    setCheck(false)
    setReload(false)
  }
  }, [props.match.params.typeId]) //Fires on URL change
  const toggleSelected = (id) => {
    setSelectedSubMenuItem(data.subMenuItems[id].title)
    setSubMenuClicked(!subMenuClicked)
  }
  const toggleMenu = () => {
    setSubMenuClicked(!subMenuClicked)
  }
  const loadInstructions = () => {
    setStartButtonClicked(!startButtonClicked)
    if (data.subMenu && selectedSubMenuItem !== null || !data.subMenu) setCheck(!check)
  }
  const slideRight = () => {
    const inc = 100/Object.keys(data.instructions).length 
    parseInt(divStyle.right, 10) > 0 &&
      setDivStyle({
      right: `${parseInt(divStyle.right, 10) - inc}%`
      })
  }
  const slideLeft = () => {
    const inc = 100/Object.keys(data.instructions).length 
    parseInt(divStyle.right, 10) < 100-(inc) ? 
      setDivStyle({
      right: `${parseInt(divStyle.right, 10) + inc}%`
      }) :
      setDivStyle({
      right: '0%'
    })
  }
  return (
  <div className={reload ? 'HowToBoil unShrink' : 'HowToBoil shrink'}>
    {!data.name && <div className="loading"><div className="loader"></div><h1>Loading...</h1></div>}
      <Logo title={data.name}
       logo={data.imgs[0]}
       subHeader={data.subHeader}
       />
      {data.subMenu && !startButtonClicked &&
      <SelectType
        titleHelper="type"
        title={selectedSubMenuItem ? selectedSubMenuItem : 'Select type of rice'}
        list={data.subMenuItems}
        toggleItem={toggleSelected}
        toggleMenu={toggleMenu}
        check={check}
        />}
      <Button
        menuClicked={subMenuClicked}
        buttonClicked={startButtonClicked}
        loadComponent={loadInstructions}
        />
        <div className="content-carousel">
        <div className="content-wrapper" style={divStyle}>
        {check && 
        Object.values(data.instructions).map((content,i) =>
        <Instructions title={selectedSubMenuItem ? selectedSubMenuItem : data.name}
        content={content}
        icon={data.imgs}
        slideRight={slideRight}
        slideLeft={slideLeft}
        key={i}
        />)}
        </div>
        </div>
  </div>
  )
}