import React from 'react';

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
