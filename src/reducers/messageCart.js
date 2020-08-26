import * as types from '../constants/actionTypes'
import * as MSG from '../constants/messageCart'


const initialState = MSG.MSG_YOUR_CART



const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_MESSAGE:
            state = action.message
            return [...state]
        default:
            return state
    }
}


export default myReducer