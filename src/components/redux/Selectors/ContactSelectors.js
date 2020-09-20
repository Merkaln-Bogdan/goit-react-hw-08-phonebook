import { createSelector } from "@reduxjs/toolkit";
const isAuthenticated = (state) => state.auth.token;
const getActions = (state) => state.actions.item;
const getStatusLogIn = (state) => state.actions.loginUser;
const getFilter = (state) => state.actions.filter;
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
  getFilter,
  getStatusLogIn,
  visibleContacts,
};
