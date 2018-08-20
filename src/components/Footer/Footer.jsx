import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextInput from '../TextInput/TextInput';
export default (props) => {

    return(
        <footer>
            <div className="solid"> 
                <div className="row">
                    <div className="admin-links col-4">
                        <Link to={'/terms-conditions'}>Terms & Conditions</Link>
                        <Link to={'/privacy-policy'}>Privacy Policy</Link>
                        <Link to={'/contact'}>Contact</Link>
                    </div>  
                    <div className="newsletter col-8">
                        Sign up for our newsletter
                        <TextInput icon={'envelope'}/>
                    </div>
                </div>
            </div>
            <div className="image">
                <div className="social-links">
                    <Link to={'https://www.instagram.com/lepeaksmusic/'}>
                        <FontAwesomeIcon icon={['fab', 'instagram']} size="lg"/>
                    </Link>
                    <Link to={'https://www.facebook.com/lepeaks'}>
                        <FontAwesomeIcon icon={['fab', 'facebook-square']} size="lg"/>
                    </Link>
                    <Link to={'https://www.youtube.com/channel/UC4gja3SBSN83BRz750O7ryw'}>
                        <FontAwesomeIcon icon={['fab', 'youtube']} size="lg"/>
                    </Link>
                    <Link to={'https://soundcloud.com/user-953480858'}>
                        <FontAwesomeIcon icon={['fab', 'soundcloud']} size="lg" />
                    </Link>
                    <Link to={''}>
                        <FontAwesomeIcon icon={['fab', 'spotify']} size="lg" />
                    </Link>
                    <Link to={''}></Link>
                </div>
            </div>
        </footer>
    )
}