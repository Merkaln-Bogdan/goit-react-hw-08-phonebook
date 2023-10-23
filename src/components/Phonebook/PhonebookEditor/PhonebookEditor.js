import React, { Component } from "react";
import style from "../PhoneBook.module.css";
import alertSlideTransition from "../../../stylesTransition/AlertTransition.module.css";
import { connect } from "react-redux";
import ContactsOperations from "../../../redux/Operations/ContactsOperations";
import ContactSelector from "../../../redux/Selectors/ContactSelectors";
import AlertWindow from "../../AlertWindow/AlertWindow";
import { CSSTransition } from "react-transition-group";
import UserOperation from "../../../redux/Operations/UserOperation";

class PhonebookEditor extends Component {
  state = { 
      contact: {
        firstName: "", 
        lastName: "",
        number: "", 
        city: "",
        profession: "", 
        image: null, 
        email: "",
        gender: ""
      },

      alertName: false
  };

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.onGetUser();
      this.props.onFetchContacts();
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({ contact: {...prevState.contact, [name]: value}}));
  };
  handleSubmit = (e) => {
    const { addContacts, contacts } = this.props;

    e.preventDefault();
    if (
      contacts.find(
        (element) =>
          element.firstName.toLowerCase() === this.state.contact.firstName.toLowerCase()
      )
    ) {
      this.setState({
        alertName: true,
      });
      return setTimeout(() => {
        this.setState({ alertName: null });
      }, 3000);
    }
    if (this.state.firstName === "" || this.state.number === "" || this.state.lastName === "") {
      alert("Введіть дані! (Please enter data!)");
    } else {
      addContacts(this.state.contact);
      this.setState({ 
        contact: {
          firstName: "", 
          lastName: "",  
          number: "", 
          city: "", 
          profession: "", 
          email: "",
          gender: ""
        }});
    }
  };
  render() {
  
    const { firstName, lastName, number, city, profession, email, gender } = this.state.contact;
    return (
      <>
        <div>
          <form className={style.form} onSubmit={this.handleSubmit}>
            <label className={style.inputField}>
              Ім'я (First name)
              <input
                type="text"
                value={firstName}
                onChange={this.handleChange}
                name="firstName"
              />
            </label>
            <label  className={style.inputField}>
              Прізвище (Last name)
              <input
                type="text"
                value={lastName}
                onChange={this.handleChange}
                name="lastName"
              />
            </label>
            <label   className={style.inputField}>
              Номер (Phone number)
              <input
                type="text"
                value={number}
                onChange={this.handleChange}
                name="number"
              />
            </label>
            <label className={style.inputField}>
              Email
              <input
                type="text"
                value={email}
                onChange={this.handleChange}
                name="email"
              />
            </label>
            <label  className={style.inputField}>
              Місто (City)
              <input
                type="text"
                value={city}
                onChange={this.handleChange}
                name="city"
              />
            </label> 
            <label className={style.inputField}>
              Спеціальність (Profession)
              <input
            
                type="text"
                value={profession}
                onChange={this.handleChange}
                name="profession"
              />
            </label>
            <label className={style.inputField}>
              Стать (Gender)
              <input
            
                type="text"
                value={gender}
                onChange={this.handleChange}
                name="gender"
              />
            </label>

            <button className={style.buttonAdd} type="submit">
              Додати контакт (Add)
            </button>
          </form>
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
