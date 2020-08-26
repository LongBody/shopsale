import React from 'react';
import ProductsContainer from '../containers/productContainers'
import ProductFSContainer from '../containers/productFSContainer'
import Header from '../components/header'
import Carousel from '../components/carousel'
import { Container } from '@material-ui/core';
import Footer from '../components/footer';
import FlashSale from '../components/flashSale';
import Toolbar from '@material-ui/core/Toolbar';

function Home() {

  return (
    <div>
      <Header />
      <Container style={{paddingTop:120}}>
      <ProductFSContainer/>
      </Container>
      
      
      <Container style={{paddingTop:40}}>
            <Carousel />
      </Container>


      <Container style={{paddingTop:40}}>
      <div position="static" className="appbarProduct">
                    <Toolbar variant="dense">
                        <h4 style={{color:"rgb(0, 172, 193)"}}> GỢI Ý CHO BẠN </h4>
                    </Toolbar>
                    <div style={{backgroundColor:"rgb(0, 172, 193)",width:200,height:2}}>.</div>
                </div>
      </Container>
  
      <ProductsContainer />

      <Footer/>

    </div>
  );
}

export default Home;
