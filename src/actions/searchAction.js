import * as types from '../constants/actionTypes'

export const searchProduct = (keyword) => {
    return {
        type: types.SEARCH_PRODUCT,
        keyword
    }
}
export const productSearchByKeyword = (product) => {
    return {
        type: types.PRODUCT_SEARCH_BY_KEYWORD,
        product
    }
}