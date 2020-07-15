
import React from 'react';
import './App.css';
import {Outlet} from "react-router-dom";







function Product() {
  
   
  


  return (
    
    <div className="product-div">
    <h1>Product Page </h1>
    

    
    <Outlet/>
    </div>
  );
}

export default Product;

