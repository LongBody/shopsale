import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Button,
  Modal,
} from '@material-ui/core';
import CartBody from './cartBody';
import CartBodyNew from './cartBodyNew';
import { connect } from 'react-redux';
import * as actions from 'actions/cartAction';
import { convertPrice } from 'helpers/convertPriceVND';
import { MSG_YOUR_CART } from 'constants/messageCart';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import 'scss/app.scss';
import 'scss/cart.scss';
import TypingDotLoading from 'components/loading/dotTyping';

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

const styleButton = {
  background: '#00acc1',
  color: 'white',
  marginRight: '65px',
  marginTop: '10px',
};


function subtotal(items) {
  let sum = 0;
 const sumProduct =  items.map((item) => {
   return sum += item.props.price * item.props.quantity;
  });
  let sumVnd = convertPrice(sumProduct);
  return sumVnd;
}

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

  let result;
  let result2;

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
    result = props.cart.map((item, index) => {
      return (
        <CartBody
          key={index}
          id={item.product.id}
          imageUrl={item.product.imageUrl}
          title={item.product.title}
          price={item.product.price}
          quantity={item.quantity}
          checked={item.checked}
          category={item.category}
        ></CartBody>
      );
    });
    result2 = props.cart.map((item, index) => {
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
        <TableContainer className="cart__ui__small__screen" component={Paper}>
          <Table className={classes.table} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Sản Phẩm</TableCell>
                <TableCell>Desc</TableCell>
                <TableCell align="left">Giá</TableCell>
                <TableCell align="left">Số Lượng</TableCell>
                <TableCell align="center">Tổng</TableCell>
                <TableCell align="center">Thao Tác</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>

            {result ? result : ''}

            {props.children ? (
              <TableRow>
                <TableCell rowSpan={3}></TableCell>
                <TableCell rowSpan={3}></TableCell>
                <TableCell
                  colSpan={0}
                  style={{ fontWeight: 500, fontSize: 20 }}
                >
                  Tổng tiền :
                </TableCell>
                <TableCell
                  align="left"
                  style={{ fontWeight: 500, fontSize: 21, color: '#f94e2f' }}
                >
                  ₫
                  {props.cart.checked
                    ? subtotal(props.children)
                    : subtotalUnChecked(props.children, props.cart)}
                </TableCell>
                <TableCell align="center">
                  {/* <Button  variant="contained" style={styleButton} onClick={()=>{props.paymentCard()}}> Thanh Toán</Button> */}
                  <Button
                    variant="contained"
                    style={styleButton}
                    onClick={() => {
                      checkoutProductButton(props.cart);
                    }}
                  >
                    {' '}
                    MUA HÀNG
                  </Button>
                </TableCell>
              </TableRow>
            ) : (
              ''
            )}
          </Table>
        </TableContainer>
        <div className="cart__ui__large__screen">
          <div class="flex__container cart__header">
            <div class="cart__product__checked">
              <input
                type="checkbox"
                onClick={() =>
                  handleChange(checkinputCheckAllProduct(props), props.cart)
                }
                checked={checkinputCheckAllProduct(props)}
                style={{ transform: 'scale(1.4)' }}
              />
            </div>
            <div class="cart__image ">Sản Phẩm</div>
            <div class="cart__title__header cart__header__text cart__header__text__product"></div>
            <div class="cart__header__price cart__header__text">Đơn Giá</div>
            <div class="cart__action cart__header__text">Số Lượng</div>
            <div class="cart__header__total">Số Tiền</div>
            <div class="cart__delete cart__header__text">Thao tác</div>
          </div>
          {result2 ? result2 : ''}
          <div className="cart__footer__wrap">
            <div style={{ padding: 20, float: 'right', display: 'flex' }}>
              <div
                align="left"
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#f94e2f',
                  marginRight: 40,
                  marginTop: 20,
                }}
              >
                <span style={{ color: 'gray' }}>Tổng thanh toán :</span> ₫
                {props.children
                  ? subtotalUnChecked(props.children, props.cart)
                  : 0}
              </div>
              <Button
                variant="contained"
                style={styleButton}
                onClick={() => {
                  checkoutProductButton(props.cart);
                }}
              >
                {' '}
                MUA HÀNG
              </Button>
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
