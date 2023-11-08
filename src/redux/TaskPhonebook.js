import { createAction } from "@reduxjs/toolkit";
const registersRequest = createAction("user/registerRequest");
const registersSuccess = createAction("user/registerSuccess");
const registersError = createAction("user/registerError");

const loginRequest = createAction("user/loginRequest");
const loginSuccess = createAction("user/loginSuccess");
const loginError = createAction("user/loginError");

const logoutRequest = createAction("user/outRequest");
const logoutSuccess = createAction("user/outSuccess");
const logoutError = createAction("user/outError");

const getCurrentUserRequest = createAction("user/getCurrentUserRequest");
const getCurrentUserSuccess = createAction("user/getCurrentUserSuccess");
const getCurrentUserError = createAction("user/getCurrentUserError");

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
