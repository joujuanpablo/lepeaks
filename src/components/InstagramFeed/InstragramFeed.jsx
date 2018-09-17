import React from 'react';
import LoaderImage from '../../images/Hero/andrew-charney-loader.jpg';
import LoaderImagee from '../../images/Hero/michael-heuser-loader.png';
import Slider from 'react-slick';

class InstagramFeed extends React.Component {

  state = {
    posts: []
  }

  componentDidMount() {

    //instagram api get posts
    fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=8075650877.6381c0f.8dc579a30bec4416b007042887dc8fe4`)
      .then(res => res.json())
      .catch(err => console.log('getInstaPhotos Error', err))
      .then((result) => {
        console.log(result.data)
        this.setState({ posts: result.data })
      })
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className="instagram-feed">
        <div className="container">
          <Slider {...settings}>
            {this.state.posts.map((post, index) => 
              <div className="post-wrapper">
                  <div className="post" key={post.id}>
                  { post.type === 'video' 
                    ?   <video 
                          src={post.videos.standard_resolution.url}
                          type="video/mp4"
                          controls="play/pause"> 
                        </video>
                    :  <img src={post.images.low_resolution.url} alt={post.tags}/>
                  }
                </div>
              </div>
              )}
          </Slider>
          
        </div>
      </div>
    )
  }
}
export default InstagramFeed;


