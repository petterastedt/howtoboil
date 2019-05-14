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
  const [divSize, setDivSize] = useState({width: '100%'}) // Sets the width of slider container depending on how many items are loded
  const [touchPos, setTouchPos] = useState (null) // Used for swipe functionallity
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
  }, 500)
  return () => { // Resets values when leaving/reloading component
    setSelectedSubMenuItem(null)
    setSubMenuClicked(false)
    setDivStyle({right: 0})
    setCheck(false)
    setReload(false)
  }
  }, [props.match.params.typeId]) //Fires on URL change
  useEffect(() => {
    setDivSize({
      width: `${Object.keys(data.instructions).length*100}%`
    })
  }, [data.instructions]) // Sets corrent size of slider div on component update
  const toggleSelected = (id) => {
    setSelectedSubMenuItem(data.subMenuItems[id].title)
    setSubMenuClicked(!subMenuClicked)
  }
  const toggleMenu = () => {
    setSubMenuClicked(!subMenuClicked)
  }
  const loadInstructions = () => { // Loads instructions component and (if on mobile) scroll to bottom
    setTimeout(() => {
    window.innerWidth < 768 && window.scrollTo(0,document.body.scrollHeight)
    },100 )
    setStartButtonClicked(!startButtonClicked)
    if (data.subMenu && selectedSubMenuItem !== null || !data.subMenu) setCheck(!check)
  }
  const slideRight = () => {
    const inc = 100/Object.keys(data.instructions).length
    parseFloat(divStyle.right, 10) > 0 &&
      setDivStyle({
      right: `${parseFloat(divStyle.right, 10) - inc}%`
      })
  }
  const slideLeft = () => {
    const inc = 100/Object.keys(data.instructions).length
    parseFloat(divStyle.right, 10) < 100-(inc) ? 
      setDivStyle({
      right: `${parseFloat(divStyle.right, 10) + inc}%`
      }) :
      setDivStyle({
      right: '0%'
    })
  }
  const handleTouchStart = (event) => {
    setTouchPos(event.touches[0].clientX)
  }
  const handleTouchEnd = (event) => {
    let change = touchPos - event.changedTouches[0].clientX
    if (change < 0) slideRight()
    else if (change > 0) slideLeft()
    else if (change === 0) return
  } 
  return (
  <div className={reload ? 'HowToBoil unShrink' : 'HowToBoil shrink'}>
    {!data.name && <div className="loading"><div className="loader"></div><h1>Loading...</h1></div>}
      <Logo title={data.name}
       logo={data.imgs[0]}
       subHeader={data.subHeader}
       buttonClicked={startButtonClicked}
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
        <div className="content-carousel" 
        style={divSize}>
        <div className="content-wrapper" 
        style={divStyle}
        onTouchStart={(event) => handleTouchStart(event)}
        onTouchEnd={(event) => handleTouchEnd(event)}
        >
        {check && 
        Object.values(data.instructions).map((content,i) =>
        <Instructions title={selectedSubMenuItem ? selectedSubMenuItem : data.name}
        content={content}
        icon={data.imgs[i+1]}
        slideStyle={divStyle.right}
        slideRight={slideRight}
        slideLeft={slideLeft}
        key={i}
        id={i}
        />)}
        </div>
        </div>
  </div>
  )
}