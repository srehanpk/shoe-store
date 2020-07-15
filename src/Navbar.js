import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-div">

    <nav className="nav-link">

    <Link  to='/' ><span>Home</span></Link>
    <Link  to='/product' ><span>Product</span></Link>
    <Link  to='/about' ><span>About us</span></Link>

    </nav>
    
    </div>
  );
}

export default Navbar;