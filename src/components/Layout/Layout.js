import React from "react";
import style from "./Layout.module.css";

export const Layout = ({children}) => (
  <div className={style.Layout}>
    {children}
  </div>
);
