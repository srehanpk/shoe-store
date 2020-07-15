import React, {useState} from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import {Card, Grid, Paper, CardContent, CardActions, CardActionArea, CardMedia} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Details from './Details';
import { Link } from "react-router-dom"
//import {Outlet} from "react-router-dom";




const useStyles = makeStyles({

  media: {
    height: 150,
    width: 250,
    
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    width: "max-content",
    margin: "auto",
  },
});


function Products() {

  const [shoeId, setShoeId] = useState();
  console.log(shoeId);

  const classes = useStyles();

  const {shoeDetails}= Details();
  
  

  return (
   

      <div className="card-div">
      <Grid container spacing={4} justify="center">

      {Object.entries(shoeDetails).map(([id,{name, image, price}]) => {
        return (

          <Grid item xs={10} md={4}>
        
          <Paper className={classes.paper}>
          <Card>
          
          <CardActionArea >
          <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
          {name}
          </Typography>
          </CardContent>

          <Link to={`/product/${id}`}>
            <CardMedia
             
              className={classes.media}
              image= {image}
              title= "shoes"
            />
            </Link>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                $ {price}
              </Typography>
             </CardContent>
            
          </CardActionArea>
          
          <CardActions>
            <Button value={id} onClick={()=> setShoeId({id})} size="large" color="primary">
              Add to cart
            </Button>
          </CardActions>
        </Card>
          </Paper>
        </Grid>

       
        );
      })}
      
      
      </Grid>
      
    
    </div>
    
  );
}

export default Products;











































      
      