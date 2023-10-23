import { combineReducers } from "redux";
import TaskPhonebook from "../TaskPhonebook";
import { createReducer } from "@reduxjs/toolkit";

const initialUserState = {
  firstName: "",
  lastName: "",
  profession: "",
  image: "",
  city: "",
  email: "",
  gender: ""
};

const contact = createReducer(initialUserState, {
  [TaskPhonebook.getContactSuccess]: (_, action) => action.payload,
});

export default combineReducers({ contact });