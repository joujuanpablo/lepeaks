import React from 'react';
import HeroImage from '../HeroImage/HeroImage';
import Image from '../../images/Hero/tropical-dark.jpg';
import TipJarButton from '../../components/TipJarButton/TipJarButton';


export default (props) => {
    return (
        <div className="homepage">
            <HeroImage imageUrl={Image}>
                <TipJarButton />
            </HeroImage>
        </div>
    )
}