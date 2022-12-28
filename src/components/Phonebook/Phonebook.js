import React from "react";
import style from "./PhoneBook.module.css";
import PhonebookEditor from "./PhonebookEditor";
import Filter from "../Filter/Filter";
import PhonebookListItem from "../PhonebookListItem/PhoneBookListItem";
import slideTransition from "../../stylesTransition/PhonebookListSlide.module.css";
import PhoneFilter from "../../stylesTransition/PhoneFilter.module.css";
import TitleSlideTransition from "../../stylesTransition/TitleSlideTransition.module.css";
import ContactSelector from "../redux/Selectors/ContactSelectors";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ContactOperations from "../redux/Operations/ContactsOperations";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Phonebook({ contacts, onRemovePersonData }) {
  return (
    <>
      <div className={style.Wrapper}>
        <CSSTransition
          in
          appear
          timeout={1000}
          classNames={TitleSlideTransition}
          unmountOnExit
        >
          <h1 className={style.title}>Phonebook</h1>
        </CSSTransition>
      </div>
      <div className={style.phoneList}>
        <h2 className={style.TitleContacts}>Контакты</h2>

        <PhonebookEditor />
        {contacts.length > 0 ? (
          <CSSTransition
            in={contacts.length > 1}
            timeout={250}
            classNames={PhoneFilter}
            unmountOnExit
          >
            <Filter />
          </CSSTransition>
        ) : (
          <h2 className={style.TitleContacts}>Нет контактов</h2>
        )}
        <TransitionGroup component="ul" className={style.contactList}>
          {contacts.map((contact) => (
            <CSSTransition
              key={contact._id}
              timeout={300}
              classNames={slideTransition}
            >
              {!contacts ? (
                <>Loading</>
              ) : (
                <PhonebookListItem
                  key={contact._id}
                  name={contact.name}
                  number={contact.number}
                  onRemovePersonData={() => onRemovePersonData(contact._id)}
                />
              )}
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </>
  );
}
const MapStateToProps = (state) => ({
  contacts: ContactSelector.visibleContacts(state),
});
const MapDispatchToProps = {
  onRemovePersonData: ContactOperations.removeContact,
};
export default connect(MapStateToProps, MapDispatchToProps)(Phonebook);

Phonebook.propTypes = {
  contacts: PropTypes.array,
  onRemovePersonData: PropTypes.func,
};
