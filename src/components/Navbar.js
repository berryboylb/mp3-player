import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../close.svg";
import { ReactComponent as MenuIcon } from "../menu.svg";

import { Link } from 'react-router-dom';

import "../header.css";

const Navbar  = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


    return (
        <nav>
        <div className="title"><h3>Trap Card</h3></div>
            <ul className={click ? "nav-active" : "navlist"}>
                <li><Link to="/music">Music</Link></li>
                <li><Link to="/about">PlayList</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        <div className="menu">
        <button className="my-nav-icon" onClick={handleClick}>
          {click ? (
            <CloseMenu className="my-menu-icon" />
          ) : (
            <MenuIcon className="my-menu-icon" />
          )}
        </button>
        </div>
    </nav>
    );
  };
  
  export default Navbar;
  