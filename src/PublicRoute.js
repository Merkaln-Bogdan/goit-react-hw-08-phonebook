import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import getStatus from "./components/redux/Selectors/ContactSelectors";

const PublicRoute = ({
  component: Component,
  logIn,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      logIn && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  logIn: getStatus.getStatusLogIn(state),
});

export default connect(mapStateToProps, null)(PublicRoute);
