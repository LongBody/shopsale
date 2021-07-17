import React, {useState} from 'react';
import { Container } from '@material-ui/core';
import '../../scss/checkout.scss'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {callApi} from  '../../utils/callApi'
import swal from "sweetalert";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function LocationUser() {

    let user = JSON.parse(localStorage.getItem("userShopsale"));

    const [changeInfo , setChangeInfo] = useState(false)
    const [location , setLocation] = useState(user.location)
    const [phone, setPhone] = useState(user.phone)

    const classes = useStyles();

    const changeInfoFunc = () =>{
        setChangeInfo(true)
    }

    const  changeInfoFuncSuccess= async () =>{
       if(location !== null || phone !==null){
        await callApi('sign-in/update-location/?id='+user._id+"&location="+location+"&phone="+phone).then(async(res)=>{               
            await res.data
         await localStorage.setItem('userShopsale',JSON.stringify( res.data))
        })
        setChangeInfo(false)
       }
       else {
        swal("Oops", "Bạn Chưa Điền Thông Tin", "error");
       }
        
    }

    return (

        <Container style={{paddingTop:120}}>
            <div className="location__user__wrapper">
                <div className="location__user__line"></div>
                <div className="location__user__place">
                    <i className="fas fa-map-marker-alt">  Địa Chỉ Nhận Hàng</i>
                </div>
                <div className="info__user">
                    <b>{user ? user.fullName : ""} {user.phone === "null"|| user.phone === "" ? "Chưa có SĐT" : phone}</b>
                    <span className="info__user__location">{user.location === "null" || user.location === "" ? "Chưa có địa chỉ" : user.location  }</span>
                    {
                        changeInfo ? "" :
                        <span onClick={()=> changeInfoFunc()} className="info__user__action">Thay Đổi</span>
                    }
                </div>
                {
                    changeInfo ? 
                    <div>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" onInput={e => setPhone(e.target.value)} label="Số điện thoại" size="small" variant="outlined" />
                        <TextField id="outlined-basic"  onInput={e => setLocation(e.target.value)} label="Địa chỉ giao hàng" size="small" variant="outlined" />
                        <Button variant="contained" onClick={()=> changeInfoFuncSuccess()}   color="primary">Hoàn Thành</Button>
                    </form>
                </div> : ""
                }
            </div>
        </Container>

    );
}