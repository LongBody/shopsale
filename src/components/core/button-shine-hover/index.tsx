import 'components/core/button-shine-hover/style.scss';
import React from 'react';

type Props = {
  title: string;
  onClick: any;
};

const Tooptips: React.FC<Props> = (props) => {
  return (
    <button className="sheen" onClick={props?.onClick}>
      {props?.title ? props?.title : 'Shopsale'}
    </button>
  );
};

export default Tooptips;
