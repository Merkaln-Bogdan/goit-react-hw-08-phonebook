import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import getstatus from "./components/redux/Selectors/ContactSelectors";

const PrivateRoute = ({
  component: Component,
  logIn,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      logIn ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
);

const mapStateToProps = (state) => ({
  logIn: getstatus.isAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
