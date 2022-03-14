import React, { useState, useEffect } from 'react';
import Header from 'components/body/header';
import { callApi } from 'helpers/callApi';
import { Container, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import ProductCard from './productCard';
import LogoLoading from 'components/loading/logoLoading';
import {DEFAULT_APP_CLOUNDINARY} from 'constants/config'
import 'scss/app.scss';

function SearchProduct(props) {
  // const history = useHistory();
  const [product, setProductSearch] = useState([]);
  const [loading, setLoading] = useState('Loading...');
  const [noProduct, setNoProduct] = useState(false);
  let result;

  useEffect(() => {
    const fetchData = async () => {
      setNoProduct(false);
      // setLoading(true)
      const callApiData = await callApi(
        'product/find/?search=' + props.match.params.keyword,
      ).then(async (response) => {
        document.title = props.match.params.keyword;
        let data = await response.data;
        // let dataConvert={
        //     id:data._id,
        //     title:data.title,
        //     price:data.price,
        //     imageUrl:data.imageUrl,
        //     bio:data.bio,
        //     star:data.star
        // }
        return data;
      });

      if (callApiData.length > 0) {
        setProductSearch(callApiData);
      } else {
        setProductSearch([]);
        setLoading('');
        setNoProduct(true);
      }
    };
    fetchData();
  }, [props.location.pathname]);

  result = product.map((item, index) => {
    return (
      <Grid item xs={12} sm={10} md={6} lg={2}>
        <ProductCard
          key={index}
          id={item._id}
          imageUrl={item.imageUrl}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
          star={item.star}
        ></ProductCard>
      </Grid>
    );
  });

  return (
    <div>
      <Header />
      <Container style={{ paddingTop: 145 }}>
        {noProduct === true ? (
          <div
            style={{
              color: 'red',
              display: 'flex',
              marginRight: 'auto',
              marginLeft: 'auto',
            }}
          >
            <img
              style={{
                height: 100,
                marginTop: 15,
                color: 'red',
                marginRight: 8,
              }}
              alt="shopsalevn"
              src={`${DEFAULT_APP_CLOUNDINARY}/cart_not_found_vjb6ml.png`}
            />
            <h2 style={{ marginTop: 30, marginLeft: 20 }}>Không Có Sản Phẩm</h2>
          </div>
        ) : (
          ''
        )}
        <Grid container spacing={1} xs={12} sm={6} md={6} lg={12}>
          {result.length > 0 ? (
            result
          ) : (
            <div
              style={{ color: '#e79413', margin: '0 auto', paddingTop: 100 }}
            >
              {loading ? <LogoLoading /> : ''}
            </div>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default connect(null, null)(SearchProduct);
