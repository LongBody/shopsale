import * as types from '../constants/actionTypes'

export const signInEmail = (email) => {
    return {
        type: types.SIGN_IN_EMAIL,
        email
    }
}

export const signInPassword = (password) => {
    return {
        type: types.SIGN_IN_PASSWORD,
        password
    }
}