import React, { FC, Fragment, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

interface IFooterItem {
  title: string;
  to: string;
  uuid: () => string;
}

const FooterItem: FC<IFooterItem> = ({ title, to, uuid }) => {
  const openMailApp = (e: any) => {
    if (to !== '#') {
      return;
    }

    window.location.href = 'mailto:abbasalabura@gmail.com';
    e.preventDefault();
  };

  return (
    <Fragment>
      <div className="footer__item" key={uuid()}>
        <Link className="footer__link" to={to} onClick={(e) => openMailApp(e)}>
          {title}
        </Link>

        <div className="footer__spacer"></div>

        <div className="footer__line"></div>
      </div>
    </Fragment>
  );
};

export { FooterItem as default };
