import React from 'react';
import HeroImage from '../HeroImage/HeroImage';
import Image from '../../images/Hero/michael-heuser.png';
import LoaderImage from '../../images/Hero/michael-heuser-loader.png'
import InstagramFeed from '../../components/InstagramFeed/InstragramFeed'
import Header from '../Header/Header';
import logo from '../../images/logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Lightbox from 'lightbox-react';

class Gallery extends React.Component {

    state = {
        photoIndex: 0,
        isOpen: false,
    }

    componentDidMount() {
        this.showArrow()
    }

    showArrow = () => {
        var arrow = document.querySelector(".gallery-arrow");

        setTimeout(() => {
            arrow.classList.add("arrow-showing")
        }, 1000)
    }

    images = [
        '//placekitten.com/1500/500', //is the issue the beggining of the url? Also, maybe you need to have a failover for the images?
        '//placekitten.com/4000/3000',
        '//placekitten.com/800/1200',
        '//placekitten.com/1500/1500',
      ]

    render() {
        const { photoIndex, isOpen } = this.state;
        const images = this.images;

        return (
            <div className="gallery-page">
                <HeroImage imageUrl={Image} loaderImageUrl={LoaderImage} heroHeight="100vh">
                    <h1 className="gallery-title">Gallery</h1>
                    <h1 className="gallery-arrow">
                        <FontAwesomeIcon icon={'angle-double-down'} size="sm" />
                    </h1>
                </HeroImage>
                <Header logo={logo} solid="" />
                <div className="container gallery-wrapper">
                    <h2>Instagram Feed</h2>
                    <InstagramFeed />
                    <div className="lightbox-gallery">
                        <div>
                            <button type="button" onClick={() => this.setState({ isOpen: true })}>
                                Open Lightbox
                            </button>

                            {isOpen && (
                                <Lightbox
                                    mainSrc={images[photoIndex]}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => this.setState({ isOpen: false })}
                                    onMovePrevRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + images.length - 1) % images.length,
                                        })
                                    }
                                    onMoveNextRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + 1) % images.length,
                                        })
                                    }
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Gallery;