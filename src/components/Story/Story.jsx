import React from 'react';
import HeroImage from '../HeroImage/HeroImage';
import Image from '../../images/Hero/andrew-charney.jpg';
import Header from '../Header/Header';
import logo from '../../images/logo-white.png';
import text from './Story-copy.json';

export default () => {
    return (
        <div className="story-page">
            <Header logo={logo} solid="" />
            <HeroImage imageUrl={Image} heroHeight="90vh">
                <div className="container">
                    <div className="row">
                        <div className="hero-left col-xs-12 col-md-5">
                            <h1>Le Peaks</h1>
                            <p>{text.summary1}</p>
                            <p>{text.summary2}</p>
                        </div>
                        <div className="hero-right col-xs-12 col-md-7"></div>
                    </div>
                </div>
            </HeroImage>
            <div className="story-content container">
                <div className="row">
                    <div className="col-xs-12 order-md-2 col-md-6 col-lg-5 text">
                        <div className="text">
                            <h3>{text.theName.subheading}</h3>
                            <h2>{text.theName.heading}</h2>
                            <p>{text.theName.body1}</p>
                            <p>{text.theName.body2}</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-7 image the-name"></div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-6 col-lg-5">
                        <div className="text">
                            <h3>{text.earlyHistory.subheading}</h3>
                            <h2>{text.earlyHistory.heading}</h2>
                            <p>{text.earlyHistory.body1}</p>
                            <p>{text.earlyHistory.body2}</p>
                            <p>{text.earlyHistory.body3}</p>
                            <p>{text.earlyHistory.body4}</p>
                            <p>{text.earlyHistory.body5}</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-7 image early-history"></div>
                </div>
                <div className="row">
                    <div className="col-xs-12 order-md-2 col-md-6 col-lg-5">
                        <div className="text">
                            <h3>{text.theJob.subheading}</h3>
                            <h2>{text.theJob.heading}</h2>
                            <p>{text.theJob.body1}</p>
                            <p>{text.theJob.body2}</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-7 image the-job"></div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-6 col-lg-5">
                        <div className="text">
                            <h3>{text.theBreak.subheading}</h3>
                            <h2>{text.theBreak.heading}</h2>
                            <p>{text.theBreak.body1}</p>
                            <p>{text.theBreak.body2}</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-7 image the-break"></div>
                </div>
                <div className="row">
                    <div className="col-xs-12 order-md-2 col-md-6 col-lg-5">
                        <div className="text">
                            <h3>{text.theNow.subheading}</h3>
                            <h2>{text.theNow.heading}</h2>
                            <p>{text.theNow.body1}</p>
                            <p>{text.theNow.body2}</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-7 image the-now"></div>
                </div>
            </div>
        </div>
    )
}