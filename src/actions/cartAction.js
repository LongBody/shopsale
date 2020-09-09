import * as types from "../constants/actionTypes";
import swal from "sweetalert";
import { callApiAddCart, callApi } from "../utils/callApi";
const axios = require("axios");

let user = JSON.parse(localStorage.getItem("userShopsale"));
let id;
if (user) {
    id = user._id;
}

let findProductInCartToDelete = (cart) => {
    let index = -1;
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].checked === true) {
                index = i;
                break;
            }
        }
    }

    return index;
};

let findProductInCart = (cart, product) => {
    let index = -1;
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
};

export const getCartUser = () => {
    return (dispatch) => {
        if (id) {
            callApi("sign-in/get-cart/?id=" + id).then((response) => {
                console.log(response)
                dispatch({
                    type: types.FETCH_CART,
                    payload: response.data,
                });
            });
        } else
            dispatch({
                type: types.FETCH_CART,
                payload: [],
            });
    };
};

export const addToCart = (cart, product, quantity, checked) => {
    return async(dispatch) => {
        let cartCurrent = [];

        let index = findProductInCart(cart, product);
        if (index != -1) {
            cart[index].quantity += quantity;
            cartCurrent = cart;
        } else {
            let data = {
                product,
                quantity,
                checked,
            };
            cartCurrent = await [...cart, data];
        }

        console.log(cartCurrent)
        console.log(id)

        callApiAddCart(id, cartCurrent).then(async(response) => {
            console.log(response);
            await response.data;
            dispatch({
                type: types.ADD_TO_CART,
                payload: response.data,
            });
        });
    };
};

export const onUpdateQuantity = (cart, product, quantity) => {
    return async(dispatch) => {
        let index = findProductInCart(cart, product);

        if (index !== -1 && cart[index].quantity >= 0) {
            cart[index].quantity = quantity;
        }
        if (cart[index].quantity == 0 || cart[index].quantity == -1) {
            cart[index].quantity = 0;
            cart[index].checked = false;
        } else {
            cart[index].checked = true;
        }
        callApiAddCart(id, cart).then(async(response) => {
            console.log(response);
            await response.data;
            dispatch({
                type: types.UPDATE_QUANTITY,
            });
        });
    };
    // return {
    //     type: types.UPDATE_QUANTITY,
    //     product,
    //     quantity,
    // };
};

export const deleteProductCart = (product) => {
    return {
        type: types.DELETE_PRODUCT_CART,
        product,
    };
};

export const paymentCart = (cart) => {
    return async(dispatch) => {
        let lengthState = cart.length;
        let index;
        let count = 0;
        for (let m = 0; m < lengthState; m++) {
            if (cart[m].checked === false) {
                count++;
            }
        }
        if (count === lengthState) {
            swal("Oops", "Bạn Chưa Có Sản Phẩm", "error");
        } else {
            for (let i = 0; i <= lengthState; i++) {
                index = findProductInCartToDelete(cart);
                if (index !== -1) {
                    cart.splice(index, 1);
                }
            }
            swal("Thành Công", "Đã Mua Hàng", "success");
        }
        callApiAddCart(id, cart).then(async(response) => {
            console.log(response);
            await response.data;
            dispatch({
                type: types.PAYMENT_CART,
                payload: response.data,
            });
        });
    };
};

export const onUpdateMessage = (message) => {
    return {
        type: types.UPDATE_MESSAGE,
        message,
    };
};

export const handleChangeChecked = (cart, product) => {
    return async(dispatch) => {
        let index = findProductInCart(cart, product);
        if (index !== -1) {
            if (cart[index].checked == true) {
                cart[index].checked = false;
            } else {
                cart[index].checked = true;
            }
        }
        callApiAddCart(id, cart).then(async(response) => {
            console.log(response);
            await response.data;
            dispatch({
                type: types.UN_CHECK_CART,
                payload: response.data,
            });
        });
    };
};