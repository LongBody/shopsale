import React, { Component } from "react";
import Slider from "react-slick";
import '../scss/carousel.scss'
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom'
export default class Responsive extends Component {
    render() {
        const settings = {
            dots: true,
            dotsClass: "button__bar",
            infinite: false,
            speed: 500,
            slidesToShow: 8,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div>
                    <div position="static" className="appbarCategories">
                        <Toolbar variant="dense">
                            <h4 className="name-categories-wrap"> DANH MỤC SẢN PHẨM </h4>
                        </Toolbar>
                        <div style={{backgroundColor:"rgb(0, 172, 193)",width:200,height:2}}>.</div>
                    </div>

                <Slider {...settings}>
                <Link to={{ pathname:"/" + "Thời Trang", }} >
                <div className="image-categories-wrap">
                        <img src="https://salt.tikicdn.com/ts/category/dd/51/92/e6bc22b5ec0d6d965a93f056b7776493.png" className="image-categories" />
                        <div className="title-categories">Thời Trang</div>
                    </div>
                </Link>
                <Link to={{ pathname:"/" + "Sắc Đẹp", }} >
                    <div className="image-categories-wrap">
                        <img src="https://salt.tikicdn.com/ts/category/85/13/02/d8e5cd75fd88862d0f5f647e054b2205.png" className="image-categories" />
                        <div className="title-categories">Sắc Đẹp</div>
                    </div>
                    </Link>
                    <Link to={{ pathname:"/"+ "Thiết Bị Điện Tử" }} >
                    <div className="image-categories-wrap" >
                        <img src="https://salt.tikicdn.com/ts/category/94/6a/42/3b262c87f2fd104b7cb50f38aef43e18.png" className="image-categories" />
                        <div className="title-categories"   >Thiết Bị Điện Tử</div>
                    </div>
                    </Link>
                    <Link to={{ pathname:"/"+ "Hàng Quốc Tế" }} >
                    <div className="image-categories-wrap">
                        <img src="https://salt.tikicdn.com/ts/category/9d/ba/6f/0c85993f0436f73cdfbababda1dc5595.png" className="image-categories" />
                        <div className="title-categories">Hàng Quốc Tế</div>
                    </div>
                    </Link>
                    <Link to={{ pathname:"/"+ "Điện Tử - Điện Lạnh" }}>
                    <div className="image-categories-wrap">
                        <img src="https://salt.tikicdn.com/ts/category/70/52/b1/31587960ac1eb915a86a5a8202da583a.png" className="image-categories" />
                        <div className="title-categories">Điện Tử - Điện Lạnh</div>
                    </div>
                    </Link>
                    <Link to={{ pathname:"/"+ "Thể Thao - Dã Ngoại" }}>
                    <div className="image-categories-wrap">
                        <img src="  https://salt.tikicdn.com/ts/category/90/78/11/b8a67fe010361551e515fdcca7709f69.png" className="image-categories" />
                        <div className="title-categories">Thể Thao - Dã Ngoại</div>
                    </div>
                    </Link>
                    <Link to={{ pathname:"/"+ "Đồ Chơi Mẹ Và Bé" }}>
                    <div className="image-categories-wrap">
                        <img src="https://salt.tikicdn.com/ts/category/66/15/4f/6282e8c6655cb87cb226e3b701bb9137.png" className="image-categories" />
                        <div className="title-categories">Đồ Chơi Mẹ Và Bé</div>
                    </div>
                    </Link>
                    <Link to={{ pathname:"/"+ "Máy Ảnh" }}>
                    <div className="image-categories-wrap">
                        <img src="https://salt.tikicdn.com/ts/category/c3/a4/87/4584c6298920124cb7da51de157ddac9.png" className="image-categories" />
                        <div className="title-categories">Máy Ảnh</div>
                    </div>
                    </Link>
                    <Link to={{ pathname:"/"+ "Điện Gia Dụng" }}>
                    <div className="image-categories-wrap">
                        <img src="https://salt.tikicdn.com/ts/category/b3/2b/72/8e7b4b703653050ffc79efc8ee017bd0.png" className="image-categories" />
                        <div className="title-categories">Điện Gia Dụng</div>
                    </div>
                    </Link>
                    <Link to={{ pathname:"/"+ "Bách Hoá" }}>
                    <div className="image-categories-wrap">
                        <img src="https://salt.tikicdn.com/ts/category/bd/9f/56/830a6a075c7cd78737a1d0c58e11926d.png" className="image-categories" />
                        <div className="title-categories">Bách Hoá</div>
                    </div>
                    </Link>
                    <Link to={{ pathname:"/"+ "Thiết Bị Số" }}>
                    <div className="image-categories-wrap">
                        <img src="https://salt.tikicdn.com/ts/category/85/b8/4e/bda4f4c039daa5bb8e6ecdccd7875b08.png" className="image-categories" />
                        <div className="title-categories">Thiết Bị Số</div>
                    </div>
                    </Link>
                    <Link to={{ pathname:"/"+ "Nhà Cửa - Đời Sống" }}>
                    <div className="image-categories-wrap">
                        <img src="https://salt.tikicdn.com/ts/category/12/29/a2/7409ff03cff5c0d3d695cb19f8f15896.png" className="image-categories" />
                        <div className="title-categories">Nhà Cửa - Đời Sống</div>
                    </div>
                    </Link>



                </Slider>

            </div>
        );
    }
}