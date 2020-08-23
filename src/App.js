import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Product from './Product';
import About from './About'
import Home from './Home';
import Shoe from './Shoe';
import Footer from './Footer';
import Cart from './Cart';
import {Route, Routes} from "react-router-dom";
import Products from './Products';
import NotFound from './Notfound';





function App() {
  return (
    
    <div>
    <Navbar />
  
   <Routes>

   <Route  path='/' element={<Home />} />

   
   <Route  path = '/product' element = { <Product /> }>
   <Route  path = '/'        element = { <Products /> } />
   <Route  path = ':id'      element = { <Shoe /> } />
   </Route>

   <Route  path  = '/cart'    element = { <Cart /> } />
   <Route  path = '*'        element = { <NotFound /> } />
   <Route  path = '/about'   element = { <About /> } />
   
   </Routes>
   
   <Footer />
      </div>  
  );
}

export default App;
