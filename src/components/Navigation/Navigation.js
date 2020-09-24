import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import getStatusLogIn from "../redux/Selectors/ContactSelectors";

const Navigation = () => (
  <>
    <NavLink to="/" exact>
      Главная
    </NavLink>
    <br />
    <NavLink to="/login" exact>
      LogIn
    </NavLink>
    <br />
    <NavLink to="/registration" exact>
      Регистрация
    </NavLink>
    <br />
    <NavLink to="/contacts" exact>
      Контакты
    </NavLink>
  </>
);
const mapStateToProps = (state) => {
  return {
    logIn: getStatusLogIn.getStatusLogIn(state),
  };
};

export default connect(mapStateToProps, null)(Navigation);
