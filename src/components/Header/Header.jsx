import React from 'react';
import MainNav from '../MainNav/MainNav';

export default (props) => {

    const { logo } = props;

    return (
        <header className="App-header">
          <MainNav logo={logo}/>
          <h1 className="App-title">Le Peaks</h1>
        </header>
    )
}