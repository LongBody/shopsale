import * as types from "../constants/actionTypes";

let initialState = [];

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_FLASH_SALE_PRODUCTS_REQUEST:
            return [...action.payload];
        default:
            return state;
    }
};

export default myReducer;