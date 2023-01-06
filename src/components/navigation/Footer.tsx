import React, { Fragment } from 'react';
import uuid from 'react-uuid';

// COMPONENTS
import { FooterItem } from '@/components/navigation';

const Footer = () => {
  const footerItems = [
    {
      title: 'abbasalabura[at]gmail.com',
      to: '#',
    },
    {
      title: 'LinkedIn',
      to: '/linkedIn',
    },
    {
      title: 'Behance',
      to: '/behance',
    },
  ];

  return (
    <Fragment>
      <div className="footer">
        <div className="footer__wrapper">
          {footerItems.map((footerItem) => (
            <FooterItem
              key={uuid()}
              title={footerItem.title}
              to={footerItem.to}
              uuid={uuid}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export { Footer as default };
