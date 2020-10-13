import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

// layout HOC
import withLayout from '../components/Layout';
import { allFlattenRoutes as routes } from './index';


// rendering the router with layout
const Routes = () => (
  <BrowserRouter>
    <Switch>
      {routes.map((route, index) => {
        return (
          !route.children && (
            <route.route
              key={index}
              path={route.path}
              roles={route.roles}
              exact={route.exact}
              component={withLayout(route.component)}
            />
          )
        );
      })}
    </Switch>
  </BrowserRouter>
);

export default Routes;
