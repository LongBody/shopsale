import * as types from "../constants/actionTypes";
import swal from "sweetalert";
import { callApiAddCart, callApi } from "../utils/callApi";
const axios = require("axios");


let user = JSON.parse(localStorage.getItem("userShopsale"));
let id;
if (user) {
    id = user._id;
}


let findProductInCartToDelete = (cart) => {
    let index = -1;
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].checked === true) {
                index = i;
                break;
            }
        }
    }

    return index;
};

let findProductInCart = (cart, product) => {
    let index = -1;
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
};

export const getCartUser = (idUser) => {
    return (dispatch) => {
        if (id) {
            callApi("sign-in/get-cart/?id=" + id).then((response) => {

                dispatch({
                    type: types.FETCH_CART,
                    payload: response.data,
                });
            });

        } else {
            callApi("sign-in/get-cart/?id=" + idUser).then((response) => {


                dispatch({
                    type: types.FETCH_CART,
                    payload: response.data,
                });
            });
        }
    }
};

export const addToCart = (cart, product, category, quantity, checked) => {
    return async (dispatch) => {
        let user = JSON.parse(localStorage.getItem("userShopsale"));
        let cartCurrent = [];

        let idUserGet = user._id

        let index = findProductInCart(cart, product);
        if (index != -1) {
            cart[index].quantity += quantity;
            cartCurrent = cart;
        } else {
            let data = {
                category,
                product,
                quantity,
                checked,
            };
            cartCurrent = await [...cart, data];
        }

   


        if (id) {
            callApiAddCart(id, cartCurrent).then(async (response) => {
                await response.data;
                dispatch({
                    type: types.ADD_TO_CART,
                    payload: response.data,
                });
            });
        }
        else {
            callApiAddCart(idUserGet, cartCurrent).then(async (response) => {
             
                await response.data;
                dispatch({
                    type: types.ADD_TO_CART,
                    payload: response.data,
                });
            });
        }
    };
};

export const onUpdateQuantity = (cart, product, quantity) => {
    return async (dispatch) => {
        let user = JSON.parse(localStorage.getItem("userShopsale"));
        let idUserGet = user._id
        let index = findProductInCart(cart, product);

        if (index !== -1 && cart[index].quantity >= 0) {
            cart[index].quantity = quantity;
        }
        if (cart[index].quantity == 0 || cart[index].quantity == -1) {
            cart[index].quantity = 0;
            cart[index].checked = false;
        } else {
            cart[index].checked = true;
        }
        callApiAddCart(idUserGet, cart).then(async (response) => {
       
            await response.data;
            dispatch({
                type: types.UPDATE_QUANTITY,
            });
        });
    };
    // return {
    //     type: types.UPDATE_QUANTITY,
    //     product,
    //     quantity,
    // };
};

export const deleteProductCart = (cart, product) => {

    return async (dispatch) => {
        let user = JSON.parse(localStorage.getItem("userShopsale"));
        let idUserGet = user._id
        let index ;
        let lengthState = cart.length;

        console.log(cart)
  
            await swal({
                title: "Bạn có chắc chắn muốn xoá sản phẩm này khỏi giỏ hàng?",
                text: product.title,
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        for (let i = 0; i <= lengthState; i++) {
                            index = findProductInCart(cart , product);
                            if (index !== -1) {
                                cart.splice(index, 1);
                            }                         
                        }

                        swal({
                            title: "Loading...",
                        })

                        callApiAddCart(idUserGet, cart).then(async (response) => {
                            swal.stopLoading();
                            swal.close();
                            swal("Thành Công!", "Đã Xoá Sản Phẩm Khỏi Giỏ Hàng!", "success");
                            await response.data;
                            dispatch({
                                type: types.DELETE_PRODUCT_CART,
                                payload: response.data,
                            });
                        });

                    }
                });
    };
};

export const paymentCart = (cart) => {

    return async (dispatch) => {
        let address
        let user = JSON.parse(localStorage.getItem("userShopsale"));
        if (user) {
            address = user.location
        }
        else address = null
        let idUserGet = user._id
        let lengthState = cart.length;
        let index;
        let count = 0;
        for (let m = 0; m < lengthState; m++) {
            if (cart[m].checked === false) {
                count++;
            }

        }

     
        if (count === lengthState) {
            swal("Oops", "Bạn Chưa Có Sản Phẩm", "error");
        } else {

            if (address) {
                await swal({
                    title: "Bạn Có Muốn Giao Đến Địa Chỉ?",
                    text: address,
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            address = address
                            for (let i = 0; i <= lengthState; i++) {
                                index = findProductInCartToDelete(cart);
                                if (index !== -1) {
                                    cart.splice(index, 1);
                                }
                            }
                            swal({
                                title: "Loading...",
                            })

                        }
                        else {
                            address = ""
                        }
                    });
            }
            else {
                await swal("Vui Lòng Nhập Địa Chỉ Giao Hàng: ", {
                    content: "input",
                })
                    .then(async (value) => {
                        for (let i = 0; i <= lengthState; i++) {
                            index = findProductInCartToDelete(cart);
                            if (index !== -1) {
                                cart.splice(index, 1);
                            }
                        }
                        address = await value
                    });
            }


            if (id && address !== null && address.length > 0) {
                callApiAddCart(id, cart).then(async (response) => {
                    swal.stopLoading();
                    swal.close();
                    swal("Thành Công!", "Đã Thanh Toán!", "success");
                    await response.data;
                    dispatch({
                        type: types.PAYMENT_CART,
                        payload: response.data,
                    });
                });
            }
            else {
                if (address !== null && address.length > 0) {
                    callApiAddCart(idUserGet, cart).then(async (response) => {
                        swal.stopLoading();
                        swal.close();
                        swal("Thành Công!", "Đã Thanh Toán!", "success");
                        await response.data;
                        dispatch({
                            type: types.PAYMENT_CART,
                            payload: response.data,
                        });
                    });
                }
            }

        }

    };
};

export const onUpdateMessage = (message) => {
    return {
        type: types.UPDATE_MESSAGE,
        message,
    };
};

export const handleChangeChecked = (cart, product) => {
    return async (dispatch) => {
        let user = JSON.parse(localStorage.getItem("userShopsale"));
        let idUserGet = user._id
        let index = findProductInCart(cart, product);
        if (index !== -1) {
            if (cart[index].checked == true) {
                cart[index].checked = false;
            } else {
                cart[index].checked = true;
            }
        }
        if (id) {
            callApiAddCart(id, cart).then(async (response) => {
              
                await response.data;
                dispatch({
                    type: types.UN_CHECK_CART,
                    payload: response.data,
                });
            });
        }
        else {
            callApiAddCart(idUserGet, cart).then(async (response) => {
            
                await response.data;
                dispatch({
                    type: types.UN_CHECK_CART,
                    payload: response.data,
                });
            });
        }
    };
};