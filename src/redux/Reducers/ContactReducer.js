import { combineReducers } from "redux";
import TaskPhonebook from "../TaskPhonebook";
import { createReducer } from "@reduxjs/toolkit";

const initialUserState = {
  id: null,
  firstName: "",
  lastName: "",
  number: "",
  profession: "",
  image: "",
  city: "",
  email: "",
  gender: "",
  male: null
};

const contact = createReducer(initialUserState, {
  [TaskPhonebook.getContactSuccess]: (_, action) => action.payload,
});

export default combineReducers({ contact });