import React from 'react';
import HomeCopy from './Home-copy.json';
import textLogo from '../../images/text-logo.png';
import Image from '../../images/Hero/andrew-charney.jpg';
import UnderConstruction from '../../images/underConstruction.gif';

//components
import TipJarButton from '../TipJarButton/TipJarButton';
import HeroImage from '../HeroImage/HeroImage';
import SoundCloudPlayer from '../SoundCloudPlayer/SoundCloudPlayer';
import TextButton from '../TextButton/TextButton';
import EventLink from '../EventLink/EventLink';

class Home extends React.Component {

    state = {
        playerShowing: false,
        textButtonText: 'LISTEN',
    }

    componentDidMount() {
        this.showButtons();
    }
    
    showButtons = () => {
        var buttons = document.querySelector(".hero-buttons");
        
        setTimeout(() => {
            buttons.classList.add("buttons-showing")
        }, 1000)
    }

    handleShowPlayer = () => {
        this.state.playerShowing 
        ? this.setState({playerShowing: false, textButtonText: 'LISTEN'}) 
        : this.setState({playerShowing: true, textButtonText: 'HIDE PLAYER'})
    } 

    render() {
        return (
            <div className="homepage">
                <HeroImage imageUrl={Image} heroHeight="600px">
                    <img src={textLogo} alt="Le Peaks Music logo" className="text-logo"/>
                    <div className="intro-text">- MUSIC-</div>
                    <div className="hero-buttons">
                        <TextButton context={"hero-button"} text={this.state.textButtonText} handleClick={this.handleShowPlayer} />
                        <TipJarButton context={"hero-button"}/>
                    </div>
                    <SoundCloudPlayer display={this.state.playerShowing ? '' : 'player-hidden'}/>
                </HeroImage>
                <div className="about-row-wrapper container">
                    <div className="row about-row">
                        <div className="col-12 col-md about-column">
                            <div className="image-container">
                                {/* <img className="under-construction" src={UnderConstruction} alt="under construction"/> */}
                            </div>
                        </div>
                        <div className="col-12 col-md about-column">
                            <div className="text-container">
                                <div className="top-border"></div>
                                <h3>{HomeCopy.aboutRow.heading1}</h3>
                                <p>{HomeCopy.aboutRow.body1}</p>
                                <h3>{HomeCopy.aboutRow.heading2}</h3>
                                <p>{HomeCopy.aboutRow.body2}</p>
                                <h3>{HomeCopy.aboutRow.heading3}</h3>
                                <p>{HomeCopy.aboutRow.body31}</p>
                                <p>{HomeCopy.aboutRow.body32}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="upcoming-shows">
                    {this.props.events.map((event) => (
                        <EventLink 
                            date={'01/02/2018'} 
                            venue={'Le Cafe'} 
                            city={'Toronto'} 
                            eventUrl={'https://www.google.com'} 
                            entryType={'Free - Details'}/>
                    ))}
                    
                </div> */}
            </div>
        )
    }
}

export default Home;