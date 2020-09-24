import React from "react";
import { connect } from "react-redux";
import ContactsOperation from "../redux/ContactsOperatins/ContactsOperation";
import ContactSelectors from "../redux/Selectors/ContactSelectors";
import defaultAvatar from "./png-avatar.png";
import logOutButton from "./logout.png";
import style from "./UserMenu.module.css";
const UserMenu = ({ avatar, logOut, name }) => (
  <div className={style.WrapperUserMenu}>
    <img
      className={style.Avatar}
      src={avatar}
      width="40"
      height="40"
      alt="user-avatar"
    />
    <span className={style.BlockName}>Добро пожаловать, {name}</span>
    <button className={style.ButtonLogOut} type="button" onClick={logOut}>
      <img src={logOutButton} alt="logout button " width="20" />
    </button>
  </div>
);
const mapStateToProps = (state) => ({
  name: ContactSelectors.getUserName(state),
  avatar: defaultAvatar,
});
const MapDispatchToProps = {
  logOut: ContactsOperation.logOutUser,
};
export default connect(mapStateToProps, MapDispatchToProps)(UserMenu);
