import * as types from 'constants/actionTypes';

let initialState = '';

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PRODUCT_SEARCH_BY_KEYWORD:
      return [...action.product];
    default:
      return state;
  }
};

export default myReducer;
