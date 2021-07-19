import React from 'react';
import {
  Grid,
  Card,
  makeStyles,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { convertPrice } from 'helpers/convertPriceVND';
import { Link } from 'react-router-dom';
import 'scss/app.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const useStyles = makeStyles({
  root: {
    maxWidth: 390,
    marginTop: 5,
  },
  media: {
    width: '100%',
  },
});

const StyleTitle = {
  height: 50,
};

const StyleMedia = {
  height: 180,
};

const StyleContent = {
  marginTop: '10px',
  padding: '5px',
};

const StyleContentTitle = {
  height: '30px',
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

function salePrice(price, sale) {
  let priceSale = price - price * (sale / 100);
  return convertPrice(priceSale);
}

function FlashSale(props) {
  const classes = useStyles();

  let result = props.products.map((item, index) => {
    return (
      <Grid item xs={6} sm={3} md={4} lg={2} key={index}>
        <Link
          to={{
            pathname: 'productFlashSale/' + item._id,
            query: { the: props.id },
          }}
          style={{ textDecoration: 'none' }}
        >
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia>
                <LazyLoadImage
                  effect="blur"
                  src={item.imageUrl}
                  style={{ width: '100%', height: 200 }}
                  alt={item.title}
                />
              </CardMedia>
              <div style={StyleContent}>
                <div style={StyleContentTitle}>{item.title}</div>
                <Typography variant="body2" color="secondary" component="p">
                  ₫{salePrice(item.price, item.sale)}
                </Typography>
              </div>
              <CardActions>
                <span style={{ color: 'grey', textDecoration: 'line-through' }}>
                  ₫{convertPrice(item.price)}{' '}
                </span>
                <span style={{ fontSize: 16, fontWeight: 500 }}>
                  {item.sale} %
                </span>
              </CardActions>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
    );
  });

  return (
    <div>
      <div
        style={{
          backgroundColor: 'rgb(0, 172, 193)',
          width: 140,
          height: 2,
        }}
      ></div>
      <Grid container spacing={1}>
        {result}
      </Grid>
    </div>
  );
}

export default FlashSale;
