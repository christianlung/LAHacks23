import React from 'react';
import './videos.css';
import UCLA from '../media/UCLA.jpg';
function videos(){
    return(
        <div>
            <img className = "picture" src={UCLA} alt="Image failed to load"/>
        </div>
    );
}
export default videos;