import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextInput from '../TextInput/TextInput';
export default (props) => {

    return(
        <footer>
            <div className="image">
                <div className="social-links container">
                    <Link to={'https://www.instagram.com/lepeaksmusic/'}>
                        <FontAwesomeIcon icon={['fab', 'instagram']} size="2x"/>
                    </Link>
                    <Link to={'https://www.facebook.com/lepeaks'}>
                        <FontAwesomeIcon icon={['fab', 'facebook-square']} size="2x"/>
                    </Link>
                    <Link to={'https://www.youtube.com/channel/UC4gja3SBSN83BRz750O7ryw'}>
                        <FontAwesomeIcon icon={['fab', 'youtube']} size="2x"/>
                    </Link>
                    <Link to={'https://soundcloud.com/user-953480858'}>
                        <FontAwesomeIcon icon={['fab', 'soundcloud']} size="2x" />
                    </Link>
                    <Link to={''}>
                        <FontAwesomeIcon icon={['fab', 'spotify']} size="2x" />
                    </Link>                  
                </div>
            </div>
            <div className="solid"> 
                <div className="container">
                    <div className="row">
                        <div className="admin-links col-12 col-md-6">
                            <Link to={'/terms-conditions'}>Terms & Conditions</Link>
                            <Link to={'/privacy-policy'}>Privacy Policy</Link>
                            <Link to={'/contact'}>Contact</Link>
                            <div>
                                © 2018 Le Peaks Music
                            </div>
                        </div>  
                        <div className="newsletter col-12 col-md-6">
                            <div>
                                Sign up for our newsletter
                            </div>
                            <TextInput icon={'envelope'}/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}