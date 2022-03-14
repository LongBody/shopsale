import * as Config from 'constants/config';
const axios = require('axios');

export function callApi(endpoint: string) {
  return axios.get(`${Config.CALL_API}/${endpoint}`).catch(function (error: any) {
    // handle error
  });
}

export function signUpApi(endpoint: string) {
  return axios.post(`${Config.CALL_API}/${endpoint}`).catch(function (error: any) {
    // handle error
  });
}

export function signInWithGGApi(endpoint: string) {
  return axios
    .get(`${Config.CALL_API_SIGN_IN_GG}/${endpoint}`)
    .catch(function (error: any) {
      // handle error
    });
}

export function callApiAddCart(id: string, data: any) {
  const config = { headers: { 'Content-Type': 'application/json' } };
  return axios
    .put(`${Config.CALL_API}/sign-in/?id=${id}`, data, config)
    .catch(function (error: any) {
      // handle error
    });
}

export default {
  callApi,
  signUpApi,
  signInWithGGApi,
  callApiAddCart,
};
