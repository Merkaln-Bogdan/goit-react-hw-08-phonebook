import TaskPhoneBook from "../TaskPhonebook";
import Axios from "axios";

// Axios.defaults.baseURL = "https://phonebook-api-v2.onrender.com";
Axios.defaults.baseURL = "http://127.0.0.1:4040";


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
      .catch((error) => {
        dispatch(TaskPhoneBook.loginError(error.message))
      });  
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
    .then((res) => {
      dispatch(TaskPhoneBook.getCurrentUserSuccess(res.data));
    })
    .catch((error) => {
        tokenUnset();
        dispatch(TaskPhoneBook.logoutSuccess());
        dispatch(TaskPhoneBook.getCurrentUserError(error.message))
      }
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
    }
  })
    .then((response) => {
      dispatch(TaskPhoneBook.changeUserAvatarSuccess(response.data));
    })
    .catch((error) =>
      dispatch(TaskPhoneBook.changeUserAvatarError(error.message))
    );
};

const getUpdateCurrentUser = (user) => (dispatch) => {
  dispatch(TaskPhoneBook.getCurrentUserRequest());
  Axios.patch("/auth/update", user)
      .then((response) => {
        dispatch(TaskPhoneBook.getCurrentUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(TaskPhoneBook.getCurrentUserError(error.message))
      });  
};

export default {
  registration,
  loginUser,
  getUser,
  logOutUser,
  createUserAvatar,
  getUpdateCurrentUser
};
