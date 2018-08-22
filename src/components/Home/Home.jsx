import React from 'react';
import HeroImage from '../HeroImage/HeroImage';
import Image from '../../images/Hero/andrew-charney.jpg';
import TipJarButton from '../../components/TipJarButton/TipJarButton';
import textLogo from '../../images/text-logo.png';
import UnderConstruction from '../../images/underConstruction.gif';
import SoundCloudPlayer from '../../components/SoundCloudPlayer/SoundCloudPlayer';
import TextButton from '../../components/TextButton/TextButton';

class Home extends React.Component {

    state = {
        playerShowing: false,
        textButtonText: 'LISTEN',
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
                        <TextButton text={this.state.textButtonText} handleClick={this.handleShowPlayer} />
                        <TipJarButton />
                    </div>
                    <SoundCloudPlayer display={this.state.playerShowing ? '' : 'player-hidden'}/>
                </HeroImage>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md">
                        <div className="text-container">
                            <img className="under-construction" src={UnderConstruction} alt="under construction"/>
                        </div>
                            
                        </div>
                        <div className="col-12 col-md">
                            <div className="text-container">
                                <p>Le Peaks is a project that began April 2018. A one man team on a mission to capture and share a noisy sea of memories through sound. With it I hope to lift you from the now, and from up there, above the chaos, show you all the little pieces stitched together.</p>
                                <h5>Who am I, what is my story?</h5>
                                <p>I'm a corporate web developer for the taxes and bills. I write music to find meaning. A free spirit, lone wolf, nomadic Colombian Canadian.</p>
                                <h5>Influences and topics</h5>
                                <p>Echoes and gibberish swirling in my mind. Adulthood, the importance of family and friendship, insignificance, love, the passing of time, and the grey areas between right and wrong. Complex things connected together in a delicate and constantly evolving web.</p>
                                <p>I draw inspiration from all sorts of music, from folk songs to church hymns to funk and pop. Electronic music has also lent itself very helpful in capturing my ideas by giving me infinite sounds possibilities all through the black and white keys I'm so familiar with. All these elements come together to form the music you hear.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;