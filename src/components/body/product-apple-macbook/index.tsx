import React, { useEffect, useState } from 'react';
import { convertPrice } from 'helpers/convertPriceVND';
import { Link } from 'react-router-dom';
import 'scss/app.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { callApi } from 'helpers/callApi';
import 'components/body/product-apple-macbook/style.scss';
import {showRating} from  'components/body/product-apple-macbook/template'

const Footer: React.FC<any> = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let callApiData = await callApi('product/find/?search=thời trang').then(
        async (response: any) => {
          let data = await response.data;
          return data;
        },
      );
      setProduct(callApiData);
    };
    fetchData();
  }, []);

  let result = product?.map((item: any, index: any) => {
    return (
      <Link
        key={index}
        to={{
          pathname: 'product/' + item?._id,
        }}
        style={{ textDecoration: 'none' }}
      >
        <div className="product__infinite__flex__container earphone__container">
          <div className="earphone__apple__logo__container">
            <i className="fab fa-apple earphone__apple__logo"></i>
          </div>
          <div>
            <LazyLoadImage
              effect="blur"
              src={item?.imageUrl}
              className="earphone__image"
              alt="shopsale"
            />
          </div>
          <div className="earphone__title">{item?.title}</div>
          <div className="earphone__price">{convertPrice(item?.price)}₫</div>
          <div>
            <div>{showRating(item?.star)}</div>
            <div className="earphone__quantity">Đã mua: {item?.quantity}</div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <React.Fragment>
      <div>
        <div
          style={{
            backgroundColor: 'rgb(0, 172, 193)',
            width: 200,
            height: 2,
          }}
        ></div>
        <div className="container__layout">{result}</div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
