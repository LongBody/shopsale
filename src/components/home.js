import React from 'react';
import ProductsContainer from '../containers/productContainers'
import ProductFSContainer from '../containers/productFSContainer'
import Header from '../components/header'
import Banner from '../components/banner'
import Carousel from '../components/carousel'
import { Container } from '@material-ui/core';
import Footer from '../components/footer';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import image from '../image/saledienthoai.png'

function Home() {

  return (
    <div>
      <Header />
     {/* <Container style={{paddingTop:120 , background:"#f5f5f5"}}>
     <Grid container spacing={0} xs={12} sm={12} md={12} lg={12}>
     <Grid item xs={6} sm={6} md={8} lg={12} style={{height:300,width:"100%"}}>
     <Banner/>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4}>
     <img src= {image} style={{height:260}}/>
        </Grid>
          </Grid>
  
     </Container> */}

      <Container style={{paddingTop:50}}>
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
