import * as types from 'constants/actionTypes';

let initialState: any = '';

const myReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case types.PRODUCT_SEARCH_BY_KEYWORD:
      return [...action.product];
    default:
      return state;
  }
};

export default myReducer;
