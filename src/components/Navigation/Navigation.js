import React from "react";

import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import getStatusLogIn from "../redux/Selectors/ContactSelectors";

const Navigation = () => (
  <>
    <NavLink to="/" exact>
      Home
    </NavLink>
    <br />
    <NavLink to="/login" exact>
      LogIn
    </NavLink>
    <br />
    <NavLink to="/registration" exact>
      Registration
    </NavLink>
    <br />
    <NavLink to="/contacts" exact>
      Contacts
    </NavLink>
  </>
);
const mapStateToProps = (state) => {
  return {
    logIn: getStatusLogIn.getStatusLogIn(state),
  };
};

export default connect(mapStateToProps, null)(Navigation);
