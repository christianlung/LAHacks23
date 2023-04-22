import React from 'react';
import './navbar.css';
import { Button } from '@mui/material';

function navbar(){
    return (
        <nav className="myNav">
            <img className="logo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
            <h1 className="title">FEED</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
            </ul>
            <button>Login</button>
        </nav>
    );
}

export default navbar;