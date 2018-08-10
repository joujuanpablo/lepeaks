import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Contact from '../Contact/Contact';
import Events from '../Events/Events';
import Gallery from '../Gallery/Gallery';
import Home from '../Home/Home';
import Story from '../Story/Story';

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Header logo={logo} poop="poop!"/>
        <Switch>
          <Route component={Contact} exact path='/contact'/>
          <Route component={Events} exact path='/events'/>
          <Route component={Gallery} exact path='/gallery'/>
          <Route component={Home} exact path='/home'/>
          <Route component={Story} exact path='/story'/>
        </Switch>
        <footer>
          here lies a footer to be built
        </footer>
      </div>
    );
  }
}

export default App;