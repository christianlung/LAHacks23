// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import { Button } from '@mui/material';

function Navbar(){
  return (
      <nav className="myNav">
          <img className="logo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
          <h1 className="title">FEED</h1>
          <ul>
              <li><a href="#">Upload</a></li>
              {/* <li><a href="#">Projects</a></li> */}
          </ul>
          <button>Login</button>
      </nav>
  );
}

export default Navbar;
