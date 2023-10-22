import React from "react";
import style from "./HomePage.module.css";
export const Home = () => (
  <div className={style.Home}>
    <h2 className={style.TitleHello}>Вітаю!</h2>
    <p className={style.Description}>
      Тут ви можете створити свою телефону книгу та вести облік контакних номерів. Також ви можете з легкістю знайти будь який номер якщо їх стане надто багато. Просто введіть дані в пошукове поле
    </p>
    <p className={style.Description}>
      Here you can create your phone book and keep track of contact numbers. Also, you can easily find any number if there are too many of them. Just enter data in the search field
    </p>
  </div>
);
