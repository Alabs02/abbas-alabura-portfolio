import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const InfoCard = () => {
  return (
    <Fragment>
      <div className="info-card">
        <div className="info-card__content">
          As a UX designer, I strive to create useful and enjoyable experiences for the
          web and beyond. I'd love to hear about your project and see how I can help bring
          your vision to life. Let's work together to create something great!
        </div>

        <Link to={'/about'} className="info-card__link">
          More about me
        </Link>
      </div>
    </Fragment>
  );
};

export { InfoCard as default };
