import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../actions/cartAction";
import { convertPrice } from "../../utils/convertPriceVND";
import { MSG_UPDATE_CART } from "../../constants/messageCart";
import "../../scss/cart.scss";

function CartBody(props) {
  const handleChange = () => {
    props.handleChangeChecked(props.cart, props);
  };

  const deleteProduct = () => {
    props.deleteProduct(props.cart, props);
  };

  return (
    <div>
      <div className="cart__box__shadow">
        <div className="flex__container">
          <div className="cart__checkbox">
            <div>
              <input
                checked={props.checked}
                onChange={handleChange}
                type="checkbox"
                style={{ transform: "scale(1.4)", marginTop: 25 }}
              />
            </div>
          </div>
          <div className="cart__image">
            {" "}
            {props.category === "FS" ? (
              <Link
                to={{
                  pathname: "/productFlashSale/" + props.id,
                  query: { the: props.id },
                }}
                style={{ textDecoration: "none", display: "flex" }}
              >
                <img src={props.imageUrl} />
              </Link>
            ) : (
              <Link
                to={{
                  pathname: "/product/" + props.id,
                  query: { the: props.id },
                }}
                style={{ textDecoration: "none", display: "flex" }}
              >
                <img src={props.imageUrl} />
              </Link>
            )}
          </div>
          <div className="cart__title">
            {props.category === "FS" ? (
              <Link
                to={{
                  pathname: "/productFlashSale/" + props.id,
                  query: { the: props.id },
                }}
                style={{ textDecoration: "none", display: "flex" }}
              >
                <span className="title__product__cart">{props.title}</span>
              </Link>
            ) : (
              <Link
                to={{
                  pathname: "/product/" + props.id,
                  query: { the: props.id },
                }}
                style={{ textDecoration: "none", display: "flex" }}
              >
                <span className="title__product__cart">{props.title}</span>
              </Link>
            )}
          </div>
          <div className="cart__price">{convertPrice(props.price)}</div>
          <div className="cart__action">
            <div
              className="cart__button cart__button__subtraction"
              onClick={() => {
                props.onUpdateQuantity(props.cart, props, props.quantity - 1);
              }}
            >
              -
            </div>
            <div className="cart__quantity">{props.quantity}</div>
            <div
              className="cart__button"
              onClick={() => {
                props.onUpdateQuantity(props.cart, props, props.quantity + 1);
              }}
            >
              +
            </div>
          </div>
          <div className="cart__sum">
            ₫{convertPrice(props.price * props.quantity)}
          </div>
          <div className="cart__delete">
            <button className="cart__detele__button" onClick={deleteProduct}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
        <div className="description__supply">
          <i className="fas fa-truck"></i>
          <span className="description__supply__text">
            Miễn Phí Vận Chuyển cho đơn hàng từ ₫50.000 (giảm tối đa ₫25.000);
            Miễn Phí Vận Chuyển cho đơn hàng từ ₫300.000 (giảm tối đa ₫70.000)
          </span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChangeChecked: (cart, props) => {
      dispatch(actions.handleChangeChecked(cart, props));
      dispatch(actions.onUpdateMessage(MSG_UPDATE_CART));
    },
    onUpdateQuantity: (cart, props, quantity) => {
      dispatch(actions.onUpdateQuantity(cart, props, quantity));
      dispatch(actions.onUpdateMessage(MSG_UPDATE_CART));
    },

    deleteProduct: (cart, props) => {
      dispatch(actions.deleteProductCart(cart, props));
      dispatch(actions.onUpdateMessage(MSG_UPDATE_CART));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartBody);
