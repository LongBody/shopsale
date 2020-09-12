import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux'
import * as actions from '../actions/cartAction'
import convertPrice from '../utils/convertPriceVND'
import { MSG_UPDATE_CART } from '../constants/messageCart'
const styleButton = {
    padding: 0,
    minWidth:27,
    backgroundColor:"rgb(121 161 187)"
}

const styleQuantity = {
    padding: 3,
    fontWeight:500
}





 function CartBody(props) {


    const handleChange = () => {
        props.handleChangeChecked(props.cart,props)
    };

    const deleteProduct = () => {
        props.deleteProduct(props.cart,props)
    };


    return (

        <TableBody>
            <TableRow>
            <TableCell align="left">
                    <Checkbox
                    checked={props.checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    
                    /></TableCell> 
                <TableCell >
                    <img src={props.imageUrl} style={{ width: 50 }} />
                </TableCell>
                <TableCell>
                    {props.title}
                </TableCell>
                <TableCell align="left">{convertPrice(props.price)}</TableCell>

                <TableCell align="left">
                    <Button variant="contained" color="primary" size="small" style={styleButton} 
                    onClick={()=>{props.onUpdateQuantity(props.cart,props,props.quantity - 1)}}
                    >
                        -
                     </Button>
                   <span style={styleQuantity}>{props.quantity}</span> 
                    <Button variant="contained" color="primary" size="small" style={styleButton}
                    onClick={()=>{props.onUpdateQuantity(props.cart,props,props.quantity + 1)}}
                    >
                        +
                     </Button>
                    </TableCell>
                    
                <TableCell align="center">₫{convertPrice(props.price * props.quantity)}</TableCell>
                <TableCell align="center">
                    <Button
                    onClick={deleteProduct}
                    
                    ><i className="fas fa-trash-alt" style={{fontSize:18 , color:"red" }}></i></Button></TableCell> 
                            
            </TableRow>
        
        </TableBody>

    )




}

const mapStateToProps = (state, ownProps) => {
    return {
      cart: state.cart,
    }
  }
  

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleChangeChecked: (cart,props) => {
            dispatch(actions.handleChangeChecked(cart,props))
            dispatch(actions.onUpdateMessage(MSG_UPDATE_CART))
          },
        onUpdateQuantity:(cart,props,quantity) => {
            dispatch(actions.onUpdateQuantity(cart,props,quantity))
            dispatch(actions.onUpdateMessage(MSG_UPDATE_CART))
          },

          deleteProduct: (cart,props) => {
            dispatch(actions.deleteProductCart(cart,props))
            dispatch(actions.onUpdateMessage(MSG_UPDATE_CART))
          },
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(CartBody);
