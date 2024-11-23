import React from "react";
import withTranslation from "../../hook";
import style from "./HomePage.module.css";

const Home = ({transationHook}) => (
  <div className={style.Home}>
    <h2 className={style.TitleHello}>{transationHook("hello")}</h2>
    <p className={style.Description}>
      {transationHook("hereCreateNumbers")}
    </p>
    <p className={style.Description}>
      {transationHook("youCanFindNumber")}
    </p>
    <p className={style.Description}>
      {transationHook("justEnterData")}
    </p>
  </div>
);

export default (withTranslation(Home));