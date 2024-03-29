import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import getstatus from "./redux/Selectors/Selectors";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,

  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={"/auth/signin"} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: getstatus.isAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
