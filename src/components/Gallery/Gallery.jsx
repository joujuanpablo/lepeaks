import React from 'react';
import HeroImage from '../HeroImage/HeroImage';
import Image from '../../images/Hero/michael-heuser.png';
import LoaderImage from '../../images/Hero/michael-heuser-loader.png'
import InstagramFeed from '../../components/InstagramFeed/InstragramFeed'
import Header from '../Header/Header';
import logo from '../../images/logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Gallery extends React.Component {

    componentDidMount() {
        this.showArrow()
    }
    
    showArrow = () => {
        var arrow = document.querySelector(".gallery-arrow");
        
        setTimeout(() => {
            arrow.classList.add("arrow-showing")
        }, 1000)
    }

    render() {
        return (
            <div className="gallery-page">
                <HeroImage imageUrl={Image} loaderImageUrl={LoaderImage} heroHeight="100vh">
                    <h1 className="gallery-title">Gallery</h1>
                    <h1 className="gallery-arrow">
                        <FontAwesomeIcon icon={'angle-double-down'} size="md"/>
                    </h1>
                </HeroImage>
                <Header logo={logo} solid="" />
                <div className="container gallery-wrapper">
                    <h2>Instagram Feed</h2>
                    <InstagramFeed/>
                </div>
            </div>
        )
    }
    
}

export default Gallery;