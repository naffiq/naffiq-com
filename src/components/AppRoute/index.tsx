import * as React from "react";
import { Route } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

export default ({ component, ...routeProps }) => {
  const Component = component;

  return (
    <Route
      {...routeProps}
      render={props => (
        <MainLayout>
          <Component {...props} />
        </MainLayout>
      )}
    />
  );
};
