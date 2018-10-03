import * as React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import authHelper from "../../helpers/authHelper";
import MainLayout from "../Layouts/MainLayout";

interface AppRouteProps extends RouteProps {
  component: React.ComponentType<any>;
  [props: string]: any;
}

const SecureRoute = ({ component: Component, ...rest }: AppRouteProps) => (
  <Route
    {...rest}
    render={props =>
      authHelper.isAuthenticated ? (
        <MainLayout>
          <Component {...props} />
        </MainLayout>
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default SecureRoute;
