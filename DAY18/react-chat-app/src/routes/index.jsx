import React, { Suspense } from 'react';
import { Routes as SwitchRoute, Route } from 'react-router-dom';

//import routes
import { publicRoutes } from './routes';

//import layouts
import NonAuthLayout from '../layouts/NonAuthLayout';

const Routes = () => {
  return (
    // rendering the router with layout
    <>
      <Suspense fallback={<div></div>}>
        <SwitchRoute>
          {publicRoutes.map((route, idx) => (
            <Route
              path={route.path}
              layout={NonAuthLayout}
              element={<NonAuthLayout>{route.component}</NonAuthLayout>}
              key={idx}
              isAuthProtected={false}
            />
          ))}
        </SwitchRoute>
      </Suspense>
    </>
  );
};

export default Routes;
