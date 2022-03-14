import * as types from 'constants/actionTypes';

let initialState = '';

const myReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SEARCH_PRODUCT:
      return action.keyword;
    default:
      return state;
  }
};

export default myReducer;
