import { Container } from '@material-ui/core';
import Footer from 'components/body/footer';
import Header from 'components/body/header';
import SkeletonLoadingInfiniteScroll from 'components/loading/skeletonInfiniteScroll';
import { TITLE_SHOP_SALE } from 'constants/config';
import { callApi } from 'helpers/callApi';
import { convertPrice } from 'helpers/convertPriceVND';
import ScrollToTop from 'hooks/scroll_to_top';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import 'scss/allproductInfiniteScroll.scss';

function AllProductInfiniteScrollLayout() {
  useEffect(() => {
    document.title = TITLE_SHOP_SALE;
  }, []);

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);

  const fetchData = async () => {
    let pageNext = page + 1;
    setPage(pageNext);
    let callApiData = await callApi(
      'product/?pageSize=25&pageIndex=' + pageNext,
    ).then(async (response) => {
      let data = await response.data;
      return data;
    });
    setProducts(products.concat(callApiData));
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  let result = products.map((item) => {
    return (
      <div className="product__container">
        <Link
          to={{ pathname: '/product/' + item._id, query: { the: item._id } }}
          style={{ textDecoration: 'none' }}
        >
          <div className="product__header">
            <LazyLoadImage
              effect="blur"
              src={item.imageUrl}
              alt=""
              style={{ height: '200px' }}
            />
          </div>
          <div className="product__body">
            <div className="product__title">​​​​​​​​{item.title}</div>
            <div className="product__price">
              ₫{convertPrice(item.price)}
              <span className="product__soldQuantity">
                Đã bán:​​​​​​​​{item.quantity}
              </span>
            </div>
          </div>
          <div className="product__footer"></div>
        </Link>
      </div>
    );
  });

  return (
    <div>
      <ScrollToTop />
      <Header />
      <Container style={{ paddingTop: 150 }}></Container>

      <Container
        className="banner__home"
        style={{ paddingTop: 10, paddingBottom: 20, borderRadius: '5px' }}
      >
        <InfiniteScroll
          dataLength={products.length}
          next={fetchData}
          hasMore={page === 8 ? false : true}
          loader={<SkeletonLoadingInfiniteScroll />}
        >
          <div className="product__infinite__flex__container">
            {products ? result : ''}
          </div>
        </InfiniteScroll>
      </Container>

      <Footer />
    </div>
  );
}

export default AllProductInfiniteScrollLayout;
