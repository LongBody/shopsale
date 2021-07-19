import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from 'modules/cart/cart';

class CartContainer extends Component {
  render() {
    let { cart } = this.props;

    return <Cart>{this.showItemInCart(cart)}</Cart>;
  }

  componentDidMount() {
    document.title = 'Giỏ hàng';
  }

  showItemInCart = (cart) => {
    let result;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <Cart
            key={index}
            id={item.product.id}
            imageUrl={item.product.imageUrl}
            title={item.product.title}
            price={item.product.price}
            index={index}
            checked={item.checked}
            quantity={item.quantity}
          ></Cart>
        );
      });
    }
    return result;
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(CartContainer);
