import { createSelector } from "@reduxjs/toolkit";
const isAuthenticated = (state) => state.auth.token;
const getUserName = (state) => state.auth.user.name;
const getContacts = (state) => state.contacts.item;
const getCurrentContact = (state) => state.contact.contact;
const getStatusLogIn = (state) => state.auth.loginUser;
const getAvatar = (state) => state.auth.user.avatarURL;
const getFilter = (state) => state.contacts.filter;
const getLoader = (state) => state.auth.loader;
const getError = (state) => state.auth.error;

const visibleContacts = createSelector(
  [getContacts, getFilter],
  (actions, filter) => {
    return actions.filter((contact) =>
      contact.firstName.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export default {
  isAuthenticated,
  getContacts,
  getCurrentContact,
  getAvatar,
  getUserName,
  getFilter,
  getStatusLogIn,
  visibleContacts,
  getLoader,
  getError
};
