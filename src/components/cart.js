import React , {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import CartBody from '../components/cartBody';
import '../scss/app.scss'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import * as actions from '../actions/cartAction'
import convertPrice from '../utils/convertPriceVND'
import { MSG_YOUR_CART } from '../constants/messageCart'
const axios = require('axios');

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  table: {
    minWidth: 700,
  }
}));

const styleButton = {

  background:"#00acc1",
  color:"white"
}

const StyleAppBar ={
    background:"rgb(121 161 187)",
    marginTop:20,
    color:"#e79413 !important" 
}


function subtotal(items) {
  let sum = 0
  items.map((item =>{
    sum += item.props.price * item.props.quantity
  }));
   let sumVnd =   convertPrice(sum)
  return sumVnd
}

function subtotalUnChecked(items,itemUnChecked){
  let sum = 0
  let sumUnCheck = 0
  items.map((item =>{
    sum += item.props.price * item.props.quantity
  }));

  items.map((item =>{
    if(item.props.checked == false){
      sumUnCheck +=item.props.price * item.props.quantity
    } 
  }));

  let sumVnd = convertPrice(sum - sumUnCheck)

  return sumVnd
}



 function Cart(props) {
  const classes = useStyles();
  let result
  if(props.children){
    result = props.children.map((item, index)=> {
      return (
        <CartBody
            key ={index}
            id={item.props.id}
            imageUrl={item.props.imageUrl}
            title={item.props.title}
            price={item.props.price}
            quantity={item.props.quantity}
            checked={item.props.checked}>
              
        </CartBody>
      )
    })
  }



  // useEffect(() => {
  //   props.fetchCartUser()
  // },[]);
  

  



  return (
    <div className={classes.root}>
        <Container className="paddingTopFixed">
        <AppBar position="static" style={StyleAppBar}>
        <Toolbar variant="dense" >
          <Typography variant="h6" >
            {props.messageCart}
          </Typography>
        </Toolbar>
      </AppBar>
        </Container>

        <Container>

        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Sản Phẩm</TableCell>
            <TableCell >Desc</TableCell>
            <TableCell align="left">Giá</TableCell>
            <TableCell align="left">Số Lượng</TableCell>         
            <TableCell align="center">Tổng</TableCell>
            <TableCell align="center">Thao Tác</TableCell>
            <TableCell align="left">
              
            </TableCell>
          </TableRow>
        </TableHead>
        
        {
          result ? result : ""
        }

        {
          props.children ? 
<TableRow>
              <TableCell rowSpan={3} ></TableCell>
              <TableCell rowSpan={3} ></TableCell>
              <TableCell colSpan={0} style={{fontWeight:500,fontSize:20}}>Tổng tiền :</TableCell>
               <TableCell  align="left" style={{fontWeight:500,fontSize:21}}>₫{props.cart.checked ? subtotal(props.children)
              : subtotalUnChecked(props.children,props.cart)              
              }
               </TableCell>
               <TableCell align="center">
               {/* <Button  variant="contained" style={styleButton} onClick={()=>{props.paymentCard()}}> Thanh Toán</Button> */}
               <Button  variant="contained" style={styleButton} onClick={()=>{props.paymentCard(props.cart)}}> Thanh Toán</Button>
               </TableCell>
            
            </TableRow>
            :
            ""
        }
        
      
              
      </Table>
     
    </TableContainer>
    </Container>
   
    </div>
  );
}


const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart,
    messageCart:state.messageCart
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      paymentCard: (cart) => {
          dispatch(actions.paymentCart(cart))
          dispatch(actions.onUpdateMessage(MSG_YOUR_CART))
        },
        fetchCartUser: () => {
          dispatch(actions.getCartUser())
        }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
