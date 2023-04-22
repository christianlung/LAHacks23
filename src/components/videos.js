import React from 'react';
import UCLA from '../media/UCLA.jpg';
function videos(){
    return(
        <div>
            <span>
                <img className = "test" src={UCLA} alt="Image failed to load"/>
            </span>
        </div>
    );
}
export default videos;