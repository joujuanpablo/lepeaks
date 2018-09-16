import React from 'react';
import UnderConstruction from '../../images/underConstruction.gif';
import HeroImage from '../HeroImage/HeroImage';
import Image from '../../images/Hero/andrew-charney.jpg';
import InstagramFeed from '../../components/InstagramFeed/InstragramFeed'
import Header from '../Header/Header';
import logo from '../../images/logo-white.png';

export default (props) => {
    
    return (
        <div className="gallery-page">
            <Header logo={logo} solid="solid" />
            <HeroImage imageUrl={Image} heroHeight="300px">
            </HeroImage>
            Gallery Page
            <img className="under-construction" src={UnderConstruction} alt="under construction"/>
            <InstagramFeed/>
        </div>
    )
}