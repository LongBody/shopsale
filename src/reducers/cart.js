import * as types from "../constants/actionTypes";
import swal from "sweetalert";
let data = JSON.parse(localStorage.getItem("cartProduct"));
const InitialState = data ? data : [];

const myReducer = (state = InitialState, action) => {
    let index = -1;
    let { product, quantity } = action;
    let newState;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if (index != -1) {
                state[index].quantity += quantity;
            } else {
                newState = {
                    product: product,
                    quantity: quantity,
                    checked: true,
                };
                state.push(newState);
            }

            localStorage.setItem("cartProduct", JSON.stringify(state));
            return [...state];

        case types.UPDATE_QUANTITY:
            index = findProductInCart(state, action.product);

            if (index !== -1 && state[index].quantity >= 0) {
                state[index].quantity = action.quantity;
            }
            if (state[index].quantity == 0 || state[index].quantity == -1) {
                state[index].quantity = 0;
                state[index].checked = false;
            } else {
                state[index].checked = true;
            }
            localStorage.setItem("cartProduct", JSON.stringify(state));
            return [...state];
        case types.DELETE_PRODUCT_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state.splice(index, 1);
                localStorage.setItem("cartProduct", JSON.stringify(state));
            }
            return [...state];
        case types.PAYMENT_CART:
            let lengthState = state.length;
            let count = 0;

            for (let m = 0; m < lengthState; m++) {
                if (state[m].checked === false) {
                    count++;
                }
            }
            if (count === lengthState) {
                swal("Oops", "Bạn Chưa Có Sản Phẩm", "error");
            } else {
                for (let i = 0; i <= lengthState; i++) {
                    index = findProductInCartToDelete(state);
                    if (index !== -1) {
                        state.splice(index, 1);
                    }
                }
                localStorage.setItem("cartProduct", JSON.stringify(state));
                swal("Thành Công", "Đã Mua Hàng", "success");
            }
            return [...state];
        case types.UN_CHECK_CART:
            index = findProductInCart(state, action.props);
            if (index !== -1) {
                if (state[index].checked == true) {
                    state[index].checked = false;
                } else {
                    state[index].checked = true;
                }
            }
            localStorage.setItem("cartProduct", JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
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

export default myReducer;