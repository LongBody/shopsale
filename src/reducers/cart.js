import * as types from "../constants/actionTypes";
const InitialState = []

const myReducer = (state = InitialState, action) => {

    switch (action.type) {
        case types.FETCH_CART:
            return [...action.payload.productCart];
        case types.ADD_TO_CART:
            return [...action.payload.productCart];

        case types.UPDATE_QUANTITY:
            return [...state];
        case types.PAYMENT_CART:
            return [...state];
        case types.UN_CHECK_CART:

            return [...state];
        default:
            return state;
    }
};

export default myReducer;