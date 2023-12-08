import React, {Component} from "react";
import { connect } from "react-redux";
import i18n from "i18next";
import UserOperation from "../../redux/Operations/UserOperation";
import withTranslation from "../../hook"
import ContactSelector from "../../redux/Selectors/Selectors"
import style from "./Header.module.css";
import Navigation from "../Navigation";
import { LanguageNav } from "./LanguageNav";
import UserMenu from "../UserMenu";


class Header extends Component {
 
    componentDidMount() {
        i18n.changeLanguage(this.props.user.lang)
    }

   
    handleChangeLanguageApp = (e) => {
        const {value} = e.target;
        i18n.changeLanguage(this.props.user.lang)
        this.props.onGetUpdateUser({...this.props.user, lang: value})
       
    }

    render(){
        const {isAuthenticated, user} = this.props
 
        return (
            <div className={style.navigation}>
                <LanguageNav user={user} handleChangeLanguageApp={this.handleChangeLanguageApp}/>
            
                <Navigation />
                {isAuthenticated && <UserMenu />}
            </div>
        )
    }
}

const MapStateToProps = (state) => ({
    isAuthenticated: ContactSelector.isAuthenticated(state),
    user: ContactSelector.getUser(state),
  });
  
  const MapDispatchToProps = {
    onGetUpdateUser: UserOperation.getUpdateCurrentUser,
  };

export default connect(MapStateToProps, MapDispatchToProps)(withTranslation(Header));
