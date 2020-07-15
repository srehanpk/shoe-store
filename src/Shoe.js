import React from 'react';
import './App.css';
import { useParams } from 'react-router-dom';
import Details from './Details';






function Shoe() {
    
    
    const {id}= useParams();

     const {shoeDetails}= Details();
     const selectShoe = shoeDetails[id];
     const {name, url} = selectShoe;
    
  
  return (
    

    <div className="shoe-image" >

    <h2>{name}</h2>
    <img src = {url} alt = {name} />
    
    
    </div>
  );
}

export default Shoe;



      
      