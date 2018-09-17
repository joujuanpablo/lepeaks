import React from 'react';
import HeroImage from '../HeroImage/HeroImage';
import Image from '../../images/Hero/michael-heuser.png';
import LoaderImage from '../../images/Hero/michael-heuser-loader.png'
import InstagramFeed from '../../components/InstagramFeed/InstragramFeed'
import Header from '../Header/Header';
import logo from '../../images/logo-white.png';

export default (props) => {
    
    return (
        <div className="gallery-page">
            <HeroImage imageUrl={Image} loaderImageUrl={LoaderImage} heroHeight="100vh">
                <h1 className="gallery-title">Gallery</h1>
            </HeroImage>
            <Header logo={logo} solid="" />
            <div className="container gallery-wrapper">
                <h2>Instagram Feed</h2>
                <InstagramFeed/>
            </div>
        </div>
    )
}