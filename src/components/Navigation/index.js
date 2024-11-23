import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import ContactSelector from "../../redux/Selectors/Selectors";
import style from "./Navigation.module.css";

const Navigation = ({transationHook}) => {

  return (
    <div className={style.wrapper}>
      <NavLink to="/" exact className={style.link}>
        {transationHook("home")}
      </NavLink>

      <NavLink to="/auth/signin" exact className={style.link}>
        {transationHook("login")}
      </NavLink>

      <NavLink to="/auth/register" exact className={style.link}>
        {transationHook("signup")}
      </NavLink>

      <NavLink to="/api/contacts" exact className={style.link}>
        {transationHook("phonebook")}
      </NavLink>
    </div>
  )
  
};

const mapStateToProps = (state) => {
  return {
    logIn: ContactSelector.getStatusLogIn(state),
  };
};

export default connect(mapStateToProps, null)(Navigation);
