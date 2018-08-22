import React from 'react';
import HeroImage from '../HeroImage/HeroImage';
import Image from '../../images/Hero/andrew-charney.jpg';
import TipJarButton from '../../components/TipJarButton/TipJarButton';
import textLogo from '../../images/text-logo.png';


export default (props) => {
    return (
        <div className="homepage">
            <HeroImage imageUrl={Image} heroHeight="600px">
                <img src={textLogo} alt="Le Peaks Music logo" className="text-logo"/>
                <div className="intro-text">- MUSIC-</div>
                <TipJarButton />
            </HeroImage>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md">
                    <div className="text-container">
                        Here must go a portrait of Le Peaks man
                    </div>
                        
                    </div>
                    <div className="col-12 col-md">
                        <div className="text-container">
                            Le Peaks is a project that began in April 2018. A one man team with the dream to create and share a noisy sea of memories through sound.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}