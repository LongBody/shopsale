import * as types from 'constants/actionTypes';

let initialState: any = [];

const myReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case types.PRODUCTS_CHECKOUT:
      return [...action.payload];
    default:
      return state;
  }
};

export default myReducer;
