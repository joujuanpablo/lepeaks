import React from 'react';
import textLogo from '../../images/text-logo.png';

 class HeroImage extends React.Component {

    render() {
        const style = {
            background: "url("+this.props.imageUrl+")",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
        };

        return (
            <div className="hero-image" style={style}>
                <img src={textLogo} alt="Le Peaks Music logo" className="text-logo"/>
                {this.props.children}
            </div>
        )
    }
}

export default HeroImage;