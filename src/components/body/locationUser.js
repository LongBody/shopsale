import React, {useState} from 'react';
import { Container } from '@material-ui/core';
import '../../scss/checkout.scss'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function LocationUser() {

    const [changeInfo , setChangeInfo] = useState(false)

    const classes = useStyles();

    const changeInfoFunc = () =>{
        setChangeInfo(true)
    }

    const  changeInfoFuncSuccess= () =>{
        setChangeInfo(false)
    }

    return (

        <Container style={{paddingTop:120}}>
            <div className="location__user__wrapper">
                <div className="location__user__line"></div>
                <div className="location__user__place">
                    <i className="fas fa-map-marker-alt">  Địa Chỉ Nhận Hàng</i>
                </div>
                <div className="info__user">
                    <b>Nguyễn Thành Long (+84) 344914282</b>
                    <span className="info__user__location">Cây xăng 39 thạch hòa, Xã Thạch Hòa, Huyện Thạch Thất, Hà Nội</span>
                    {
                        changeInfo ? "" :
                        <span onClick={()=> changeInfoFunc()} className="info__user__action">Thay Đổi</span>
                    }
                </div>
                {
                    changeInfo ? 
                    <div>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic"  label="Họ và tên" size="small" variant="outlined"  />
                        <TextField id="outlined-basic" label="Số điện thoại" size="small" variant="outlined" />
                        <TextField id="outlined-basic" label="Địa chỉ giao hàng" size="small" variant="outlined" />
                        <Button variant="contained" onClick={()=> changeInfoFuncSuccess()}   color="primary">Hoàn Thành</Button>
                    </form>
                </div> : ""
                }
            </div>
        </Container>

    );
}