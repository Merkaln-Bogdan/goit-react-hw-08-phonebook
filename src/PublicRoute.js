import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import getStatus from "./components/redux/Selectors/ContactSelectors";

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
        <Redirect to={"/contacts"} />
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
