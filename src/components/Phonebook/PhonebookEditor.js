import React, { Component } from "react";
import style from "../Phonebook/PhoneBook.module.css";
import alertSlideTransition from "../../stylesTransition/AlertTransition.module.css";
import { connect } from "react-redux";
import ContactsOperations from "../redux/Operations/ContactsOperations";
import ContactSelector from "../redux/Selectors/ContactSelectors";
import AlertWindow from "../AlertWindow/AlertWindow";
import { CSSTransition } from "react-transition-group";
import UserOperation from "../redux/Operations/UserOperation";

class PhonebookEditor extends Component {
  state = { name: "", number: "", alertName: null };

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.onGetUser();
      this.props.onFetchContacts();
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    const { addContacts, contacts } = this.props;

    e.preventDefault();
    if (
      contacts.find(
        (element) =>
          element.name.toLowerCase() === this.state.name.toLowerCase()
      )
    ) {
      this.setState({
        alertName: true,
      });
      return setTimeout(() => {
        this.setState({ alertName: null });
      }, 3000);
    }
    if (this.state.name === "" || this.state.number === "") {
      alert("Введите имя и номер!");
    } else {
      addContacts(this.state.name, this.state.number);
      this.setState({ name: "", number: "" });
    }
  };
  render() {
    const { name, number } = this.state;
    return (
      <>
        <div>
          <form className={style.form} onSubmit={this.handleSubmit}>
            <label>
              Имя
              <input
                className={style.inputField}
                type="text"
                value={name}
                onChange={this.handleChange}
                name="name"
              />
            </label>
            <label>
              Номер
              <input
                className={style.inputField}
                type="text"
                value={number}
                onChange={this.handleChange}
                name="number"
              />
            </label>

            <button className={style.buttonAdd} type="submit">
              Добавить контакт
            </button>
          </form>
          <div></div>
        </div>
        <CSSTransition
          in={this.state.alertName}
          timeout={250}
          classNames={alertSlideTransition}
          unmountOnExit
        >
          <AlertWindow />
        </CSSTransition>
      </>
    );
  }
}
const MapStateToProps = (state) => ({
  contacts: ContactSelector.visibleContacts(state),
  contactsState: ContactSelector.getContacts(state),
  isAuthenticated: ContactSelector.isAuthenticated(state),
});

const MapDispatchToProps = {
  addContacts: ContactsOperations.addContacts,
  onFetchContacts: ContactsOperations.fetchContacts,
  onGetUser: UserOperation.getUser,
};
export default connect(MapStateToProps, MapDispatchToProps)(PhonebookEditor);