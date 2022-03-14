import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import ProductCard from 'modules/product/productCard';
import { callApi } from 'helpers/callApi';
import 'modules/product/style/index.scss';
import { useLocation } from "react-router-dom";

function ProductRandom() {
  const [products, setProduct] = useState([]);

  const location = useLocation()

  useEffect(() => {
    const fetchData = async () => {
      setProduct([]);
      let randomProducts = Math.floor(Math.random() * 31);
      let callApiData = await callApi(
        'product/?pageSize=6&pageIndex=' + randomProducts,
      ).then(async (response) => {
        let data = await response.data;
        return data;
      });
      setProduct(callApiData);
    };
    fetchData();
  }, [location?.pathname]);

  let result = products.map((item, index) => {
    return (
      <Grid key={index} item xs={6} sm={3} md={4} lg={2}>
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
    <div className="product__random__in__cart__wrap">
      <Container>
        <div
          className="product__random__in__cart__title"
          style={{ fontWeight: 'bold' }}
        >
          CÓ THỂ BẠN CŨNG THÍCH
        </div>
        <Grid container spacing={1}>
          {result}
        </Grid>
      </Container>
    </div>
  );
}

export default ProductRandom;
