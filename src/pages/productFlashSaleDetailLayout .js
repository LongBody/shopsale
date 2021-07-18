import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Breadcrumbs,
  Typography,
  Grid,
  Button,
} from '@material-ui/core';
import Header from 'components/body/header';
import { callApi } from 'helpers/callApi';
import { convertPrice } from 'helpers/convertPriceVND';
import Footer from 'components/body/footer';
import * as actions from 'actions/cartAction';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import 'scss/app.scss';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const StyleStar = {
  color: '#fc9d0a',
  fontSize: 13,
  marginTop: 3,
};

const styleImage = {
  border: '2px solid rgba(0,0,0,.05)',
  padding: 10,
  height: 320,
};

const stylePrice = {
  color: 'rgb(0, 172, 193)',
  backgroundColor: '#f7f7f7',
  padding: '15px',
};

const stylePriceSale = {
  textDecoration: 'line-through',
  color: '#929292',
  fontSize: '25px',
  marginTop: '10px',
};

const styleSale = {
  marginLeft: 30,
  color: 'red',
  fontSize: 17,
  border: '1px solid red',
  padding: 3,
};

const StyleStarNone = {
  color: '#fc9d0a',
  fontSize: 13,
  marginTop: 3,
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    marginBottom: '15px',
  },
}));

function ProductDetail(props) {
  const history = useHistory();
  let user = JSON.parse(localStorage.getItem('userShopsale'));
  const [pro, setPro] = useState({
    title: 'Loading...',
    price: '',
    star: '',
  });

  const classes = useStyles();

  const [bioAsync, setBioAsync] = useState(false);

  const fetchData = async () => {
    const callApiData = await callApi(
      'productFlashSale/' + props.match.params.id,
    ).then(async (response) => {
      let data = await response.data;
      let dataConvert = {
        id: data._id,
        title: data.title,
        price: data.price,
        imageUrl: data.imageUrl,
        bio: data.bio,
        star: data.star,
        sale: data.sale,
      };
      document.title = dataConvert.title + ' | Shopsale Việt Nam';
      return dataConvert;
    });

    setPro(callApiData);
    setBioAsync(true);
  };

  useEffect(() => {
    fetchData();
  }, [props.match.params.id]);

  function newRow(text) {
    let result = text.split('\n');
    return result.map((item, key) => {
      return <div key={key}> - {item}</div>;
    });
  }
  function salePrice(price, sale) {
    let priceSale = price - price * (sale / 100);
    return convertPrice(priceSale);
  }

  return (
    <div>
      <Header />
      <Container style={{ paddingTop: 145 }}>
        <div className={classes.root}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link
              style={{ fontSize: '15px', color: '#05a' }}
              color="inherit"
              to="/"
            >
              Shopsale
            </Link>
            <Link style={{ fontSize: '15px' }} color="inherit" to="/">
              FlashSale
            </Link>
            <Typography style={{ fontSize: '15px' }} color="textPrimary">
              {pro.title}
            </Typography>
          </Breadcrumbs>
        </div>
        <div
          style={{ padding: 20, backgroundColor: '#fff' }}
          className="responsive-image"
        >
          {pro ? (
            <Grid container spacing={2} xs={12} sm={8} md={12} lg={12}>
              <Grid item xs={12} xs={10} sm={10} md={6} lg={4}>
                <img src={pro.imageUrl} style={styleImage} />
              </Grid>
              <Grid item xs={12} xs={10} sm={10} md={6} lg={6}>
                <h2>{pro.title}</h2>
                <h3>
                  <span
                    style={{
                      color: 'rgb(252, 157, 10)',
                      marginRight: 5,
                      textDecoration: 'underline',
                    }}
                  >
                    {pro.star}
                  </span>
                  {showRating(pro.star)}
                  <span style={{ color: 'gray', fontSize: '18px' }}>
                    {' '}
                    | Đã bán :{pro.quantity}
                  </span>
                </h3>
                <h1 style={stylePrice}>
                  ₫{pro.price ? salePrice(pro.price, pro.sale) : ''}
                  <span style={styleSale}>Giảm {pro.sale}%</span>
                  <div style={stylePriceSale}>₫{convertPrice(pro.price)}</div>
                </h1>

                <h4 style={{ color: 'gray' }}>
                  Vận Chuyển :
                  <span style={{ marginLeft: 10 }}>
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9d21899f3344277e34d40bfc08f60bc7.png"
                      style={{ height: 20, marginRight: 10 }}
                    />
                    Miễn Phí Vận Chuyển cho đơn hàng từ ₫50.000 (giảm tối đa
                    ₫25.000); Miễn Phí Vận Chuyển cho đơn hàng từ ₫300.000 (giảm
                    tối đa ₫70.000)
                  </span>
                </h4>
                <div>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      addToCart(props.cart, pro, 1, true);
                    }}
                  >
                    Thêm Vào Giỏ Hàng
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginLeft: 10 }}
                    onClick={() => {
                      buyNow(props.cart, pro, 1, true);
                    }}
                  >
                    Mua Ngay
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} xs={10} sm={10} md={6} lg={4}>
                <div style={{ marginTop: 50 }}>
                  <h4>CHI TIẾT SẢN PHẨM</h4>
                  {bioAsync ? newRow(pro.bio) : 'Loading'}
                </div>
              </Grid>
            </Grid>
          ) : (
            'Loading'
          )}
        </div>
      </Container>
      {pro.price ? <Footer /> : ''}
    </div>
  );

  function addToCart(cart, prop, quantity, checked) {
    let pro = {
      id: prop.id,
      title: prop.title,
      price: prop.price - prop.price * (prop.sale / 100),
      imageUrl: prop.imageUrl,
    };

    if (user) {
      props.addToCart(cart, pro, 'FS', quantity, checked);
    } else {
      history.push('/sign-in');
    }
  }

  function buyNow(cart, prop, quantity, checked) {
    if (user) {
      props.addToCart(cart, prop, '', quantity, checked);
      history.push('/cart');
      swal('Thành Công', 'Đã thêm vào giỏ hàng', 'success');
    } else {
      history.push('/sign-in');
    }
  }
}

function showRating(rating) {
  let result = [];

  for (let index = 0; index < rating; index++) {
    result.push(<i className="fas fa-star" style={StyleStar} key={index}></i>);
  }

  for (let index2 = 0; index2 < 5 - rating; index2++) {
    result.push(
      <i className="far fa-star" key={index2 + 100} style={StyleStarNone}></i>,
    );
  }
  return result;
}

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: (cart, product, category, quantity, checked) => {
      dispatch(actions.addToCart(cart, product, category, quantity, checked));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
