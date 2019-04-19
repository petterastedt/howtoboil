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
  // const [touchPos, setTouchPos] = useState (null) // used for touch functionallity
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
// TOUCH FUNCTIONALLITY NEEDS TWEAKING  
//   const handleTouchStart = (event) => {
//     setTouchPos(event.touches[0].clientX)
//     console.log(touchPos)
//   }
//   const handleTouchMove = (event) => {
//     let change = touchPos - event.touches[0].clientX

//     setDivStyle({
//       right: `${change/10}%`
//       })

//     event.preventDefault()  
//       console.log('right:', divStyle.right)
//   }
//   const handleTouchEnd = (event) => {
//     let change = touchPos - event.changedTouches[0].clientX
//     let diff = window.screen.width/3
//     let val = parseInt(divStyle.right, 10)

//     if (change < diff) {
//       setDivStyle({right: `${0}%`})
//     } else {
//       setDivStyle({right: `${Math.round(val / 25) * 25}%`})
//     }
//     console.log('like this:', divStyle.right)
// } 
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
        // TOUCH FUNCTIONALLITY NEEDS TWEAKING 
        // onTouchStart={(event) => handleTouchStart(event)}
        // onTouchMove={(event) => handleTouchMove(event)}
        // onTouchEnd={(event) => handleTouchEnd(event)}
        >
        {check && 
        Object.values(data.instructions).map((content,i) =>
        <Instructions title={selectedSubMenuItem ? selectedSubMenuItem : data.name}
        content={content}
        icon={data.imgs[i+1]}
        slideRight={slideRight}
        slideLeft={slideLeft}
        key={i}
        />)}
        </div>
        </div>
  </div>
  )
}