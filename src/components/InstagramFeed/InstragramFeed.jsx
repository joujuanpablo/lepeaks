import React from 'react';
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
      dots: false,
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
        <div className="">
          <Slider {...settings}>
            {this.state.posts.map((post) => 
              <div className="post-wrapper" key={post.id}>
                  <div className="post">
                  { post.type === 'video' 
                    ? <video 
                      src={post.videos.standard_resolution.url}
                      type="video/mp4"
                      controls="play/pause"> 
                      </video>
                    : <div className="overlay-image">
                        <a href={post.link} target="_blank">
                            <img src={post.images.low_resolution.url} alt={post.tags}/>
                            <div className="text">View in Instagram</div>
                        </a>
                      </div>
                    
                      
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


