import { Button, Container, TextField } from '@material-ui/core';
import * as actions from 'actions/cartAction';
import {
  priceNumberToVietnameseText,
  subtotalUnChecked,
} from 'components/body/list-checkout/template';
import { convertPrice } from 'helpers/convertPriceVND';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import 'scss/checkout.scss';
import swal from 'sweetalert';

const ListCheckout: React.FC<any> = (props: any) => {
  let user = JSON.parse(localStorage.getItem('userShopsale') || '{}');
  const [message, setMessage] = useState('');

  const paymentCartFunc = (cart: any) => {
    let userShop = JSON.parse(localStorage.getItem('userShopsale') || '{}');
    if (
      userShop.location &&
      userShop.phone &&
      userShop.location !== 'null' &&
      userShop.phone !== 'null'
    ) {
      if (cart) {
        props.paymentCart(cart);
        setMessage('');
      } else {
        props.paymentCart(userShop.productCart);
        setMessage('');
      }
    } else {
      swal('Oops', 'Bạn Chưa Có Thông Tin', 'error');
    }
  };

  useEffect(() => {
    if (user) {
      props.fetchCartUser(user._id);
    }
  }, []);

  let result: any = props?.cart?.map((item: any, index: any) => {
    if (item.checked === true) {
      return (
        <tbody style={{ marginBottom: 6 }} key={index}>
          <tr>
            <td>
              <img
                src={item.product.imageUrl}
                style={{ width: 35, border: '1px solid rgba(0,0,0,.05)' }}
              />{' '}
              <span style={{ marginLeft: 10 }}>{item.product.title}</span>
            </td>
            <td style={{ textAlign: 'center' }}>
              {convertPrice(item.product.price)}
            </td>
            <td style={{ textAlign: 'center' }}>{item.quantity}</td>
            <td style={{ textAlign: 'center' }}>
              {convertPrice(item.product.price * item.quantity)}
            </td>
          </tr>
        </tbody>
      );
    }
    return null;
  });

  return (
    <React.Fragment>
      <Container>
        <div className="list__checkout__wrapper">
          <table id="list">
            <thead>
              <tr>
                <th>
                  <h3 style={{ color: '#222' }}>Sản Phẩm</h3>
                </th>
                <th style={{ textAlign: 'center', color: '#bbb' }}>Đơn giá</th>
                <th style={{ textAlign: 'center', color: '#bbb' }}>Số lượng</th>
                <th style={{ textAlign: 'center', color: '#bbb' }}>
                  Thành tiền
                </th>
              </tr>
            </thead>

            {result}
          </table>

          <div className="dashed___line"></div>

          <div className="list__checkout__payment__totalPrice">
            <TextField
              id="outlined-basic"
              value={message}
              onInput={(e: any) => setMessage(e?.target?.value)}
              label="Lời nhắn người mua"
              size="small"
              variant="outlined"
              style={{ paddingBottom: 5 }}
            />
            <span style={{ float: 'right', padding: 10, fontSize: 20 }}>
              Tổng Tiền:{' '}
              <span style={{ color: ' #00ACC1', fontSize: 20 }}>
                ₫{subtotalUnChecked(props.cart)}{' '}
              </span>
            </span>
          </div>
          <div className="num__to__vietnam__text">
            {priceNumberToVietnameseText(props.cart)} VNĐ
          </div>

          {/* <div className="dashed___line"></div> */}
        </div>

        <div>
          <div className="list__checkout__payment__button">
            <div style={{ fontSize: 20, fontWeight: 'bold' }}>
              Phương thức thanh toán :
            </div>{' '}
            <span style={{ color: ' #00ACC1', fontSize: 18, marginLeft: 5 }}>
              Thanh toán khi nhận hàng
            </span>
            <div
              style={{ float: 'right', marginBottom: 30, paddingBottom: 20 }}
            >
              <Button
                onClick={() => {
                  paymentCartFunc(props.cart);
                }}
                variant="contained"
                style={{ backgroundColor: '#00ACC1 ', color: 'white'}}
              >
                THANH TOÁN
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};
const mapStateToProps = (state: any, ownProps: any) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    fetchCartUser: (id: any) => {
      dispatch(actions.getCartUser(id));
    },
    paymentCart: (cart: any) => {
      dispatch(actions.paymentCart(cart));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ListCheckout));
