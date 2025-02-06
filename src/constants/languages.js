import React from "react"
import {RuFlag, UaFlag, UkFlag} from "../assets/svg/flags"

export const LANGUAGES = {
  ua: { label: <UaFlag/>, value: "ua" , name: "Українська"},
  ru: { label: <RuFlag/>, value: "ru", name: "Русский"},
  en: { label:  <UkFlag/>, value: "en", name: "English"}

}

const rus = {
  home: "Главная",
  login: "Войти",
  signup: " Авторизация",
  phonebook: "Телефонная книга",
  search: "Поиск номера",
  addContact: "Добавить контакт",
  name: "Имя",
  surname: "Фамилия",
  number: "Номер телефона",
  city: "Город",
  profession: "Профессия",
  gender: "Пол",
  male: "Мужской",
  female: "Женский",
  contacts: "Контакты",
  noContacts: "Нет контактов",
  phoneNumber: "Номер тел.",
  hello: "Здравствуйте!",
  password: "Пароль",
  hereCreateNumbers: "Здесь вы можете создать свою телефонную книгу и вести учет контактных номеров",
  youCanFindNumber: "Также вы можете с легкостью найти любой номер, если их станет слишком много",
  justEnterData: "Просто введите данные в поисковое поле",
  signIn: "Войти в аккаунт",
  signUp: "Регистрация"
}

const ukr = {
  home: "Головна",
  login: "Увійти",
  signup: "Авторизація",
  phonebook: "Телефонна книга",
  search: "Знайти номер",
  addContact: "Додати контакт",
  name: "Ім'я",
  surname: "Прізвище",
  number: "Номер телефону",
  city: "Місто",
  profession: "Професія",
  gender: "Стать",
  male: "Чоловіча",
  female: "Жіноча",
  contacts: "Контакти",
  noContacts: "Немає контактів",
  phoneNumber: "Номер тел.",
  password: "Пароль",
  hello: "Вітаю!",
  hereCreateNumbers: "Тут ви можете створити свою телефону книгу та вести облік контакних номерів",
  youCanFindNumber: "Також ви можете з легкістю знайти будь який номер якщо їх стане надто багато",
  justEnterData: "Просто введіть дані в пошукове поле",
  signIn: "Увійти в акаунт",
  signUp: "Регістрація" 
}

const eng = {
  home: "Home",
  login: "Log in",
  signup: "Authorization",
  phonebook: "Phonebook",
  search: "Search",
  addContact: "Add contact",
  name: "First name",
  surname: "Last name",
  number: "Phone number",
  city: "City",
  profession: "Profession",
  gender: "Gender",
  contacts: "Contacts",
  male: "Male",
  female: "Female",
  noContacts: "No contacts",
  phoneNumber: "Phone number",
  password: "Password",
  hello: "Hello!",
  hereCreateNumbers: "Here you can create your phone book and keep track of contact numbers.",
  youCanFindNumber: "Also, you can easily find any number if there are too many of them",
  justEnterData: "Just enter data in the search field",
  signIn: "Sign in to the account",
  signUp: "Sign Up" 
}

export {rus, ukr, eng}