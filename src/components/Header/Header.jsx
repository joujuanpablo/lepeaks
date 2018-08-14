import React from 'react';
import MainNav from '../MainNav/MainNav';

export default (props) => {

    const { logo } = props;

    return (
        <header className="App-header header">
          <MainNav logo={logo}/>
        </header>
    )
}