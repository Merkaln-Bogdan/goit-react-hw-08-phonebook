import { combineReducers } from "redux";
import TaskPhonebook from "../TaskPhonebook";
import { createReducer } from "@reduxjs/toolkit";
const initialUserState = {
  name: null,
  email: null,
};
const user = createReducer(initialUserState, {
  [TaskPhonebook.registersSuccess]: (_, { payload }) => payload.user,
  [TaskPhonebook.loginSuccess]: (_, { payload }) => payload,
  [TaskPhonebook.getCurrentUserSuccess]: (_, { payload }) => payload,
  [TaskPhonebook.logoutSuccess]: () => initialUserState,
});
const token = createReducer(null, {
  [TaskPhonebook.registersSuccess]: (_, { payload }) => payload.token,
  [TaskPhonebook.loginSuccess]: (_, { payload }) => payload.token,
  [TaskPhonebook.logoutSuccess]: () => null,
});
const error = createReducer(null, {
  [TaskPhonebook.registerError]: (_, { payload }) => payload,
  [TaskPhonebook.loginError]: (_, { payload }) => payload,
  [TaskPhonebook.logoutError]: (_, { payload }) => payload,
  [TaskPhonebook.getCurrentUserError]: (_, { payload }) => payload,
});
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
      return state;
  }
};

export default combineReducers({ item, filter, user, token, error });
