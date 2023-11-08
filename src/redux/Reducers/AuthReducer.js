import { combineReducers } from "redux";
import TaskPhonebook from "../TaskPhonebook";
import { createReducer } from "@reduxjs/toolkit";

const initialUserState = {
  name: null,
  email: null,
  subscription: null,
  avatarURL: null,   
};

const loading = false;

const user = createReducer(initialUserState, {
  [TaskPhonebook.registersSuccess]: (_, { payload }) => payload.user,
  [TaskPhonebook.loginSuccess]: (_, { payload }) => payload.user,
  [TaskPhonebook.getCurrentUserSuccess]: (_, { payload }) => payload,
  [TaskPhonebook.logoutSuccess]: () => initialUserState,
});
const token = createReducer(null, {
  [TaskPhonebook.registersSuccess]: (_, { payload }) => payload.token,
  [TaskPhonebook.loginSuccess]: (_, { payload }) => payload.token,
  [TaskPhonebook.logoutSuccess]: () => null,
});
const error = createReducer(null, {
  [TaskPhonebook.registersError]: (_, { payload }) => payload,
  [TaskPhonebook.loginError]: (_, { payload }) => payload,
  [TaskPhonebook.logoutError]: (_, { payload }) => payload,
  [TaskPhonebook.getCurrentUserError]: (_, { payload }) => payload,
});

const loader = createReducer(loading, {
  [TaskPhonebook.registersRequest]: () => true,
  [TaskPhonebook.loginRequest]: () => true,
  [TaskPhonebook.getCurrentUserSuccess]: () => false,
  [TaskPhonebook.getCurrentUserError]: () => false,
  [TaskPhonebook.registersError]: () => false,
});

export default combineReducers({ user, token, error, loader });
