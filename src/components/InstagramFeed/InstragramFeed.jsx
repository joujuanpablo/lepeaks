import React from 'react';
import Instafeed from 'react-instafeed';

class InstagramFeed extends React.Component {
    render(){
        const instafeedTarget = 'instafeed';

        return (
          <div id={instafeedTarget}>
            <Instafeed
              limit='10'
              ref='instafeed'
              resolution='standard_resolution'
              sortBy='most-recent'
              target={instafeedTarget}
              template=''
              userId='lepeaksmusic'
              clientId='6381c0f73607442ebd1fb79aa02ad38d'
              accessToken='facc3170cd3a487e900d128b104968a2'
            />
          </div>
        )
    }
}
export default InstagramFeed;