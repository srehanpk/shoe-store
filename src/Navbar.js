import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-div">

    <nav className="nav-link">

    <Link  activeclassname="active-class" to='/' ><span>Home</span></Link>
    <Link  activeclassname="active-class" to='/product' ><span>Product</span></Link>
    <Link  activeclassname="active-class" to='/about' ><span>About us</span></Link>

    </nav>
    
    </div>
  );
}

export default Navbar;