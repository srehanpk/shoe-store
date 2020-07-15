import React from 'react';
import './App.css';
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Navbar() {
  return (
    <div className="nav-div">

    <nav className="nav-link">

    <NavLink  activeClassName= "active" to='/' >         <span>Home</span></NavLink>
    <NavLink  activeClassName= "active"   to='/product' ><span>Product</span></NavLink>
    <NavLink  activeClassName= "active"  to='/about' >   <span>About us</span></NavLink>
    <NavLink className="cart" to = "/cart"><ShoppingCartIcon/></NavLink>
    </nav>
    
    </div>
  );
}

export default Navbar;