import React, { FC, Fragment, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

interface IFooterItem {
  title: string;
  to: string;
  uuid: () => string;
}

const FooterItem: FC<IFooterItem> = ({ title, to, uuid }) => {
  return (
    <Fragment>
      <div className="footer__item" key={uuid()}>
        <a className="footer__link" target="_blank" href={to}>
          {title}
        </a>

        <div className="footer__spacer"></div>

        <div className="footer__line"></div>
      </div>
    </Fragment>
  );
};

export { FooterItem as default };
