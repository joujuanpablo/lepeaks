import React, { Component } from 'react';
import logo from '../../images/logo-white.png';
import '../../App.css';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Contact from '../Contact/Contact';
import Events from '../Events/Events';
import Gallery from '../Gallery/Gallery';
import Home from '../Home/Home';
import Story from '../Story/Story';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import UnderConstruction from '../../images/underConstruction.gif';

library.add(fab); //font awesome

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Header logo={logo} />
        <Switch>
          <Route component={Contact} exact path='/contact'/>
          <Route component={Events} exact path='/events'/>
          <Route component={Gallery} exact path='/gallery'/>
          <Route component={Home} exact path='/'/>
          <Route component={Story} exact path='/story'/>
        </Switch>
        <img src={UnderConstruction} alt="under construction"/>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
