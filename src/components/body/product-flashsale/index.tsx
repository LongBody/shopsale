import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import {
  salePrice,
  StyleContent,
  StyleContentTitle,
  useStyles,
} from 'components/body/product-flashsale/template';
import { convertPrice } from 'helpers/convertPriceVND';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import 'scss/app.scss';

const ProductCategory: React.FC<any> = (props: any) => {
  const classes = useStyles();

  let result = props.products.map((item: any, index: any) => {
    return (
      <Grid item xs={6} sm={3} md={4} lg={2} key={index}>
        <Link
          to={{
            pathname: 'productFlashSale/' + item._id,
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
};

export default ProductCategory;
