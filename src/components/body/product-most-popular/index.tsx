import { Container, Grid, Toolbar } from '@material-ui/core';
import { mostPopularProduct } from 'components/body/product-most-popular/template';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const MostPopularProduct: React.FC<any> = () => {
  let result = mostPopularProduct.map((item: any, index: any) => {
    return (
      <Grid
        item
        xs={12}
        sm={3}
        md={4}
        lg={3}
        className="most__popular__wrapper"
        key={index}
      >
        <Link to={{ pathname: '/' + item.path }}>
          <div
            style={{
              border: 'solid 1px rgba(0,0,0,.05)',
              boxShadow: '1px 1px 1px rgba(0,0,0,.05)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <LazyLoadImage
                effect="blur"
                src={item.image}
                alt={item.title}
                style={{ width: 'auto', height: 100 }}
              />
            </div>
            <h4
              style={{
                textAlign: 'center',
                color: 'rgb(243 145 86',
                fontFamily: 'sans-serif',
                paddingTop: 0,
                marginTop: 0,
              }}
            >
              {item.title}
            </h4>
            <p style={{ padding: 0, textAlign: 'center', color: '#757575' }}>
              {item.total} sản phẩm
            </p>
          </div>
        </Link>
      </Grid>
    );
  });
  return (
    <React.Fragment>
      <Container>
        <Toolbar
          variant="dense"
          style={{ backgroundColor: '#FFF', paddingTop: 25, paddingBottom: 8 }}
        >
          <Grid container spacing={0}>
            {result}
          </Grid>
        </Toolbar>
      </Container>
    </React.Fragment>
  );
};

export default MostPopularProduct;
