import React from 'react';
import { DEFAULT_APP_CLOUNDINARY } from 'constants/config';

interface ArrowProps {
  className?: any;
  style?: any;
  onClick?: any;
}

export const ArrowPrev: React.FC<ArrowProps> = ({
  style,
  className,
  onClick,
}) => (
  <div
    style={{
      ...style,
      backgroundColor: '#e7e7e7',
      zIndex: 10,
      height: 50,
      width: 30,
      borderRadius: 5,
      position: 'absolute',
      left: '-15px',
    }}
    onClick={onClick}
    className={className}
  >
    <img
      src={`${DEFAULT_APP_CLOUNDINARY}/arrow_left-512_ltcdlv.webp`}
      style={{ height: 20, position: 'absolute', left: 5, top: 15 }}
      alt="arrow_left"
    />
  </div>
);

export const ArrowNext: React.FC<ArrowProps> = ({
  style,
  className,
  onClick,
}) => (
  <div
    style={{
      ...style,
      backgroundColor: '#e7e7e7',
      zIndex: 10,
      height: 50,
      width: 30,
      borderRadius: 5,
      position: 'absolute',
      right: '-15px',
    }}
    onClick={onClick}
    className={className}
  >
    <img
      src={`${DEFAULT_APP_CLOUNDINARY}/arrow_right-512_qzua1r.webp`}
      style={{ height: 20, position: 'absolute', left: 6 }}
      alt="arrow_left"
      onClick={onClick}
      className={className}
    />
  </div>
);
