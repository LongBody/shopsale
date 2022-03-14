import React from 'react';
import { ArrowNext, ArrowPrev } from 'helpers/arrowSlickCustom';

export const StyleStar = {
  color: '#fb6e2e',
  fontSize: 13,
  float: 'right',
  marginTop: 3,
} as React.CSSProperties;

export const StyleStarNone = {
  color: '#fc9d0a',
  fontSize: 13,
  float: 'right',
  marginTop: 3,
} as React.CSSProperties;

export const showRating = (rating: any) => {
  let result = [];
  for (let index2 = 0; index2 < 5 - rating; index2++) {
    result.push(
      <i className="far fa-star" key={index2 + 100} style={StyleStarNone}></i>,
    );
  }
  for (let index = 0; index < rating; index++) {
    result.push(<i className="fas fa-star" style={StyleStar} key={index}></i>);
  }
  return result;
};

export const settings = {
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 5,
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
