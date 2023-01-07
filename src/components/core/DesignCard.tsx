import React, { FC, Fragment } from 'react';

// COMPONENTS
import { Button } from '@/components/core';

interface IProps {
  title: string;
  image: string;
  figma_url?: string;
  behance_url?: string;
  description: string;
  backgroundColor: string;
}

const DesignCard: FC<IProps> = ({
  title,
  description,
  image,
  backgroundColor,
  figma_url,
  behance_url,
}): JSX.Element => {
  const blendBackground = (): string => {
    if (title === 'Mees Palace') {
      return '#04243B';
    }

    return 'transparent';
  };

  return (
    <Fragment>
      <div style={{ backgroundColor }} className="design-card">
        <div className="design-card__body">
          <div className="design-card__heading">{title}</div>

          <div className="design-card__line"></div>

          <div className="design-card__copy">{description}</div>
        </div>

        <div
          style={{ backgroundColor: blendBackground() }}
          className="design-card__media"
        >
          <div className="design-card__media-container">
            <img className="design-card__img" src={image} alt="brand image" />
          </div>
        </div>

        <div className="design-card__panel">
          {figma_url && (
            <Button url={figma_url} img={'/static/icons/figma-icon.png'} />
          )}

          {behance_url && (
            <Button url={behance_url} img={'/static/icons/behance-icon.png'} />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export { DesignCard as default };
