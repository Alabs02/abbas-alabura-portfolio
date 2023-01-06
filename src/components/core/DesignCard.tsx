import React, { FC, Fragment } from 'react';

interface IProps {
  backgroundColor: string;
}

const DesignCard: FC<IProps> = ({ backgroundColor }): JSX.Element => {
  return (
    <Fragment>
      <button style={{ backgroundColor }} className="design-card">
        <div className="design-card__heading">Mee's Palace Cinema App</div>

        <div className="design-card__line"></div>

        <div className="design-card__copy">
          Imagine a natural and immersive TV experience
        </div>

        <div className="design-card__media">
          <img
            className="design-card__img"
            src="http://www.samuel-medvedowsky.com/images/sfr_thumb_clean.png"
            alt="brand image"
          />
        </div>
      </button>
    </Fragment>
  );
};

export { DesignCard as default };
