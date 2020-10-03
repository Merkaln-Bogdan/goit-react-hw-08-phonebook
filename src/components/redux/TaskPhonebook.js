import { createAction } from "@reduxjs/toolkit";
const registersRequest = createAction("contacts/registerRequest");
const registersSuccess = createAction("contacts/registerSuccess");
const registersError = createAction("contacts/registerError");

const loginRequest = createAction("contacts/loginRequest");
const loginSuccess = createAction("contacts/loginSuccess");
const loginError = createAction("contacts/loginError");

const logoutRequest = createAction("contacts/outRequest");
const logoutSuccess = createAction("contacts/outSuccess");
const logoutError = createAction("contacts/outError");

const getCurrentUserRequest = createAction("contacts/getCurrentUserRequest");
const getCurrentUserSuccess = createAction("contacts/getCurrentUserSuccess");
const getCurrentUserError = createAction("contacts/getCurrentUserError");

const addContactsRequest = createAction("contacts/addRequest");
const addContactsSuccess = createAction("contacts/addSuccess");
const addContactsError = createAction("contacts/addError");

const fetchContactsRequest = createAction("contacts/fetchRequest");
const fetchContactsSuccess = createAction("contacts/fetchSuccess");
const fetchContactsError = createAction("contacts/fetchError");

const removeContactsRequest = createAction("contacts/removeRequest");
const removeContactsSuccess = createAction("contacts/removeSuccess");
const removeContactsError = createAction("contacts/removeError");

const changeFilter = createAction("contacts/filter");

export default {
  registersRequest,
  registersSuccess,
  registersError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,
  changeFilter,
};
