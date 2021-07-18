import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import 'scss/checkout.scss';
import { connect } from 'react-redux';
import { convertPrice } from 'helpers/convertPriceVND';
import numToVietnameseText from 'helpers/numToVietNamText';
import * as actions from 'actions/cartAction';
import { TextField, Button } from '@material-ui/core';
import swal from 'sweetalert';
import { withRouter } from 'react-router-dom';

function ListCheckout(props) {
  let user = JSON.parse(localStorage.getItem('userShopsale'));
  const [message, setMessage] = useState('');

  function subtotalUnChecked(items) {
    let sum = 0;
    items.map((item) => {
      if (item.checked === true) {
        sum += item.product.price * item.quantity;
      }
    });

    let sumVnd = convertPrice(sum);

    return sumVnd;
  }

  function priceNumberToVietnameseText(items) {
    let sum = 0;

    items.map((item) => {
      if (item.checked === true) {
        sum += item.product.price * item.quantity;
      }
    });

    let sumVnd = numToVietnameseText(sum);

    return sumVnd;
  }

  const paymentCartFunc = (cart) => {
    let userShop = JSON.parse(localStorage.getItem('userShopsale'));

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
  }, [props, user]);

  let result = props.cart.map((item, index) => {
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
  });
  return (
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
              <th style={{ textAlign: 'center', color: '#bbb' }}>Thành tiền</th>
            </tr>
          </thead>

          {result}
        </table>

        <div className="dashed___line"></div>

        <div className="list__checkout__payment__totalPrice">
          <TextField
            id="outlined-basic"
            value={message}
            onInput={(e) => setMessage(e.target.value)}
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
          <div style={{ float: 'right', marginBottom: 30, paddingBottom: 20 }}>
            <Button
              onClick={() => {
                paymentCartFunc(props.cart);
              }}
              variant="contained"
              style={{ backgroundColor: '#00ACC1 ', color: 'white' }}
            >
              THANH TOÁN
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCartUser: (id) => {
      dispatch(actions.getCartUser(id));
    },
    paymentCart: (cart) => {
      dispatch(actions.paymentCart(cart));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ListCheckout));
