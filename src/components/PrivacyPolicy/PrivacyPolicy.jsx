import React from 'react';
import UnderConstruction from '../../images/underConstruction.gif';
import HeroImage from '../HeroImage/HeroImage';
import Image from '../../images/Hero/andrew-charney.jpg';

export default () => {
    return(
        <div className="privacy-policy">
            <HeroImage imageUrl={Image} heroHeight="300px">
            </HeroImage>
            Privacy Policy
            <img className="under-construction" src={UnderConstruction} alt="under construction"/>
        </div>
    )
}