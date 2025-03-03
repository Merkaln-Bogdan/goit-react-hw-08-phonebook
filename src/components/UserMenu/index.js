import React, { Component } from "react";
import { connect } from "react-redux";
import ContactSelectors from "../../redux/Selectors/Selectors";

import defaultAvatar from "../../assets/pngavatar.png";

import logOutButton from "../../assets/logout.png";

import style from "./UserMenu.module.css";
import UserOperation from "../../redux/Operations/UserOperation";

class UserMenu extends Component {
  state = {
    currentFile: undefined,
    previewImage: undefined,
  };

  selectFile = (event) => {
    this.setState({
      currentFile: event.target.files[0],
      previewImage: URL.createObjectURL(event.target.files[0]),
      progress: 0,
      message: "",
    });
  };

  render() {
    const { name, logOut, avatar, changeAvatar } = this.props;
    const { previewImage, currentFile } = this.state;

    return (
      <div className={style.WrapperUserMenu}>
        <div className={style.WrapperAvatar}>
          <img
            className={style.Avatar}
            src={previewImage || avatar || defaultAvatar}
            alt="avatar"
            width={40}
            height={40}
          />
          <input
            type="file"
            name="avatar"
            onChange={this.selectFile}
            className={style.InputAvatar}
          />
        </div>
        {previewImage && (
          <button type="button" onClick={() => changeAvatar(currentFile)}>
            Upload
          </button>
        )}

        <span className={style.BlockName}>{name}</span>
        <button className={style.ButtonLogOut} type="button" onClick={logOut}>
          <img src={logOutButton} alt="logout button" width="15" className={style.LogOutImg}/>
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  name: ContactSelectors.getUserName(state),
  avatar: ContactSelectors.getAvatar(state),
});
const MapDispatchToProps = {
  logOut: UserOperation.logOutUser,
  changeAvatar: UserOperation.createUserAvatar,
};
export default connect(mapStateToProps, MapDispatchToProps)(UserMenu);
