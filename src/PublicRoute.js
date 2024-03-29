import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import getStatus from "./redux/Selectors/Selectors";

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  restricted,
  routeProps,
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated && restricted ? (
        <Redirect to={"/api/contacts"} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: getStatus.isAuthenticated(state),
});

export default connect(mapStateToProps, null)(PublicRoute);
