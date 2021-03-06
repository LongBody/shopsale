import * as types from "../constants/actionTypes";

let initialState = [];

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.PRODUCTS_CHECKOUT:
            console.log(action)
            return [...action.payload];
        default:
            return state;
    }
};

export default myReducer;