import { Container, Grid, Toolbar } from '@material-ui/core';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import Banner from 'components/body/banner';
import Footer from 'components/body/footer';
import Header from 'components/body/header';
import ProductAppleMacbookLayout from 'components/body/product-apple-macbook';
import ProductPhoneAccessories from 'components/body/product-phone-accessories';
import ProductCategory from 'components/body/product-category/index';
import MostPopularProduct from 'components/body/product-most-popular';
import ServiceBar from 'components/body/service-bar';
import { TITLE_SHOP_SALE } from 'constants/config';
import ProductsContainer from 'containers/productContainers';
import ProductFSContainer from 'containers/productFSContainer';
import ScrollToTop from 'hooks/scroll_to_top';
import image from 'image/saledienthoai.png';
import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import 'scss/app.scss';

function Home() {
  useEffect(() => {
    document.title = TITLE_SHOP_SALE;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <ScrollToTop />
      <Header />
      <Container style={{ paddingTop: 150 }}>{''}</Container>
      <Container
        className="banner__home"
        style={{ paddingTop: 10, paddingBottom: 20, borderRadius: '5px' }}
      >
        <Grid container spacing={1}>
          <Grid
            item
            xs={6}
            sm={6}
            md={8}
            lg={8}
            style={{ height: 230, width: '100%' }}
          >
            <Banner />
          </Grid>

          <Grid item xs={6} sm={6} md={4} lg={4}>
            <LazyLoadImage
              effect="blur"
              src={image}
              style={{
                height: 230,
                width: '100%',
                borderRadius: '5px',
                boxShadow: '0 11px 6px -6px black',
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <Container style={{ paddingTop: 20 }}>
        <Toolbar variant="dense" style={{ backgroundColor: '#FFF' }}>
          <h4 style={{ color: 'rgb(0, 172, 193)' }}>FLASH SALE</h4>
          <FlashOnIcon style={{ color: 'rgb(0, 172, 193)', marginLeft: 6 }} />
          <span style={{ marginLeft: 100, color: '#e79413', fontSize: 20 }}>
            {' '}
            <Countdown date={Date.now() + 12000000} />
          </span>
        </Toolbar>
        <ProductFSContainer />
      </Container>

      <Container style={{ paddingTop: 40 }}>
        <ProductCategory />
      </Container>

      <Container style={{ paddingTop: 20 }}>
        <Toolbar
          variant="dense"
          style={{ backgroundColor: '#FFF', marginTop: 70 }}
        >
          <h4 style={{ color: 'rgb(0, 172, 193)' }}>
            {' '}
            <i
              className="fab fa-apple earphone__apple__logo"
              style={{ marginRight: 5 }}
            ></i>{' '}
            MAC
          </h4>
        </Toolbar>
        <ProductAppleMacbookLayout />
      </Container>

      <Container>
        <Toolbar
          variant="dense"
          style={{ backgroundColor: '#FFF', marginTop: 70 }}
        >
          <h4 style={{ color: 'rgb(0, 172, 193)' }}> TẤT CẢ SẢN PHẨM </h4>
          <Link
            to={{
              pathname: '/shopsaleproduct/products',
            }}
            className="allProduct"
            style={{ marginLeft: 10 }}
          >
            {' '}
            Xem Thêm{' '}
          </Link>
        </Toolbar>
        <div
          style={{
            backgroundColor: 'rgb(0, 172, 193)',
            width: '100%',
            height: 2,
          }}
        ></div>
      </Container>

      <ServiceBar />

      <Container style={{ paddingTop: 20 }}>
        <Toolbar
          variant="dense"
          style={{ backgroundColor: '#FFF', marginTop: 70 }}
        >
          <h4 style={{ color: 'rgb(0, 172, 193)' }}>PHỤ KIỆN NỔI BẬT NHẤT</h4>
        </Toolbar>
        <ProductPhoneAccessories />
      </Container>

      <Container>
        <Toolbar
          variant="dense"
          style={{ backgroundColor: '#FFF', marginTop: 70 }}
        >
          <h4
            style={{
              color: '#f57224',
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
            }}
          >
            {' '}
            XU HƯỚNG TÌM KIẾM
          </h4>
          <i
            className="fas fa-fire"
            style={{
              marginLeft: 10,
              color: '#f57224',
              fontSize: 20,
              marginBottom: 4,
            }}
          ></i>
        </Toolbar>
        <div
          style={{ backgroundColor: '#f57224', width: '20%', height: 2 }}
        ></div>
      </Container>

      <MostPopularProduct />

      <div className="scroll-to-top">
        {isVisible && (
          <div className="icon-scroll" onClick={scrollToTop}>
            <i className="fas fa-arrow-up"></i>
          </div>
        )}
      </div>

      <Container style={{ paddingTop: 40 }}>
        <Toolbar
          variant="dense"
          style={{ backgroundColor: '#FFF', marginTop: 25 }}
        >
          <h4 style={{ color: 'rgb(0, 172, 193)' }}> GỢI Ý CHO BẠN </h4>
        </Toolbar>
        <div
          style={{ backgroundColor: 'rgb(0, 172, 193)', width: 200, height: 2 }}
        ></div>
      </Container>

      <ProductsContainer />

      <Footer />
    </div>
  );
}

export default Home;
