import React from 'react';

export default (props) => {

    return(
    <button className={`text-button ${props.context}`} onClick={props.handleClick}>
        {props.text}
    </button>
    )
}