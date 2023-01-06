import { BrowserRouter, Routes } from 'react-router-dom';

// ROUTES(JSX API)
import { FalseRoutes, MainRoutes } from '@/router/routes';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        {MainRoutes()} {/*  MAIN ROUTES  */}
        {FalseRoutes()} {/* FALSE ROUTES */}
      </Routes>
    </BrowserRouter>
  );
};

export { Router as default };
