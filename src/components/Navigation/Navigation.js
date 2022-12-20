import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import getStatusLogIn from "../redux/Selectors/ContactSelectors";
import style from "./Navigation.module.css";
const Navigation = () => (
  <div className={style.wrapper}>
    <NavLink to="/" exact>
      Главная
    </NavLink>
    <br />
    <NavLink to="/auth/signin" exact>
      Войти
    </NavLink>
    <br />
    <NavLink to="/auth/register" exact>
      Регистрация
    </NavLink>
    <br />
    <NavLink to="/api/contacts" exact>
      Контакты
    </NavLink>
  </div>
);
const mapStateToProps = (state) => {
  return {
    logIn: getStatusLogIn.getStatusLogIn(state),
  };
};

export default connect(mapStateToProps, null)(Navigation);
