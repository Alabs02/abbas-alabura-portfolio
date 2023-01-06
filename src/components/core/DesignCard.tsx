import React, { FC, Fragment } from 'react';

interface IProps {
  title: string;
  image: string;
  figma_url: string;
  behance_url: string;
  description: string;
  backgroundColor: string;
}

const DesignCard: FC<IProps> = ({ title, description, image, backgroundColor, figma_url, behance_url }): JSX.Element => {

  const blendBackground = (): string => {
    if (title === 'Mees Palace') {
      return '#04243B'; 
    }

    return 'transparent';
  }

  return (
    <Fragment>
      <button style={{ backgroundColor }} className="design-card">
        <div className="design-card__body">
          <div className="design-card__heading">{title}</div>

          <div className="design-card__line"></div>

          <div className="design-card__copy">
            {description}
          </div>
        </div>

        <div style={{ backgroundColor: blendBackground() }} className="design-card__media">
          <div className="design-card__media-container">
            <img
              className="design-card__img"
              src={image}
              alt="brand image"
            />
          </div>
        </div>
      </button>
    </Fragment>
  );
};

export { DesignCard as default };
