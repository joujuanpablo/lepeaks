import React from 'react';
import textLogo from '../../images/text-logo.png';

export default (props) => {
    const style = {
        background: "url("+props.imageUrl+")",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
    };

    return (
        <div className="hero-image" style={style}>
            <img src={textLogo} alt="" className="text-logo"/>
        </div>
    )
}