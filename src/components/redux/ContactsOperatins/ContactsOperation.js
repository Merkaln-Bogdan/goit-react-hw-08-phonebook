import TaskPhoneBook from "../TaskPhonebook";
import Axios from "axios";
Axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const Token = (token) =>
  (Axios.defaults.headers.common.Authorization = `Bearer ${token}`);
const tokenUnset = () => (Axios.defaults.headers.common.Authorization = "");

const registration = (user) => (dispatch) => {
  dispatch(TaskPhoneBook.registerRequest());
  Axios.post("/users/signup", user)
    .then((response) => {
      console.log(response);
      Token(response.data.token);
      dispatch(TaskPhoneBook.loginSuccess(true));
      dispatch(TaskPhoneBook.registersSuccess({ ...response.data }));
    })
    .catch((error) => dispatch(TaskPhoneBook.registerError(error.message)));
};

const loginUser = (user) => (dispatch) => {
  dispatch(TaskPhoneBook.loginRequest());
  Axios.post("/users/login", user)
    .then((response) => {
      console.log(response);
      Token(response.data.token);
      dispatch(TaskPhoneBook.loginSuccess(true));
      dispatch(TaskPhoneBook.loginSuccess({ ...response.data }));
    })
    .catch((error) => dispatch(TaskPhoneBook.loginError(error.message)));
};

const getUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedtoken },
  } = getState();
  if (!persistedtoken) {
    dispatch(TaskPhoneBook.loginSuccess(false));
    return;
  }
  Token(persistedtoken);
  dispatch(TaskPhoneBook.loginSuccess(true));
  dispatch(TaskPhoneBook.getCurrentUserRequest());

  Axios.get("/users/current")
    .then((response) => {
      console.log("response");
      dispatch(TaskPhoneBook.addContactsSuccess({ ...response.data }));
    })
    .catch((error) =>
      dispatch(TaskPhoneBook.getCurrentUserError(error.message))
    );
};

const logoutUser = () => (dispatch) => {
  dispatch(TaskPhoneBook.logoutRequest());
  Axios.post("/users/logout")
    .then(() => {
      tokenUnset();
      dispatch(TaskPhoneBook.loginSuccess(false));
      dispatch(TaskPhoneBook.logoutSuccess());
    })
    .catch((error) => dispatch(TaskPhoneBook.logoutError(error.message)));
};

const addContacts = (name, number) => (dispatch) => {
  dispatch(TaskPhoneBook.addContactsRequest());
  Axios.post("/contacts", {
    name,
    number,
  })
    .then((response) =>
      dispatch(TaskPhoneBook.addContactsSuccess(response.data))
    )
    .catch((error) => dispatch(TaskPhoneBook.addContactsError()));
};
const fetchContacts = () => (dispatch) => {
  dispatch(TaskPhoneBook.fetchContactsRequest());
  Axios.get("/contacts")
    .then((response) =>
      dispatch(TaskPhoneBook.fetchContactsSuccess(response.data))
    )
    .catch((error) => dispatch(TaskPhoneBook.fetchContactsError()));
};
const removeContact = (id) => (dispatch) => {
  dispatch(TaskPhoneBook.removeContactsRequest());
  Axios.delete(`/contacts/${id}`)
    .then(() => dispatch(TaskPhoneBook.removeContactsSuccess(id)))
    .catch((error) => dispatch(TaskPhoneBook.removeContactsError()));
};
export default {
  registration,
  loginUser,
  getUser,
  logoutUser,
  addContacts,
  fetchContacts,
  removeContact,
};
