import React, { Fragment } from 'react';
import uuid from 'react-uuid';

// COMPONENTS
import { FooterItem } from '@/components/navigation';

const Footer = () => {
  const footerItems = [
    {
      title: 'abbasalabson[at]gmail.com',
      to: 'mailto:abbasalabson@gmail.com',
    },
    {
      title: 'LinkedIn',
      to: 'https://www.linkedin.com/in/abbas-alabura',
    },
    {
      title: 'Behance',
      to: 'https://www.behance.net/abbasaliyualabura',
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
