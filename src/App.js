import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Product from './Product';
import About from './About'
import Home from './Home';
import Shoe from './Shoe';
import Footer from './Footer';
import {Route, Routes} from "react-router-dom";
import Products from './Products';




// <Route exact path= '/contact' component={() => <Contact />} />

function App() {
  return (
    
    <div>
    <Navbar />
  
   <Routes>

   <Route  path='/' element={<Home />} />

   
   <Route  path =  '/product' element = { <Product /> }>
   <Route  path = '/'         element = { <Products /> } />
   <Route  path = ':id'       element = { <Shoe /> } />
   </Route>

   <Route  path = '/about'    element = { <About /> } />
   
   </Routes>
   
   <Footer />
      </div>  
  );
}

export default App;
