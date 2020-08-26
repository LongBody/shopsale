import * as types from '../constants/actionTypes'

export const addToCart = (product, quantity, checked) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity,
        checked
    }
}

export const onUpdateQuantity = (product, quantity) => {
    return {
        type: types.UPDATE_QUANTITY,
        product,
        quantity
    }
}


export const deleteProductCart = (product) => {
    return {
        type: types.DELETE_PRODUCT_CART,
        product,
    }
}

export const paymentCart = () => {
    return {
        type: types.PAYMENT_CART
    }
}

export const onUpdateMessage = (message) => {
    return {
        type: types.UPDATE_MESSAGE,
        message,
    }
}

export const handleChangeChecked = (props) => {
    return {
        type: types.UN_CHECK_CART,
        props
    }
}