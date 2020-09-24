import React from "react";
import style from "./HomePage.module.css";
export const Home = () => (
  <div>
    <h2 className={style.TitleHello}>Здравствуйте!</h2>
    <p className={style.Description}>
      Здесь вы можете создать свою телефоную книгу, вести запись своих
      контактных номеров. Также вы с легкостью сможете найти любой номер если их
      станет очень много. Просто ввести имя в поисковой строке
    </p>
  </div>
);
