import React from 'react';

function Video(url){
    return(
        <div>
            <iframe
                src={`${url.url}?autoplay=1&mute=1`}
                title={url.title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                width="auto"
            ></iframe>
        </div>
    );
}

export default Video;