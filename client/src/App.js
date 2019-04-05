import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import HowToBoil from './pages/HowToBoil'
import Hamburger from './components/Hamburger'
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
          <Route path="/boil/:typeId" component={HowToBoil} />
          <Route render={() => <div className="error"><br /><h2>404: Page not found!</h2><br /><img src="https://media.giphy.com/media/6Q2KA5ly49368/giphy.gif" alt="404" /></div>}/>
      </Switch>
	    </div>
    </div>
    <Footer />
  </div>
  )
}

export default App;