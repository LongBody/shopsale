import * as types from "../constants/actionTypes";

let initialState = [];

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS_REQUEST:
            return [...action.payload];
        case types.FETCH_LOAD_MORE_PRODUCTS_REQUEST:
            let loadMoreSate = []
            loadMoreSate = state.concat(action.payload)
            return [...loadMoreSate];
        default:
            return state;
    }
};

export default myReducer;