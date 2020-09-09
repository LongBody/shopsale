import * as types from "../constants/actionTypes";
const InitialState = []

const myReducer = (state = InitialState, action) => {

    switch (action.type) {
        case types.FETCH_CART:
            return [...action.payload.productCart];
        case types.ADD_TO_CART:
            return [...action.payload.productCart];

        case types.UPDATE_QUANTITY:
            // index = findProductInCart(state, action.product);

            // if (index !== -1 && state[index].quantity >= 0) {
            //     state[index].quantity = action.quantity;
            // }
            // if (state[index].quantity == 0 || state[index].quantity == -1) {
            //     state[index].quantity = 0;
            //     state[index].checked = false;
            // } else {
            //     state[index].checked = true;
            // }
            // localStorage.setItem("cartProduct", JSON.stringify(state));
            return [...state];
            // case types.DELETE_PRODUCT_CART:
            //     index = findProductInCart(state, product);
            //     if (index !== -1) {
            //         state.splice(index, 1);
            //         localStorage.setItem("cartProduct", JSON.stringify(state));
            //     }
            //     return [...state];
        case types.PAYMENT_CART:
            return [...state];
        case types.UN_CHECK_CART:

            return [...state];
        default:
            return state;
    }
};

export default myReducer;