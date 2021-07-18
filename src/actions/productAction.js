import * as types from 'constants/actionTypes'
import { callApi } from 'helpers/callApi'


export const fetchProduct = () => {
    return (dispatch) => {
        callApi("product/?pageIndex=1&pageSize=18").then((response) => {
            dispatch({
                type: types.FETCH_PRODUCTS_REQUEST,
                payload: response.data
            })
        })
    }
}


export const fetchProductFS = () => {
    return (dispatch) => {
        callApi("productFlashSale").then((response) => {
            dispatch({
                type: types.FETCH_FLASH_SALE_PRODUCTS_REQUEST,
                payload: response.data
            })
        })
    }
}

export const fetchLoadMoreProduct = (pageIndex) => {
    return (dispatch) => {
        callApi(`product/?pageIndex=${pageIndex}&pageSize=6`).then((response) => {
            dispatch({
                type: types.FETCH_LOAD_MORE_PRODUCTS_REQUEST,
                payload: response.data
            })
        })
    }
}