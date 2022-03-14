import React from 'react';
import { ArrowNext, ArrowPrev } from 'helpers/arrowSlickCustom';
import image_1 from 'image/category/thoi_trang.png';
import image_2 from 'image/category/sac_dep.png';
import image_3 from 'image/category/thiet_bi_dien_tu.png';
import image_4 from 'image/category/hang_quoc_te.png';
import image_5 from 'image/category/dien_tu_dien_lanh.png';
import image_6 from 'image/category/the_thao_da_ngoai.png';
import image_7 from 'image/category/do_choi_me_va_be.png';
import image_8 from 'image/category/may_anh.png';
import image_9 from 'image/category/dien_gia_dung.png';
import image_10 from 'image/category/bach_hoa.png';
import image_11 from 'image/category/thiet_bi_so.png';
import image_12 from 'image/category/nha_cua_doi_song.png';

export const productCategory: any = [
  {
    link: '/Thời Trang',
    name: 'Thời Trang',
    image: image_1,
  },
  {
    link: '/Sắc Đẹp',
    name: 'Sắc Đẹp',
    image: image_2,
  },
  {
    link: '/Thiết Bị Điện Tử',
    name: 'Thiết Bị Điện Tử',
    image: image_3,
  },
  {
    link: '/Hàng Quốc Tế',
    name: 'Hàng Quốc Tế',
    image: image_4,
  },
  {
    link: '/Điện Tử - Điện Lạnh',
    name: 'Điện Tử - Điện Lạnh',
    image: image_5,
  },
  {
    link: '/Thể Thao - Dã Ngoại',
    name: 'Thể Thao - Dã Ngoại',
    image: image_6,
  },
  {
    link: '/Đồ Chơi Mẹ Và Bé',
    name: 'Đồ Chơi Mẹ Và Bé',
    image: image_7,
  },
  {
    link: '/Máy Ảnh',
    name: 'Máy Ảnh',
    image: image_8,
  },
  {
    link: '/Điện Gia Dụng',
    name: 'Điện Gia Dụng',
    image: image_9,
  },
  {
    link: '/Bách Hoá',
    name: 'Bách Hoá',
    image: image_10,
  },
  {
    link: '/Thiết Bị Số',
    name: 'Thiết Bị Số',
    image: image_11,
  },
  {
    link: '/Nhà Cửa - Đời Sống',
    name: 'Nhà Cửa - Đời Sống',
    image: image_12,
  },
];

export const settings = {
  // dots: true,
  // dotsClass: 'button__bar',
  // infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 4,
  initialSlide: 0,
  nextArrow: <ArrowNext />,
  prevArrow: <ArrowPrev />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
