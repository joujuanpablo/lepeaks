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
import Footer from '../Footer/Footer';
import TermsConds from '../TermsConds/TermsConds';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faEnvelope); //font awesome brands

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
          <Route component={TermsConds} exact path='/terms-conditions'/>
          <Route component={PrivacyPolicy} exact path='/privacy-policy'/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
