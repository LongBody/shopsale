import * as types from "../constants/actionTypes";

let initialState = {
    email: "",
    password: "",
};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SIGN_IN_EMAIL:
            return action.email;
        case types.SIGN_IN_PASSWORD:
            return action.password;
        default:
            return state;
    }
};

export default myReducer;