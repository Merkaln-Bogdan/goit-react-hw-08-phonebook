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

const getContactRequest = createAction("contacts/geContactRequest");
const getContactSuccess = createAction("contacts/geContactSuccess");
const getContactError = createAction("contacts/geContactError");

const changeUserAvatarRequest = createAction("contacts/changeUserAvatarRequest");
const changeUserAvatarSuccess = createAction("contacts/changeUserAvatarSuccess");
const changeUserAvatarError = createAction("contacts/changeUserAvatarError");

const changePhotoContactRequest = createAction("contacts/changePhotoContactRequest");
const changePhotoContactSuccess = createAction("contacts/changePhotoContactSuccess");
const changePhotoContactError = createAction("contacts/changePhotoContactError");

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
  changeUserAvatarRequest,
  changeUserAvatarSuccess,
  changeUserAvatarError,
  changeFilter,
  getContactRequest,
  getContactSuccess,
  getContactError,
  changePhotoContactRequest,
  changePhotoContactSuccess,
  changePhotoContactError
};
