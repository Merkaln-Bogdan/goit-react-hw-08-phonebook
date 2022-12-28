import TaskPhoneBook from "../TaskPhonebook";
import Axios from "axios";
Axios.defaults.baseURL = "http://localhost:4040";
// Axios.defaults.baseURL = "https://phonebook-api-v1.onrender.com";

const Token = (token) => {
  Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const tokenUnset = () => {
  Axios.defaults.headers.common.Authorization = "";
};

const registration = (user) => (dispatch) => {
  dispatch(TaskPhoneBook.registersRequest());
  Axios.post("/auth/register", user)
    .then((response) => {
      Token(response.data.token);
      dispatch(TaskPhoneBook.registersSuccess({ ...response.data }));
    })
    .catch((error) => dispatch(TaskPhoneBook.registersError(error.message)));
};

const loginUser = (user) => (dispatch) => {
  dispatch(TaskPhoneBook.loginRequest());
  Axios.post("/auth/signin", user)
    .then((response) => {
      Token(response.data.token);
      dispatch(TaskPhoneBook.loginSuccess({ ...response.data }));
    })
    .catch((error) => dispatch(TaskPhoneBook.loginError(error.message)));
};

const getUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedtoken },
  } = getState();
  if (!persistedtoken) {
    return;
  }
  Token(persistedtoken);
  dispatch(TaskPhoneBook.getCurrentUserRequest());

  Axios.get("/auth/current")
    .then(({ data }) => {
      dispatch(TaskPhoneBook.getCurrentUserSuccess(data));
    })
    .catch((error) =>
      dispatch(TaskPhoneBook.getCurrentUserError(error.message))
    );
};

const logOutUser = () => (dispatch) => {
  dispatch(TaskPhoneBook.logoutRequest());
  Axios.patch("/auth/logout")
    .then(() => {
      tokenUnset();
      dispatch(TaskPhoneBook.logoutSuccess());
    })
    .catch((error) => dispatch(TaskPhoneBook.logoutError(error.message)));
};

const createUserAvatar = (file) => (dispatch) => {
  const formData = new FormData();

  formData.append("avatar", file);

  dispatch(TaskPhoneBook.changeUserAvatarRequest());
  Axios.patch("/auth/avatar", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then((response) => {
      dispatch(TaskPhoneBook.changeUserAvatarSuccess(response.data));
    })
    .catch((error) =>
      dispatch(TaskPhoneBook.changeUserAvatarError(error.message))
    );
};

const addContacts = (name, number) => (dispatch) => {
  dispatch(TaskPhoneBook.addContactsRequest());
  Axios.post("/api/contacts", {
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
  Axios.get("/api/contacts")
    .then((response) =>
      dispatch(TaskPhoneBook.fetchContactsSuccess(response.data))
    )
    .catch((error) => dispatch(TaskPhoneBook.fetchContactsError()));
};
const removeContact = (id) => (dispatch) => {
  dispatch(TaskPhoneBook.removeContactsRequest());
  Axios.delete(`/api/contacts/${id}`)
    .then(() => dispatch(TaskPhoneBook.removeContactsSuccess(id)))
    .then(() => dispatch(fetchContacts()))
    .catch((error) => dispatch(TaskPhoneBook.removeContactsError()));
};

export default {
  registration,
  loginUser,
  getUser,
  logOutUser,
  addContacts,
  fetchContacts,
  removeContact,
  createUserAvatar,
};
