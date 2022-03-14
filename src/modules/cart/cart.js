import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Modal } from '@material-ui/core';
import CartBodyNew from './cartBodyNew';
import { connect } from 'react-redux';
import * as actions from 'actions/cartAction';
import { convertPrice } from 'helpers/convertPriceVND';
import { MSG_YOUR_CART } from 'constants/messageCart';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import TypingDotLoading from 'components/loading/dotTyping';
import './style.scss';
import ButtonShine from 'components/core/button-shine-hover';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  table: {
    minWidth: 700,
  },
  paper: {
    position: 'absolute',
    width: 400,
    display: 'flex',
    justifyContent: 'center',
  },
}));

// function subtotal(items) {
//   let sum = 0;
//   const sumProduct = items.map((item) => {
//     return (sum += item.props.price * item.props.quantity);
//   });
//   let sumVnd = convertPrice(sumProduct);
//   return sumVnd;
// }

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function subtotalUnChecked(items, itemUnChecked) {
  let sum = 0;
  let sumUnCheck = 0;
  items.map((item) => {
    sum += item.props.price * item.props.quantity;
  });

  items.map((item) => {
    if (item.props.checked === false) {
      sumUnCheck += item.props.price * item.props.quantity;
    }
    return null;
  });

  let sumVnd = convertPrice(sum - sumUnCheck);

  return sumVnd;
}

function Cart(props) {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState();
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <TypingDotLoading />
    </div>
  );

  // let result;
  let resultCart;

  const handleChange = (checked, cart) => {
    setOpen(true);
    props.setLoadingChangeCheckboxAction(true);
    props.handleChangeAllChecked(checked, cart);
    setOpen(false);
  };

  useEffect(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (props.setLoadingCheckbox) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [props.setLoadingCheckbox]);

  if (props.cart) {
    // result = props.cart.map((item, index) => {
    //   return (
    //     <CartBody
    //       key={index}
    //       id={item.product.id}
    //       imageUrl={item.product.imageUrl}
    //       title={item.product.title}
    //       price={item.product.price}
    //       quantity={item.quantity}
    //       checked={item.checked}
    //       category={item.category}
    //     ></CartBody>
    //   );
    // });
    resultCart = props.cart.map((item, index) => {
      return (
        <CartBodyNew
          key={index}
          id={item.product.id}
          imageUrl={item.product.imageUrl}
          title={item.product.title}
          price={item.product.price}
          quantity={item.quantity}
          checked={item.checked}
          category={item.category}
          categories={item.product.categories}
        ></CartBodyNew>
      );
    });
  }

  function checkoutProductButton(cart) {
    let lengthState = cart.length;
    let count = 0;
    for (let m = 0; m < lengthState; m++) {
      if (cart[m].checked === false) {
        count++;
      }
    }
    if (count === lengthState) {
      swal('Oops', 'Bạn Chưa Có Sản Phẩm', 'error');
    } else {
      props.onUpdateMessage();
      history.push('/payment/checkout');
    }
  }

  function checkinputCheckAllProduct(props) {
    let productCheckedLength = props.cart.length;
    let count = 0;
    props.cart.map((item) => {
      if (item.checked === true) {
        count++;
      }
      return null;
    });
    if (count === productCheckedLength) {
      return true;
    }
    return false;
  }

  return (
    <div className={classes.root}>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      <Container className="paddingTopFixed" />
      <Container style={{ paddingTop: 40 }}>
        <div>
          <div className="flex__container">
            <div className="cart__product__checked">
              <input
                type="checkbox"
                onClick={() =>
                  handleChange(checkinputCheckAllProduct(props), props.cart)
                }
                checked={checkinputCheckAllProduct(props)}
                style={{ transform: 'scale(1.4)' }}
              />
              <span className="cart__main__header">Giỏ hàng của bạn</span>
            </div>
            <div className="cart__image">Sản Phẩm</div>
            <div className="cart__title "></div>
            <div className="cart__price cart__header__text">Đơn Giá</div>
            <div className="cart__action cart__header__text">Số Lượng</div>
            <div className="cart__sum">Số Tiền</div>
            <div className="cart__delete cart__header__text">Thao tác</div>
          </div>
          {resultCart ? resultCart : ''}
          <div className="cart__footer__wrap">
            <div className="cart__footer__detail">
              <div className="cart__footer__detail__total">
                <span className="cart__footer__detail__total__title">
                  Tổng thanh toán :
                </span>{' '}
                ₫
                {props.children
                  ? subtotalUnChecked(props.children, props.cart)
                  : 0}
              </div>
              <ButtonShine
                title="MUA HÀNG"
                onClick={() => {
                  checkoutProductButton(props.cart);
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart,
    messageCart: state.messageCart,
    productCheckout: state.productCheckout,
    setLoadingCheckbox: state.setLoadingCheckbox,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateMessage: () => {
      dispatch(actions.onUpdateMessage(MSG_YOUR_CART));
    },
    setLoadingChangeCheckboxAction: (checked) => {
      dispatch(actions.setLoadingChangeCheckbox(checked));
    },
    handleChangeAllChecked: (checked, cart) => {
      dispatch(actions.handleChangeAllChecked(checked, cart));
    },
    fetchCartUser: () => {
      dispatch(actions.getCartUser());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
