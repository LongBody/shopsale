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
import { Link } from 'react-router-dom'
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

      <Container style={{ paddingTop: 160 }}>
        <ProductFSContainer />
      </Container>


      <Container style={{ paddingTop: 40 }}>
        <Carousel />
      </Container>


      <Container>
      <Toolbar variant="dense" style={{backgroundColor:"#FFF" ,marginTop:70  }}>
          <h4 style={{ color: "rgb(0, 172, 193)" }}> TẤT CẢ SẢN PHẨM </h4>
          <Link to={{
            pathname:'/shopsaleproduct/allproduct/' + 1,
          }} className="allProduct" style={{marginLeft:10}}> Xem Thêm <i class="fas fa-angle-double-right"  style={{fontSize:13}}></i></Link>
        </Toolbar>
        <div style={{ backgroundColor: "rgb(0, 172, 193)", width: "100%", height: 2 }}></div>
      </Container>

      <Container>
      <Toolbar variant="dense" style={{backgroundColor:"#FFF"  , paddingTop:25 }}>
      <Grid container spacing={4} xs={12} sm={6} md={6} lg={12}>
      <Grid item xs={12} xs={6} sm={3} md={4} lg={2}>
        <div>
        <i className="fas fa-shipping-fast" style={{fontSize:50, display:"flex" , justifyContent:"center" ,color:"rgb(0, 172, 193)"}}></i>
        <h3 style={{textAlign:"center" ,color:"#e79413"}}>Giao Hàng Miễn Phí</h3>
        </div>
        </Grid>
        

        <Grid item xs={12} xs={6} sm={3} md={4} lg={2}>
        <div>
        <i className="fas fa-dice-d6" style={{fontSize:50, display:"flex" , justifyContent:"center" ,color:"rgb(0, 172, 193)"}}></i>
        <h3 style={{textAlign:"center" ,color:"#e79413"}}>Đa Dạng Sản Phẩm</h3>
        </div>
        </Grid>

        <Grid item xs={12} xs={6} sm={3} md={4} lg={2}>
        <div>
        <i className="fas fa-tags" style={{fontSize:50, display:"flex" , justifyContent:"center" ,color:"rgb(0, 172, 193)"}}></i>
        <h3 style={{textAlign:"center" ,color:"#e79413"}}>Giá Ưu Đãi</h3>
        </div>
        </Grid>

        <Grid item xs={12} xs={6} sm={3} md={4} lg={2}>
        <div>
        <i className="fas fa-box-open" style={{fontSize:50 , display:"flex" , justifyContent:"center" , color:"rgb(0, 172, 193)"}}></i>
        <h3 style={{textAlign:"center" , color:"#e79413"}}>Dễ Dàng Đổi Trả</h3>
        </div>
        </Grid>

        <Grid item xs={12} xs={6} sm={3} md={4} lg={2}>
        <div>       
        <i className="fas fa-headset" style={{fontSize:50 , display:"flex" , justifyContent:"center" , color:"rgb(0, 172, 193)"}}></i>
        <h3 style={{textAlign:"center", color:"#e79413"}}>Hỗ Trợ 24/7</h3>
        </div>
        </Grid>

        <Grid item xs={12} xs={6} sm={3} md={4} lg={2}>
        <div>       
        <i className="fas fa-money-check-alt" style={{fontSize:50 , display:"flex" , justifyContent:"center" , color:"rgb(0, 172, 193)"}}></i>
        <h3 style={{textAlign:"center" , color:"#e79413" }}>Thanh Toán An Toàn</h3>
        </div>
        </Grid>

        <Grid item xs={12} xs={6} sm={3} md={4} lg={2}>
        </Grid>
          </Grid>
        </Toolbar>
      </Container>


      <Container style={{ paddingTop: 40 }}>
          <Toolbar variant="dense" style={{backgroundColor:"#FFF" ,marginTop:25  }}>
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
