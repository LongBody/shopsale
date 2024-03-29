import * as types from 'constants/actionTypes';

let initialState: any = [];

const myReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS_REQUEST:
      return [...action.payload];
    case types.FETCH_LOAD_MORE_PRODUCTS_REQUEST:
      let loadMoreSate = [];
      loadMoreSate = state.concat(action.payload);
      return [...loadMoreSate];
    default:
      return state;
  }
};

export default myReducer;
