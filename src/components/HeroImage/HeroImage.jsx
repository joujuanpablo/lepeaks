import React from 'react';

 class HeroImage extends React.Component {

    render() {
        const style = {
            background: "url("+this.props.imageUrl+"), url("+this.props.loaderImageUrl+")",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center bottom",
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