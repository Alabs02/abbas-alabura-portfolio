import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const ToolBar = () => {
  const toggleNavLink = (isActive: boolean): string => {
    return isActive
      ? 'toolbar__link toolbar__link--active'
      : 'toolbar__link toolbar__link--inactive';
  };

  return (
    <Fragment>
      <div className="toolbar">
        <div className="toolbar__wrapper">
          <div className="toolbar__logo">
            <div className="toolbar__logo-letter">A</div>
            <div className="toolbar__logo-line"></div>
          </div>

          <div className="toolbar__items">
            <div className="toolbar__item">
              <NavLink to={'/'} className={({ isActive }) => toggleNavLink(isActive)}>
                Case Studies
              </NavLink>
            </div>

            <div className="toolbar__item">
              <NavLink
                to={'/about'}
                className={({ isActive }) => toggleNavLink(isActive)}
              >
                About
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { ToolBar as default };
