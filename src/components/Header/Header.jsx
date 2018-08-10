import React from 'react';
import MainNav from '../Navbar/Navbar';

export default (props) => {

    const { logo } = props;

    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Le Peaks</h1>
          <MainNav />
        </header>
    )
}