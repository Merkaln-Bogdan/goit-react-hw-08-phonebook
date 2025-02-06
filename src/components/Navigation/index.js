import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { routes } from "../../constants/routes";
import ContactSelector from "../../redux/Selectors/Selectors";
import style from "./Navigation.module.css";

const Navigation = ({transationHook}) => {

  return (
    <div className={style.wrapper}>
      {routes.map(el => (
          <NavLink to={el.route} key={el.route} exact className={style.link}>
           {transationHook(el.label)}
          </NavLink>
      ))}
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    logIn: ContactSelector.getStatusLogIn(state),
  };
};

export default connect(mapStateToProps, null)(Navigation);
