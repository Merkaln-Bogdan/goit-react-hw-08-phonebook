import { combineReducers } from "redux";
import TaskPhonebook from "../TaskPhonebook";
import { createReducer } from "@reduxjs/toolkit";

const initialUserState = {
  firstName: "",
  lastName: "",
  proffesion: "",
  image: "",
  city: "",
  email: ""
};

const contact = createReducer(initialUserState, {
  [TaskPhonebook.getContactSuccess]: (_, action) => action.payload,
});

export default combineReducers({ contact });