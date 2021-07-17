import * as types from "../constants/actionTypes";

let initialState = false;

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_LOADING_CHANGE_CHECKBOX:
            return action.loading;
        default:
            return state;
    }
};

export default myReducer;