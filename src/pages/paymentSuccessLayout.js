import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import Header from 'components/body/header-checkout'
import Footer from 'components/body/footer';
import ProductRandom from 'modules/product/productRandom';
import { Link } from 'react-router-dom';
import 'pages/style/paymentSuccess.scss';

export default function PaymentSuccessLayout() {
  useEffect(() => {
    document.title = 'Đặt hàng thành công';
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <div className="paymentSuccessLayout__container">
          <div className="paymentSuccessLayout__detail">
            <div>
              <i class="fas fa-check-circle"></i>{' '}
              <span className="paymentSuccessLayout__detail__title">
                Đặt hàng thành công
              </span>
              <div className="paymentSuccessLayout__detail__Button__backToHome">
                <Link to={{ pathname: '/' }} style={{ textDecoration: 'none' }}>
                  <button style={{borderRadius : 5, cursor : "pointer"}}>
                    <i class="fas fa-home"></i> Trang chủ
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <ProductRandom />
      <Footer />
    </div>
  );
}
