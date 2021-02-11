import React, { Component } from "react";
import Slider from "react-slick";
import '../../scss/carousel.scss'
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import image_1 from '../../image/category/thoi_trang.png'
import image_2 from '../../image/category/sac_dep.png'
import image_3 from '../../image/category/thiet_bi_dien_tu.png'
import image_4 from '../../image/category/hang_quoc_te.png'
import image_5 from '../../image/category/dien_tu_dien_lanh.png'
import image_6 from '../../image/category/the_thao_da_ngoai.png'
import image_7 from '../../image/category/do_choi_me_va_be.png'
import image_8 from '../../image/category/may_anh.png'
import image_9 from '../../image/category/dien_gia_dung.png'
import image_10 from '../../image/category/bach_hoa.png'
import image_11 from '../../image/category/thiet_bi_so.png'
import image_12 from '../../image/category/nha_cua_doi_song.png'

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
                    <div style={{ backgroundColor: "rgb(0, 172, 193)", width: 200, height: 2 }}>.</div>
                </div>

                <Slider {...settings}>
                    <Link to={{ pathname: "/" + "Thời Trang", }} >
                        <div className="image-categories-wrap">
                            <LazyLoadImage effect="blur" src={image_1} className="image-categories" alt="" />
                            <div className="title-categories">Thời Trang</div>
                        </div>
                    </Link>
                    <Link to={{ pathname: "/" + "Sắc Đẹp", }} >
                        <div className="image-categories-wrap">
                            <LazyLoadImage effect="blur" src={image_2} className="image-categories" alt="" />
                            <div className="title-categories">Sắc Đẹp</div>
                        </div>
                    </Link>
                    <Link to={{ pathname: "/" + "Thiết Bị Điện Tử" }} >
                        <div className="image-categories-wrap" >
                            <LazyLoadImage effect="blur" src={image_3} className="image-categories" alt="" />
                            <div className="title-categories"   >Thiết Bị Điện Tử</div>
                        </div>
                    </Link>
                    <Link to={{ pathname: "/" + "Hàng Quốc Tế" }} >
                        <div className="image-categories-wrap">
                            <LazyLoadImage effect="blur" src={image_4} className="image-categories" alt="" />
                            <div className="title-categories">Hàng Quốc Tế</div>
                        </div>
                    </Link>
                    <Link to={{ pathname: "/" + "Điện Tử - Điện Lạnh" }}>
                        <div className="image-categories-wrap">
                            <LazyLoadImage effect="blur" src={image_5} className="image-categories" alt="" />
                            <div className="title-categories">Điện Tử - Điện Lạnh</div>
                        </div>
                    </Link>
                    <Link to={{ pathname: "/" + "Thể Thao - Dã Ngoại" }}>
                        <div className="image-categories-wrap">
                            <LazyLoadImage effect="blur" src={image_6} className="image-categories" alt="" />
                            <div className="title-categories">Thể Thao - Dã Ngoại</div>
                        </div>
                    </Link>
                    <Link to={{ pathname: "/" + "Đồ Chơi Mẹ Và Bé" }}>
                        <div className="image-categories-wrap">
                            <LazyLoadImage effect="blur" src={image_7} className="image-categories" alt="" />
                            <div className="title-categories">Đồ Chơi Mẹ Và Bé</div>
                        </div>
                    </Link>
                    <Link to={{ pathname: "/" + "Máy Ảnh" }}>
                        <div className="image-categories-wrap">
                            <LazyLoadImage effect="blur" src={image_8} className="image-categories" alt="" />
                            <div className="title-categories">Máy Ảnh</div>
                        </div>
                    </Link>
                    <Link to={{ pathname: "/" + "Điện Gia Dụng" }}>
                        <div className="image-categories-wrap">
                            <LazyLoadImage effect="blur" src={image_9} className="image-categories" alt="" />
                            <div className="title-categories">Điện Gia Dụng</div>
                        </div>
                    </Link>
                    <Link to={{ pathname: "/" + "Bách Hoá" }}>
                        <div className="image-categories-wrap">
                            <LazyLoadImage effect="blur" src={image_10} className="image-categories" alt="" />
                            <div className="title-categories">Bách Hoá</div>
                        </div>
                    </Link>
                    <Link to={{ pathname: "/" + "Thiết Bị Số" }}>
                        <div className="image-categories-wrap">
                            <LazyLoadImage effect="blur" src={image_11} className="image-categories" alt="" />
                            <div className="title-categories">Thiết Bị Số</div>
                        </div>
                    </Link>
                    <Link to={{ pathname: "/" + "Nhà Cửa - Đời Sống" }}>
                        <div className="image-categories-wrap">
                            <LazyLoadImage effect="blur" src={image_12} className="image-categories" alt="" />
                            <div className="title-categories">Nhà Cửa - Đời Sống</div>
                        </div>
                    </Link>



                </Slider>

            </div>
        );
    }
}