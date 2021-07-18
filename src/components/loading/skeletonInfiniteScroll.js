import React from 'react';
import { Skeleton } from '@material-ui/lab';
import LogoWeb from '../../image/logo_spin.gif';
import '../../scss/skeletonInfiniteLoading.scss';

export default function SkeletonLoading() {
  const skeleton = new Array(10);
  let result = [];
  for (let i = 0; i < skeleton.length; i++) {
    result.push(
      <div className="product__container" key={i}>
        <div className="product__image__container">
          <img
            src={LogoWeb}
            style={{ width: 40, opacity: '0.4' }}
            alt="shopsale"
          />
        </div>
        <Skeleton variant="rect" width={'100%'} height={280} animation="wave" />
      </div>,
    );
  }

  return (
    <div>
      <div class="product__infinite__flex__loading__container">{result}</div>
    </div>
  );
}
