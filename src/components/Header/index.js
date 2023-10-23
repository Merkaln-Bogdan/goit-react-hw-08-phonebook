import React from "react";
import style from "./index.module.css";

import Navigation from "../Navigation";
import UserMenu from "../UserMenu";

const Header = ({isAuthenticated}) => {
    return (
        <div className={style.Navigation}>
            <Navigation />
            {isAuthenticated && <UserMenu />}
        </div>
    )
}

export default Header