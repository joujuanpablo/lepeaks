import React from 'react';
import MainNav from '../MainNav/MainNav';

export default (props) => {

    const { logo, solid } = props;

    return (
        <header className={`App-header header ${solid}`} >
          <MainNav logo={logo}/>
        </header>
    )
}