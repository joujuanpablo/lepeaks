import React from 'react';

export default (props) => {
    return (
        <div className={props.display + " soundcloud-player"}>
            <iframe 
                title="soundcloud player"
                width="100%" 
                height="100%" 
                scrolling="no" 
                frameborder="no" 
                allow="autoplay" 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/477720126&color=%2344646c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
            </iframe>
        </div>
    )
}


