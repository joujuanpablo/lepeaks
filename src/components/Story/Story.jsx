import React from 'react';
import UnderConstruction from '../../images/underConstruction.gif';
import HeroImage from '../HeroImage/HeroImage';
import Image from '../../images/Hero/andrew-charney.jpg';

export default (props) => {
    return (
        <div className="story-page">
            <HeroImage imageUrl={Image} heroHeight="300px">
            </HeroImage>
            Story Page
            <img className="under-construction" src={UnderConstruction} alt="under construction"/>    
        </div>
    )
}