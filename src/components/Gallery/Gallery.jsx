import React from 'react';
import UnderConstruction from '../../images/underConstruction.gif';
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
                <InstagramFeed/>
            </HeroImage>
            <Header logo={logo} solid="" />
            <img className="under-construction" src={UnderConstruction} alt="under construction"/>
        </div>
    )
}