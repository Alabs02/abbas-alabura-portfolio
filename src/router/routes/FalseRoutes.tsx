import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

// PAGES
import { NotFound } from '@/pages/false.pages';

const FalseRoutes = () => {
  return (
    <Fragment>
      <Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Fragment>
  );
};

export { FalseRoutes as default };
