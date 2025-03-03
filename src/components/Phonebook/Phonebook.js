import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import withTranslation from "../../hook"

import style from "./PhoneBook.module.css";
import PhonebookEditor from "./PhonebookEditor/PhonebookEditor";
import Filter from "../Filter/Filter";
import PhonebookListItem from "../PhonebookListItem/PhoneBookListItem";
import slideTransition from "../../stylesTransition/PhonebookListSlide.module.css";
import PhoneFilter from "../../stylesTransition/PhoneFilter.module.css";
import titleSlideTransition from "../../stylesTransition/TitleSlideTransition.module.css";
import ContactSelector from "../../redux/Selectors/Selectors";
import ContactOperations from "../../redux/Operations/ContactsOperations";

function Phonebook({ contacts, value, onRemovePersonData, transationHook }) {

  return (
    <div className={style.wrapper}>
        <CSSTransition
          in
          appear
          timeout={1000}
          classNames={titleSlideTransition}
          unmountOnExit
        >
          <h1 className={style.title}>Phonebook</h1>
        </CSSTransition>

      <div className={style.phoneList}>
        <h2 className={style.titleContacts}>{transationHook("contacts")}</h2>

        <PhonebookEditor />
        {contacts.length > 0 || value.length > 0? (
          <CSSTransition
            in={value.length > 1 || contacts.length > 1}
            timeout={250}
            classNames={PhoneFilter}
            unmountOnExit
          >
            <Filter />
          </CSSTransition>
        ) : (
          <h2 className={style.TitleContacts}>{transationHook("noContacts")}</h2>
        )} 
        <div className={style.ContactListWrapper}>
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
                    contact={contact}
                    onRemovePersonData={() => onRemovePersonData(contact._id)}
                  />
                )}
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
}

const MapStateToProps = (state) => ({
  contacts: ContactSelector.visibleContacts(state),
  value: state.contacts.filter,
});

const MapDispatchToProps = {
  onRemovePersonData: ContactOperations.removeContact,
};
export default connect(MapStateToProps, MapDispatchToProps)(withTranslation(Phonebook));

Phonebook.propTypes = {
  contacts: PropTypes.array,
  onRemovePersonData: PropTypes.func,
};
