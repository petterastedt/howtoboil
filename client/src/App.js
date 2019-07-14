import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Hamburger from './components/Hamburger'
import Home from './pages/Home'
import HowToBoil from './pages/HowToBoil'
import NotFound404 from './pages/NotFound404'
import Footer from './components/Footer'
import './app.css'

function App() {
  const [hamburgerClicked, setHamburgerClicked] = useState(false)
  const toggleHamburger = () => {
    setHamburgerClicked(!hamburgerClicked)
  }
  return (
  <div className="app">
    <div className="skewed-bg">
	    <div className="content">
      <Hamburger 
      toggleHamburger={toggleHamburger}
      hamburgerState={hamburgerClicked}
      />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/boil/:typeId" component={HowToBoil} />
          <Route path="*" component={NotFound404} />
      </Switch>
	    </div>
    </div>
    <Footer />  
  </div>
  )
}

export default App;