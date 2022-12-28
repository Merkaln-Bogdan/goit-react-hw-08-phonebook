import { combineReducers } from "redux";
import TaskPhonebook from "../TaskPhonebook";
import { createReducer } from "@reduxjs/toolkit";

const onAddContact = (state, action) => [...state, action.payload];
const onRemoveContact = (state, action) =>
  state.filter((contact) => contact.id !== action.payload);

const item = createReducer([], {
  [TaskPhonebook.fetchContactsSuccess]: (state, action) => action.payload,
  [TaskPhonebook.addContactsSuccess]: onAddContact,
  [TaskPhonebook.removeContactsSuccess]: onRemoveContact,
});

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case TaskPhonebook.changeFilter.type:
      return payload;
    default:
      return (state = "");
  }
};

export default combineReducers({ item, filter });
