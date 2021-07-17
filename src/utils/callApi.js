import * as Config from '../constants/config'
const axios = require('axios');

export function callApi(endpoint) {
    return axios.get(`${Config.CALL_API}/${endpoint}`)
        .catch(function(error) {
            // handle error
        })

}

export function signUpApi(endpoint) {
    return axios.post(`${Config.CALL_API}/${endpoint}`)
        .catch(function(error) {
            // handle error
        })

}

export function signInWithGGApi(endpoint) {
    return axios.get(`${Config.CALL_API_SIGN_IN_GG}/${endpoint}`)
        .catch(function(error) {
            // handle error
        })

}

export function callApiAddCart(id, data) {
    const config = { headers: { 'Content-Type': 'application/json' } };
    return axios.put(`https://shopsale.herokuapp.com/api/sign-in/?id=${id}`, data, config)
        .catch(function(error) {
            // handle error
        })

}


export default {
    callApi,
    signUpApi,
    signInWithGGApi,
    callApiAddCart
}