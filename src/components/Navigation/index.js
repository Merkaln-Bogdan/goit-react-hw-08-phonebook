import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import ContactSelector from "../../redux/Selectors/Selectors";
import style from "./Navigation.module.css";

const Navigation = () => (
  <div className={style.wrapper}>
    <NavLink to="/" exact className={style.link}>
      Home
    </NavLink>

    <NavLink to="/auth/signin" exact className={style.link}>
      Log In
    </NavLink>

    <NavLink to="/auth/register" exact className={style.link}>
      Sign Up
    </NavLink>

    <NavLink to="/api/contacts" exact className={style.link}>
      Phonebook
    </NavLink>
  </div>
);

const mapStateToProps = (state) => {
  return {
    logIn: ContactSelector.getStatusLogIn(state),
  };
};

export default connect(mapStateToProps, null)(Navigation);
