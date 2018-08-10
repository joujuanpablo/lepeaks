import React from 'react';
import { Button } from 'reactstrap';

export default (props) => {

    const { logo } = props;

    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Le Peaks</h1>
          <Button>Push me</Button>
        </header>
    )
}