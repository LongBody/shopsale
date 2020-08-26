import { combineReducers } from "redux";
import products from '../reducers/products'
import productFS from '../reducers/productsFlashSale'
import cart from '../reducers/cart'
import messageCart from '../reducers/messageCart'
import signIn from '../reducers/sign-in'
import keyword from '../reducers/search'
import productSearchByKeyword from '../reducers/productSearchByKeyword'

const myReducer = combineReducers({
    products,
    productFS,
    cart,
    messageCart,
    signIn,
    keyword,
    productSearchByKeyword
})

export default myReducer;