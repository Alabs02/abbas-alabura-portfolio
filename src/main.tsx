// STORE PLUGINS
// CORE COMPONENTS
// GLOBAL STYLES
import 'nprogress/nprogress.css';
import '@/styles/global.scss';
import 'animate.css/animate.min.css';
import 'material-react-toastify/dist/ReactToastify.css';

import React, { StrictMode } from 'react';
import { render } from 'react-dom';

// APP
import { App } from '@/app';

// APP ROOT
const root = document.getElementById('app-root') as HTMLElement;

render(
  <StrictMode>
    <App />
  </StrictMode>,
  root,
);
