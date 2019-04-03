import React, { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import SelectType from '../components/SelectType';
import Button from '../components/Button';
import Instructions from '../components/Instructions';
import api from '../api';

function HowToBoil (props) {
  const [check, setCheck] = useState (false)
  const [startButtonClicked, setStartButtonClicked] = useState (false)
  const [subMenuClicked, setSubMenuClicked] = useState (false)
  const [selectedSubMenuItem, setSelectedSubMenuItem] = useState (null)
  const [divStyle, setDivStyle] = useState({right: '0'})
  const [data, setData] = useState({
    name: null,
    subHeader: null,
    imgs: ['placeholder.png'],
    instructions: {},
    subMenu: false
  })
  const [dropDownItems, setDropDownItems] = useState({
      type: [
        {
          id: 0,
          title: 'Jasmin',
          selected: false,
          key: 'type'
        },
        {
          id: 1,
          title: 'Basmati',
          selected: false,
          key: 'type'
        },
        {
          id: 2,
          title: 'Whole grain',
          selected: false,
          key: 'type'
        },
        {
          id: 3,
          title: 'Boil in bag',
          selected: false,
          key: 'type'
        }
      ]
  })
  useEffect(() => {
    // setTimeout(() => {
    api.getContent(props.match.params.typeId)
    .then(res => {
      setData({
        name: res[0].name,
        subHeader: res[0].subHeader,
        imgs: res[0].imgUrls,
        instructions: res[0].instructions,
        subMenu: res[0].subMenu
      })
      // }, 2000);
  })
  }, [])
  const toggleSelected = (id) => {
    setSelectedSubMenuItem(dropDownItems.type[id].title)
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
      right: `0`
    })
  }
  return (
  <div className={data.name ? "HowToBoil unShrink" : "HowToBoil"}>
    {/* {!data.name && <div className="loading"><div className="loader"></div><h1>Loading...</h1></div>} */}
      <Logo title={data.name}
       logo={data.imgs[0]}
       subHeader={data.subHeader}
       />
      {data.subMenu && 
      <SelectType
        titleHelper="type"
        title={selectedSubMenuItem ? selectedSubMenuItem : 'Select type of rice'}
        list={dropDownItems.type}
        toggleItem={toggleSelected}
        toggleMenu={toggleMenu}
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
        <Instructions title={selectedSubMenuItem}
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

export default HowToBoil;