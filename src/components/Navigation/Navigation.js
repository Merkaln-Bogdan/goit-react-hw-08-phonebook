import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import ContactSelector from "../redux/Selectors/ContactSelectors";
import style from "./Navigation.module.css";
const Navigation = () => (
  <div className={style.wrapper}>
    <NavLink to="/" exact className={style.link}>
      Главная
    </NavLink>

    <NavLink to="/auth/signin" exact className={style.link}>
      Войти
    </NavLink>

    <NavLink to="/auth/register" exact className={style.link}>
      Регистрация
    </NavLink>

    <NavLink to="/api/contacts" exact className={style.link}>
      Контакты
    </NavLink>
  </div>
);
const mapStateToProps = (state) => {
  return {
    logIn: ContactSelector.getStatusLogIn(state),
  };
};

export default connect(mapStateToProps, null)(Navigation);
