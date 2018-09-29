import React from 'react';
import Header from '../Header/Header';
import logo from '../../images/logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default (props) => {
    return (
        <div className="contact-page">
            <Header logo={logo} solid="solid" />
            <div className="wrapper container">
                <div className="contact-details">
                    <h1>Contact</h1>
                    <div className="email info-item">
                        <FontAwesomeIcon icon={'envelope'} size="lg" />
                        <p>
                            For booking info and media enquiries please message JP at lepeaksmusic@gmail.com
                            </p>
                    </div>
                    <div className="mobile info-item">
                        <FontAwesomeIcon icon={'mobile'} size="lg" />
                        <p>
                            +44 (0) 7825 015955
                        </p>
                    </div>
                    <div className="facebook info-item">
                        <FontAwesomeIcon icon={['fab', 'facebook-square']} size="lg" />
                        <p>
                            To share a little love, hit up our FB page <a href="https://www.facebook.com/lepeaks">@lepeaks</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}