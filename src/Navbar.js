import React from 'react';
import './App.css';
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Navbar() {
  return (
    <div className="nav-div">

    <nav className="nav-link">

    <NavLink className="home" activeClassName= "active"  to = '/' > Home</NavLink>
    <NavLink className="home" activeClassName= "active"  to = '/product' >Product</NavLink>
    <NavLink className="home" activeClassName= "active"  to = '/about' > About us</NavLink>
    <NavLink className="cart" activeClassName= "active"    to = '/cart' > <ShoppingCartIcon/></NavLink>
    </nav>
    
    </div>
  );
}

export default Navbar;