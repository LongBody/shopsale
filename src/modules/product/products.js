import React, { Component } from 'react';
import { Container,  Grid } from '@material-ui/core';
import ProductCard from './productCard'
import 'scss/app.scss'


class Product extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {


    let result = this.props.products.map((item, index)=> {
      return (
        <Grid key={index} item xs={6} sm={3} md={4} lg={2}>
          <ProductCard
            key ={index}
            id={item._id}
            imageUrl={item.imageUrl}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            star={item.star}
          ></ProductCard>
        </Grid>
      )
    })

    return (

      <div >
        <Container>
          <Grid container spacing={1} >
            {
              result
            }
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Product

