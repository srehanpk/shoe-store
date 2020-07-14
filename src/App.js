import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Product from './Product';
import About from './About'
import Home from './Home';
import Launch from './Launch';
import {Route, Routes,     } from "react-router-dom";




// <Route exact path= '/contact' component={() => <Contact />} />

function App() {
  return (
    
    <div>
    <Navbar />
  
   <Routes>

   <Route  path='/' element={<Home />} />
   <Route path='/launch' element={<Launch />} />
   <Route  path= '/product' element={<Product />}/>
   <Route  path= '/about' element={<About />} />
   
   </Routes>
   
   
      </div>  
  );
}

export default App;
