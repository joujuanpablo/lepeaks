import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextInput from '../TextInput/TextInput';

class Footer extends React.Component {
    state = {
        scrolled: false,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScrollFooter);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollFooter);
    }

    handleScrollFooter = () => {
        let scrollTop = window.scrollY
        let footerOffset = document.querySelector("footer").offsetTop;

        if (scrollTop > (footerOffset - window.innerHeight*0.7)) {
            this.setState(() => ({scrolled: true}));

           var links = document.querySelectorAll(".social-link");

            links.forEach((link, index) => { 
                setTimeout(() => {
                    link.classList.add("showing")
                }, index*100)
                    

                
            })
        }

    }

    render() {
        return(
            <footer>
                <div className="solid"> 
                    <div className="container">
                        <div className="row">
                            <div className="admin-links col-12 col-md-6">
                                <Link to={'/terms-conditions'}>Terms & Conditions</Link>
                                <Link to={'/privacy-policy'}>Privacy Policy</Link>
                                <Link to={'/contact'}>Contact</Link>
                                <a href="http://whymusicmatters.com/whymusicmatters.com/index.html">Why Music Matters</a>
                            </div>  
                            <div className="newsletter col-12 col-md-6">
                                <div>
                                    Sign up for our newsletter
                                </div>
                                <TextInput icon={'envelope'}/>
                                <p className="copyright">
                                    © 2018 Le Peaks Music
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <div className="social-links container">
                        <Link className="social-link" to={'https://www.instagram.com/lepeaksmusic/'}>
                            <FontAwesomeIcon icon={['fab', 'instagram']} size="2x"/>
                        </Link>
                        <Link className="social-link" to={'https://www.facebook.com/lepeaks'}>
                            <FontAwesomeIcon icon={['fab', 'facebook-square']} size="2x"/>
                        </Link>
                        <Link className="social-link" to={'https://www.youtube.com/channel/UC4gja3SBSN83BRz750O7ryw'}>
                            <FontAwesomeIcon icon={['fab', 'youtube']} size="2x"/>
                        </Link>
                        <Link className="social-link" to={'https://soundcloud.com/user-953480858'}>
                            <FontAwesomeIcon icon={['fab', 'soundcloud']} size="2x" />
                        </Link>
                        <Link className="social-link" to={''}>
                            <FontAwesomeIcon icon={['fab', 'spotify']} size="2x" />
                        </Link>                  
                    </div>
                </div>
            </footer>
        )
    }
}


export default Footer;