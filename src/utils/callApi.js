import * as Config from '../constants/config'
const axios = require('axios');

export function callApi(endpoint) {
    return axios.get(`${Config.CALL_API}/${endpoint}`)
        .catch(function(error) {
            // handle error
            console.log(error);
        })

}

export function signUpApi(endpoint) {
    return axios.post(`${Config.CALL_API}/${endpoint}`)
        .catch(function(error) {
            // handle error
            console.log(error);
        })

}

export function signInWithGGApi(endpoint) {
    return axios.get(`${Config.CALL_API_SIGN_IN_GG}/${endpoint}`)
        .catch(function(error) {
            // handle error
            console.log(error);
        })

}

export default {
    callApi,
    signUpApi,
    signInWithGGApi
}