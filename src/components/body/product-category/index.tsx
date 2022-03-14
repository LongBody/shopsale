import React from 'react';
import Slider from 'react-slick';
import { Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'components/body/product-category/style.scss';

import {
  settings,
  productCategory,
} from 'components/body/product-category/template';

type Props = {
  title: string;
  tooltipTittle: string;
};

const ProductCategory: React.FC<Props> = () => {
  return (
    <div className="relative">
      <div className="appbarCategories">
        <Toolbar variant="dense">
          <h4 className="name-categories-wrap"> DANH MỤC SẢN PHẨM </h4>
        </Toolbar>
        <div
          style={{
            backgroundColor: 'rgb(0, 172, 193)',
            width: 200,
            height: 2,
          }}
        >
          .
        </div>
      </div>

      <Slider {...settings}>
        {productCategory?.map((item: any, key: any) => {
          return (
            <Link to={{ pathname: item?.link }} key={key}>
              <div className="image-categories-wrap">
                <LazyLoadImage
                  effect="blur"
                  src={item?.image}
                  className="image-categories"
                  alt=""
                />
                <div className="title-categories">{item?.name}</div>
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductCategory;
