import { Tooltip } from '@material-ui/core';
import 'components/body/product-apple-macbook/style.scss';
import {
  settings,
  showRating,
} from 'components/body/product-apple-macbook/template';
import { callApi } from 'helpers/callApi';
import { convertPrice } from 'helpers/convertPriceVND';
import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'components/body/product-phone-accessories/style.scss';

const ProductPhoneAccessories: React.FC<any> = () => {
  const [product, setProduct] = useState([]);

  const CallApiVar = 'Phụ Kiện Điện Tử';

  useEffect(() => {
    const fetchData = async () => {
      let callApiData = await callApi(
        `product/find/?search=${CallApiVar}`,
      ).then(async (response: any) => {
        let data = await response.data;
        return data;
      });
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
        style={{ textDecoration: 'none', width: '100%' }}
      >
        <div className="product__infinite__flex__container phone__accessories__container">
          <div className="earphone__apple__logo__container">
          </div>
          <div>
            <LazyLoadImage
              effect="blur"
              src={item?.imageUrl}
              className="earphone__image"
              alt="shopsale"
            />
          </div>
          <Tooltip title={item?.title} placement="bottom-end">
            <div className="earphone__title">{item?.title}</div>
          </Tooltip>
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
        <div className="container__layout">
          <Slider {...settings}>{result}</Slider>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductPhoneAccessories;
