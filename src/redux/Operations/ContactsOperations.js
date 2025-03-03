import TaskPhoneBook from "../TaskPhonebook";
import Axios from "axios";

const addContacts = (obj) => (dispatch) => {
  dispatch(TaskPhoneBook.addContactsRequest());
  Axios.post("/api/contacts", obj)
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

const getContact = (id) => (dispatch) => {
  dispatch(TaskPhoneBook.getContactRequest());
  Axios.get(`/api/contacts/${id}`)
    .then((response) => dispatch(TaskPhoneBook.getContactSuccess(response.data)))
    .catch((error) => dispatch(TaskPhoneBook.getContactError()));
};

const removeContact = (id) => (dispatch) => {
  dispatch(TaskPhoneBook.removeContactsRequest());
  Axios.delete(`/api/contacts/${id}`)
    .then(() => dispatch(TaskPhoneBook.removeContactsSuccess(id)))
    .then(() => dispatch(fetchContacts()))
    .catch((error) => dispatch(TaskPhoneBook.removeContactsError()));
};

const changePhotoContact = (file, id) => (dispatch) => {
  
  const formData = new FormData();

  formData.append("profile", file);

  dispatch(TaskPhoneBook.changePhotoContactRequest());
  Axios.post(`/api/contacts/${id}/upload-photo`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  })
    .then((response) => {
      dispatch(TaskPhoneBook.getContactSuccess(response.data));
    })
    .catch((error) =>
      dispatch(TaskPhoneBook.changePhotoContactError(error.message))
    );
};


export default {
  addContacts,
  fetchContacts,
  removeContact,
  getContact,
  changePhotoContact
};
