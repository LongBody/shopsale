import React,  {useEffect} from 'react';
import ProductsContainer from '../../containers/productContainers'
import ProductFSContainer from '../../containers/productFSContainer'
import Header from '../body/header'
import Carousel from '../another/carousel'
import { Container } from '@material-ui/core';
import Footer from '../body/footer';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Countdown from 'react-countdown';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import image from '../../image/saledienthoai.png'
import { Link } from 'react-router-dom'
import Banner from '../another/banner'
import ServiceBar from '../body/serviceBar'
import MostPopular from '../body/MostPopularProduct'
import '../../scss/app.scss'
import {TITLE_SHOP_SALE} from '../../constants/config'
function Home() {


  useEffect(() => {
    document.title = TITLE_SHOP_SALE; 
},[]);

  return (
    <div>
      <Header />

      
      <Container style={{ paddingTop: 150 }}>
      </Container>

      <Container className="banner__home" style={{ paddingTop: 10, paddingBottom: 20, borderRadius:"5px" }}>
        <Grid container spacing={1} xs={12} sm={12} md={12} lg={12}>
          <Grid item xs={6} sm={6} md={8} lg={8} style={{ height: 230, width: "100%" }}>
            <Banner />
          </Grid>
          
          <Grid item xs={6} sm={6} md={4} lg={4}>
            <img src={image} style={{ height: 230, width: "100%", borderRadius:"5px"  }} />
          </Grid>
        </Grid>

      </Container>

      <Container style={{ paddingTop: 20 }}>

        <Toolbar variant="dense" style={{ backgroundColor: "#FFF" }}>
          <h4 style={{ color: "rgb(0, 172, 193)" }}>FLASH SALE
                             </h4>
          <FlashOnIcon style={{ color: "rgb(0, 172, 193)", marginLeft: 6 }} />
          <span style={{ marginLeft: 100, color: "#e79413", fontSize: 20 }}> <Countdown date={Date.now() + 12000000} /></span>
        </Toolbar>
        <ProductFSContainer />
      </Container>






      <Container style={{ paddingTop: 40 }}>
        <Carousel />
      </Container>


      <Container>
        <Toolbar variant="dense" style={{ backgroundColor: "#FFF", marginTop: 70 }}>
          <h4 style={{ color: "rgb(0, 172, 193)" }}> TẤT CẢ SẢN PHẨM </h4>
          <Link to={{
            pathname: '/shopsaleproduct/allproduct/' + 1,
          }} className="allProduct" style={{ marginLeft: 10 }}> Xem Thêm <i class="fas fa-angle-double-right" style={{ fontSize: 13 }}></i></Link>
        </Toolbar>
        <div style={{ backgroundColor: "rgb(0, 172, 193)", width: "100%", height: 2 }}></div>
      </Container>

      <ServiceBar />



      <Container>
        <Toolbar variant="dense" style={{ backgroundColor: "#FFF", marginTop: 70 }}>
          <h4 style={{ color: "#f57224", fontFamily: "sans-serif", fontWeight: "bold" }}> XU HƯỚNG TÌM KIẾM</h4>
          <i className="fas fa-fire" style={{ marginLeft: 10, color: "#f57224", fontSize: 20, marginBottom: 4 }}></i>
        </Toolbar>
        <div style={{ backgroundColor: "#f57224", width: "20%", height: 2 }}></div>
      </Container>

      <MostPopular />








      <Container style={{ paddingTop: 40 }}>
        <Toolbar variant="dense" style={{ backgroundColor: "#FFF", marginTop: 25 }}>
          <h4 style={{ color: "rgb(0, 172, 193)" }}> GỢI Ý CHO BẠN </h4>
        </Toolbar>
        <div style={{ backgroundColor: "rgb(0, 172, 193)", width: 200, height: 2 }}></div>

      </Container>

      <ProductsContainer />


      <Footer />

    </div>
  );
}

export default Home;
