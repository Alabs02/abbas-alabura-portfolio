import { Slide, ToastContainer } from 'material-react-toastify/dist';
import React, { Fragment } from 'react';

const MaterialToastContainer = (): JSX.Element => (
  <Fragment>
    <ToastContainer
      limit={3}
      position={'top-right'}
      autoClose={3000}
      newestOnTop={true}
      hideProgressBar={true}
      transition={Slide}
      draggable
      closeOnClick
      pauseOnHover
    ></ToastContainer>
  </Fragment>
);

export { MaterialToastContainer as default };
