import React from 'react';
import HomeCopy from './Home-copy.json';
import events from './Events-list.json';
import textLogo from '../../images/text-logo.png';
import Image from '../../images/Hero/andrew-charney.jpg';
import LoaderImage from '../../images/Hero/andrew-charney-loader.jpg';
import logo from '../../images/logo-white.png';

//components
import TipJarButton from '../TipJarButton/TipJarButton';
import HeroImage from '../HeroImage/HeroImage';
import SoundCloudPlayer from '../SoundCloudPlayer/SoundCloudPlayer';
import TextButton from '../TextButton/TextButton';
import EventLink from '../EventLink/EventLink';
import Header from '../Header/Header';

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
                <Header logo={logo} />
                <HeroImage imageUrl={Image} loaderImageUrl={LoaderImage} heroHeight="100vh">
                    <img src={textLogo} alt="Le Peaks Music logo" className="text-logo"/>
                    <div className="intro-text">- MUSIC-</div>
                    <div className="hero-buttons">
                        <TextButton context={"hero-button"} text={this.state.textButtonText} handleClick={this.handleShowPlayer} />
                        <TipJarButton context={"hero-button"}/>
                    </div>
                    <SoundCloudPlayer display={this.state.playerShowing ? '' : 'player-hidden'}/>
                </HeroImage>
                <div className="upcoming-shows">
                    <div className="events-wrapper container">
                        <h1>Upcoming Events</h1>
                        <div className="events-scrollbox container">
                                {events.map((event) => (
                                    //add logic to only show upcoming events
                                    <EventLink 
                                        date={event.date} 
                                        venue={event.venue} 
                                        city={event.city}
                                        blurb={event.blurb} 
                                        eventUrl={event.eventUrl}
                                        tickets={event.tickets}
                                        locationUrl={event.locationUrl}
                                        key={event.date.day + event.date.month + event.date.time}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
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
            </div>
        )
    }
}

export default Home;