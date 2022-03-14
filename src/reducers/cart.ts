import * as types from "constants/actionTypes";
const InitialState: any = []

const myReducer = (state: any = InitialState, action: any) => {

    switch (action.type) {
        case types.FETCH_CART:
            if (action.payload) {
                return [...action.payload.productCart];
            } else return state

        case types.ADD_TO_CART:
            return [...action.payload.productCart];

        case types.UPDATE_QUANTITY:
            return [...state];
        case types.PAYMENT_CART:
            return [...state];
        case types.DELETE_PRODUCT_CART:
            return [...state];
        case types.UN_CHECK_CART:

            return [...state];
        default:
            return state;
    }
};

export default myReducer;