import React from 'react';
import { Container , Grid , Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom'
import image_1 from 'image/popular/giay.png'
import image_2 from 'image/popular/thiet-bi-dien-tu.png'
import image_3 from 'image/popular/bach_hoa.png'
import image_4 from 'image/popular/do_choi.png'
import image_5 from 'image/popular/may-anh.png'
import image_6 from 'image/popular/son.png'
import image_7 from 'image/popular/dong-ho.png'
import image_8 from 'image/popular/ao-nu.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'scss/product.scss'


const mostPopularProduct = [
  {
    "image": image_1,
    "title": "Giày dép",
    "total": "24+",
    "path":"Giày"
  },
  {
    "image": image_2,
    "title": "Thiết bị điện tử",
    "total": "32+",
    "path":"Thiết bị điện tử"
  },
  {
    "image":image_3,
    "title": "Bách hoá",
    "total": "14+",
    "path":"Bách hoá"
  },
  {
    "image": image_4,
    "title": "Đồ Chơi Mẹ Và Bé",
    "total": "27+",
    "path":"Đồ Chơi Mẹ Và Bé"
  },
  {
    "image": image_5,
    "title": "Máy ảnh",
    "total": "19+",
    "path":"Máy ảnh"
  },
  {
    "image": image_6,
    "title": "Son Môi",
    "total": "3+",
    "path":"Son"
  },
  {
    "image":image_7,
    "title": "Đồng hồ",
    "total": "2+",
    "path":"Đồng hồ"
  },
  {
    "image": image_8,
    "title": "Áo nữ",
    "total": "3+",
    "path":"Áo"
  }
]

export default function MostPopular() {

  let result = mostPopularProduct.map((item, index) => {
    return (
   
      <Grid item xs={12} sm={3} md={4} lg={3} className="most__popular__wrapper" key={index}>
           <Link to={{ pathname:"/"+ item.path }}>
        <div style={{ border: "solid 1px rgba(0,0,0,.05)", boxShadow: "1px 1px 1px rgba(0,0,0,.05)" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <LazyLoadImage   effect="blur" src={item.image} alt={item.title} style={{ width: "auto", height: 100 }} />
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