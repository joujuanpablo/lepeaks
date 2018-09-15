import React from 'react';

 class HeroImage extends React.Component {

    render() {
        const style = {
            background: "url("+this.props.imageUrl+"), url("+this.props.loaderimageUrl+")",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            height: this.props.heroHeight,
        };

        return (
            <div className="hero-image" style={style}>
                {this.props.children}
            </div>
        )
    }
}

export default HeroImage;