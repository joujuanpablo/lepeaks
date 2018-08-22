import React from 'react';

export default (props) => {

    return(
    <button className="text-button" onClick={props.handleClick}>
        {props.text}
    </button>
    )
}