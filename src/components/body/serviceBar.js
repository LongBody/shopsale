import React, {useState} from 'react';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
export default function Servicebar() {

   


    return (

    
    <Container>
    <Toolbar variant="dense" style={{ backgroundColor: "#FFF", paddingTop: 25 }}>
      <Grid container spacing={4} >
        <Grid item xs={12} sm={3} md={4} lg={2}>
          <div>
            <i className="fas fa-shipping-fast" style={{ fontSize: 50, display: "flex", justifyContent: "center", color: "rgb(0, 172, 193)" }}></i>
            <h4 style={{ textAlign: "center", color: "rgb(117, 117, 117)" ,fontFamily:"sans-serif"  }}>Giao Hàng Miễn Phí</h4>
          </div>
        </Grid>


        <Grid item xs={12} sm={3} md={4} lg={2}>
          <div>
            <i className="fas fa-dice-d6" style={{ fontSize: 50, display: "flex", justifyContent: "center", color: "rgb(0, 172, 193)" }}></i>
            <h4 style={{ textAlign: "center", color: "rgb(117, 117, 117)" ,fontFamily:"sans-serif" }}>Đa Dạng Sản Phẩm</h4>
          </div>
        </Grid>

        <Grid item xs={12}  sm={3} md={4} lg={2}>
          <div>
            <i className="fas fa-tags" style={{ fontSize: 50, display: "flex", justifyContent: "center", color: "rgb(0, 172, 193)" }}></i>
            <h4 style={{ textAlign: "center", color: "rgb(117, 117, 117)" ,fontFamily:"sans-serif"  }}>Giá Ưu Đãi</h4>
          </div>
        </Grid>

        <Grid item xs={12}  sm={3} md={4} lg={2}>
          <div>
            <i className="fas fa-box-open" style={{ fontSize: 50, display: "flex", justifyContent: "center", color: "rgb(0, 172, 193)" }}></i>
            <h4 style={{ textAlign: "center", color: "rgb(117, 117, 117)" ,fontFamily:"sans-serif" }}>Dễ Dàng Đổi Trả</h4>
          </div>
        </Grid>

        <Grid item xs={12} sm={3} md={4} lg={2}>
          <div>
            <i className="fas fa-headset" style={{ fontSize: 50, display: "flex", justifyContent: "center", color: "rgb(0, 172, 193)" }}></i>
            <h4 style={{ textAlign: "center",color: "rgb(117, 117, 117)" ,fontFamily:"sans-serif"  }}>Hỗ Trợ 24/7</h4>
          </div>
        </Grid>

        <Grid item xs={12} sm={3} md={4} lg={2}>
          <div>
            <i className="fas fa-money-check-alt" style={{ fontSize: 50, display: "flex", justifyContent: "center", color: "rgb(0, 172, 193)" }}></i>
            <h4 style={{ textAlign: "center", color: "rgb(117, 117, 117)" ,fontFamily:"sans-serif"  }}>Thanh Toán An Toàn</h4>
          </div>
        </Grid>

        <Grid item xs={12}  sm={3} md={4} lg={2}>
        </Grid>
      </Grid>
    </Toolbar>
  </Container>

    );
}