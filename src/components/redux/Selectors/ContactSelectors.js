import { createSelector } from "@reduxjs/toolkit";
const isAuthenticated = (state) => state.auth.token;
const getUserName = (state) => state.auth.user.name;
const getActions = (state) => state.contacts.item;
const getStatusLogIn = (state) => state.auth.loginUser;
const getFilter = (state) => state.contacts.filter;
const visibleContacts = createSelector(
  [getActions, getFilter],
  (actions, filter) => {
    return actions.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export default {
  isAuthenticated,
  getActions,
  getUserName,
  getFilter,
  getStatusLogIn,
  visibleContacts,
};
