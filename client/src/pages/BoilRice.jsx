import React, { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import SelectType from '../components/SelectType';
import Button from '../components/Button';
import Instructions from '../components/Instructions';
import api from '../api';

function BoilRice (props) {
  const [data, setData] = useState({
    name: null,
    subHeader: null,
    imgs: ['placeholder.png'],
    instructions: {}
  })
  const [stateClicked, setStateClicked] = useState({
    selectedItemName: null,
    menuClicked: true,
    buttonClicked: false
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
    api.getContent(props.match.params.typeId)
    .then(res => {
      setData({
        name: res[0].name,
        subHeader: res[0].subHeader,
        imgs: res[0].imgUrls,
        instructions: res[0].instructions
      })
  })
  }, [])
  const toggleSelected = (id) => {
    setStateClicked({
      selectedItemName: dropDownItems.type[id].title,
      menuClicked: !stateClicked.menuClicked,
      buttonClicked: stateClicked.buttonClicked
    })
  }
  const toggleMenu = () => {
    setStateClicked({
      selectedItemName: stateClicked.selectedItemName,
      menuClicked: !stateClicked.menuClicked,
      buttonClicked: stateClicked.buttonClicked
    })
  }
  const loadComponent = () => {
    setStateClicked({
      selectedItemName: stateClicked.selectedItemName,
      menuClicked: stateClicked.menuClicked,
      buttonClicked: !stateClicked.buttonClicked
    })
  }
  return (
  <div className={data.name && "BoilRice unShrink"}>
  {!data.name && <div className="loading"><h1>Loading...</h1></div>}
      <Logo title={data.name}
       logo={data.imgs[0]}
       subHeader={data.subHeader}
       />
      <SelectType
        titleHelper="type"
        title={stateClicked.selectedItemName ? stateClicked.selectedItemName : 'Select type of rice'}
        list={dropDownItems.type}
        toggleItem={toggleSelected}
        toggleMenu={toggleMenu}
      />
      <Button
        menuClicked={stateClicked.menuClicked}
        buttonClicked={stateClicked.buttonClicked}
        loadComponent={loadComponent} 
        />
       {stateClicked.buttonClicked && stateClicked.selectedItemName !== null && 
       <Instructions title={stateClicked.selectedItemName}
        content={data.instructions}
        icon={data.imgs}
        />}
       {/* <h1 onClick={() => fetchContent()}>{props.match.params.typeId}</h1> */}
  </div>
  )
}

export default BoilRice;