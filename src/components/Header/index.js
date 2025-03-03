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
    state = {
        language: 'ua'
      };
   
    handleChangeLanguageApp = (e) => {
        const {value} = e;
      
        this.setState({language: value})
        localStorage.setItem("lang", value)
        i18n.changeLanguage(value)
        const {isAuthenticated, user} = this.props

        if(isAuthenticated) {
            this.props.onGetUpdateUser({...user, lang: value})
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.user !== prevProps.user) {
            i18n.changeLanguage(this.props.user.lang)
        }
      }

    render(){
        const {isAuthenticated, user, transationHook} = this.props;
        
        return (
            <div className={style.navigation}>
                <LanguageNav lang={user.lang || this.state.language} handleChangeLanguageApp={this.handleChangeLanguageApp}/>
            
                <Navigation transationHook={transationHook}/>
                {isAuthenticated && 
                    <UserMenu />
                }
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
