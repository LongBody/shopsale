import React from 'react';
import 'components/core/tooltips/style.scss';

type Props = {
  title: string;
  tooltipTittle: string;
};

const Tooptips: React.FC<Props> = (tittle, tooltipTittle) => {
  return (
    <div>
      <p className="tooltip expand" data-title="Hypertext Markup Language">
        HTML
      </p>
    </div>
  );
};

export default Tooptips;
