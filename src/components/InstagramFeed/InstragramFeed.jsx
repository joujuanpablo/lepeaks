import React from 'react';

class InstagramFeed extends React.Component {

    state = {
      posts: []
    }
    
    componentDidMount() {
      fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=8075650877.6381c0f.8dc579a30bec4416b007042887dc8fe4`)
      .then(res => res.json())
      .catch(err => console.log('getInstaPhotos Error', err))
      .then((result) => {
        console.log(result.data)
        this.setState({posts:result.data})
      })

    }
  
    render(){

        return (
          <div className="instagram-feed">
            {this.state.posts.map((post, index) => 
              <div className="post" id={post.id}>
                <img src={post.images.low_resolution.url} alt=""/>
                <div className="comment">{index}</div>
              </div>
            )}
          </div>
        )
    }
}
export default InstagramFeed;