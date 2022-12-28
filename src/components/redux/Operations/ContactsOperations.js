import TaskPhoneBook from "../TaskPhonebook";
import Axios from "axios";

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
  addContacts,
  fetchContacts,
  removeContact,
};
