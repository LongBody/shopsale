import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import '../../scss/product.scss'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';


const mostPopularProduct = [
  {
    "image": '/static/media/giay.74ca517e.png',
    "title": "Giày dép",
    "total": "24+",
    "path":"Giày"
  },
  {
    "image": '/static/media/thiet-bi-dien-tu.978b9e4c.png',
    "title": "Thiết bị điện tử",
    "total": "32+",
    "path":"Thiết bị điện tử"
  },
  {
    "image": '/static/media/bach_hoa.c432168e.png',
    "title": "Bách hoá",
    "total": "14+",
    "path":"Bách hoá"
  },
  {
    "image": '/static/media/do_choi.099edde1.png',
    "title": "Đồ Chơi Mẹ Và Bé",
    "total": "27+",
    "path":"Đồ Chơi Mẹ Và Bé"
  },
  {
    "image": '/static/media/may-anh.ec14dd4f.png',
    "title": "Máy ảnh",
    "total": "19+",
    "path":"Máy ảnh"
  },
  {
    "image": '/static/media/son.bba68b7d.png',
    "title": "Son Môi",
    "total": "3+",
    "path":"Son"
  },
  {
    "image": '/static/media/dong-ho.86c294aa.png',
    "title": "Đồng hồ",
    "total": "2+",
    "path":"Đồng hồ"
  },
  {
    "image": '/static/media/ao-nu.75ea42f9.png',
    "title": "Áo nữ",
    "total": "3+",
    "path":"Áo"
  }
]

export default function MostPopular() {

  let result = mostPopularProduct.map((item, index) => {
    return (
   
      <Grid item xs={12} sm={3} md={4} lg={3} className="most__popular__wrapper">
           <Link to={{ pathname:"/"+ item.path }}>
        <div style={{ border: "solid 1px rgba(0,0,0,.05)", boxShadow: "1px 1px 1px rgba(0,0,0,.05)" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <LazyLoadImage  effect="blur" src={item.image} alt={item.title} style={{ width: "auto", height: 100 }} />
          </div>
          <h4 style={{ textAlign: "center", color: "rgb(243 145 86", fontFamily: "sans-serif", paddingTop: 0, marginTop: 0 }}>{item.title}</h4>
          <p style={{ padding: 0, textAlign: "center", color: "#757575" }}>{item.total} sản phẩm</p>
        </div>
        </Link>
      </Grid>
   
    )
  })

  return (
    <Container>
      <Toolbar variant="dense" style={{ backgroundColor: "#FFF", paddingTop: 25, paddingBottom: 8 }}>
        <Grid container spacing={0} >
          {
            result
          }
        </Grid>
      </Toolbar>
    </Container>

  );
}