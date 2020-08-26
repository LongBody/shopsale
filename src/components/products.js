import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import ProductCard from '../components/productCard'
import '../scss/app.scss'


class Product extends Component {

  constructor(props) {
    super(props);
  }

  render() {


    let result = this.props.products.map((item, index)=> {
      return (
        <Grid item xs={12} xs={12} sm={10} md={6} lg={2}>
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
          <Grid container spacing={1} xs={12} sm={6} md={6} lg={12}>
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

