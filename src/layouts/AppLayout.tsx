import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

// COMPONENTS
import { Footer, ToolBar } from '@/components/navigation';

const AppLayout = () => {
  return (
    <Fragment>
      <div className="app-layout">
        <div className="app-layout__wrapper">
          <ToolBar />

          <div className="app-layout__body">
            <div className="app-layout__body-container">
              <Outlet />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export { AppLayout as default };
