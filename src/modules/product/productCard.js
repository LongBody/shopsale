import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as actions from 'actions/cartAction';
import { convertPrice } from 'helpers/convertPriceVND';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import 'scss/product.scss';

const useStyles = makeStyles({
  root: {
    maxWidth: 390,
    marginTop: 5,
  },
  media: {
    // height: 0,
    // paddingTop: '56.25%', // 16:9
    width: '100%',
  },
});

const StyleTitle = {
  // height: 50,
};

const StyleContent = {
  marginTop: '10px',
};

const StyleStar = {
  color: '#fc9d0a',
  fontSize: 11,
  float: 'right',
  marginTop: 3,
};

const StyleStarNone = {
  color: '#fc9d0a',
  fontSize: 11,
  float: 'right',
  marginTop: 3,
};

function ProductCard(props) {
  let user = JSON.parse(localStorage.getItem('userShopsale'));
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <Link
        to={{ pathname: '/product/' + props.id, query: { the: props.id } }}
        style={{ textDecoration: 'none' }}
      >
        <Card className={classes.root}>
          <CardActionArea>
            <Tooltip title={props.title} placement="bottom">
              <LazyLoadImage
                effect="blur"
                src={props.imageUrl}
                style={{ width: '100%', height: 180, marginTop:5 }}
                alt={props.title}
              />
            </Tooltip>
            <CardContent style={StyleContent}>
              <Tooltip title={props.title} placement="bottom-end">
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className="title__product__wrapper"
                  component="p"
                  style={StyleTitle}
                >
                  {props.title}
                </Typography>
              </Tooltip>
              <Typography variant="body2" color="secondary" component="p">
                ₫{convertPrice(props.price)}
                <span>{showRating(props.star)}</span>
              </Typography>
            </CardContent>
            <CardActions>
              <div>
                <div
                  onClick={handleClickNotLink}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    style={{
                      border: '1px solid #00acc1',
                      padding: '5px 8px',
                      borderRadius: 5,
                      fontSize: 13,
                      fontWeight: 'bold',
                      color: '#00acc1',
                      marginRight: 5,
                    }}
                    onClick={() => {
                      addToCart(props.cart, props, 1, true);
                    }}
                  >
                    Add Cart
                  </div>
                </div>
              </div>
              <span style={{ color: 'grey' }}>Đã bán {props.quantity}</span>
            </CardActions>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );

  function handleClickNotLink(e) {
    e.preventDefault();
  }

  function addToCart(cart, prop, quantity, checked) {
    if (user) {
      props.addToCart(cart, prop, '', quantity, checked);
    } else {
      history.push('/sign-in');
    }
  }
}

function showRating(rating) {
  let result = [];
  for (let index2 = 0; index2 < 5 - rating; index2++) {
    result.push(
      <i className="far fa-star" key={index2 + 100} style={StyleStarNone}></i>,
    );
  }
  for (let index = 0; index < rating; index++) {
    result.push(<i className="fas fa-star" style={StyleStar} key={index}></i>);
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
