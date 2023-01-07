import React, { Fragment, FC } from 'react';

interface IProps {
  url: string;
  img: string;
}

const Button: FC<IProps> = ({ url, img }): JSX.Element => {
  const gotoURL = () => {
    window.open(url, '_blank');
  };

  return (
    <Fragment>
      <button onClick={gotoURL} className="app-button">
        <img src={img} alt="button icon" />
      </button>
    </Fragment>
  );
};

export { Button as default };
