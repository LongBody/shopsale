import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import "../../scss/checkout.scss";
import { connect } from 'react-redux'
import convertPrice from '../../utils/convertPriceVND'
import * as actions from '../../actions/cartAction'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import swal from "sweetalert";

function ListCheckout(props) {
  let user = JSON.parse(localStorage.getItem("userShopsale"));

  function subtotalUnChecked(items) {
    console.log(items)
    let sum = 0
   items.map(item =>{
     if(item.checked === true ){
       sum += item.product.price *item.quantity
     }
   })

 
    let sumVnd = convertPrice(sum)
  
    return sumVnd
  }

  const paymentCartFunc = (cart)=>{
    
    let userShop = JSON.parse(localStorage.getItem("userShopsale"));
    console.log(userShop)
    if(userShop.location && userShop.phone && userShop.location !== "null" && userShop.phone!== "null"){
      if(cart){
        props.paymentCart(cart)
      }
      else{
        props.paymentCart(userShop.productCart)
      }
    }
    else {
      swal("Oops", "Bạn Chưa Có Thông Tin", "error");
    }
    
  }
 

  useEffect(() => {

    if (user) {
      props.fetchCartUser(user._id)
    }
  }, []);

  let result = props.cart.map(item => {
    if (item.checked === true) {
      return (
        <tr style={{ marginBottom: 6 }}>
          <td><img src={item.product.imageUrl} style={{ width: 35, border: "1px solid rgba(0,0,0,.05)" }} /> <span style={{ marginLeft: 10 }}>{item.product.title}</span></td>
          <td style={{ textAlign: "center" }}>{convertPrice(item.product.price)}</td>
          <td style={{ textAlign: "center" }}>{item.quantity}</td>
          <td style={{ textAlign: "center" }}>{convertPrice(item.product.price * item.quantity)}</td>
        </tr>
      )
    }

  })
  return (
    <Container>
      <div className="list__checkout__wrapper">
        <table id="list">
          <tr>
            <th><h3 style={{color:"#222"}}>Sản Phẩm</h3></th>
            <th style={{ textAlign: "center" , color:"#bbb" }}>Đơn giá</th>
            <th style={{ textAlign: "center",color:"#bbb" }}>Số lượng</th>
            <th style={{ textAlign: "center",color:"#bbb" }}>Thành tiền</th>
          </tr>
          {
            result
          }
        </table>

        <div className="dashed___line"></div>

        <div className="list__checkout__payment__totalPrice">
        <TextField id="outlined-basic"  label="Lời nhắn người mua" size="small" variant="outlined" style={{paddingBottom:5}} />
        <span style={{float:"right", padding:10, fontSize:20}}>Tổng Tiền: <span style={{color:" #00ACC1", fontSize:20}}>{subtotalUnChecked(props.cart)} </span></span>
        </div>

        {/* <div className="dashed___line"></div> */}

       


      </div>



      <div>
      <div className="list__checkout__payment__button">
        <div style={{fontSize:20, fontWeight:"bold"}} >Phương thức thanh toán :</div>  <span style={{color:" #00ACC1", fontSize:18, marginLeft:5}}>Thanh toán khi nhận hàng</span>
        <div style={{float:"right" , marginBottom:30 , paddingBottom:20}}>
        <Button onClick={ ()=> {paymentCartFunc(props.cart)}} variant="contained"  style={{backgroundColor:"#00ACC1 " , color:"white"}}>THANH TOÁN</Button>
        </div>
        </div>
      </div>



    </Container>
  );
}


const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCartUser: (id) => {
      dispatch(actions.getCartUser(id))
    },
    paymentCart: (cart) => {
      dispatch(actions.paymentCart(cart))
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListCheckout);
