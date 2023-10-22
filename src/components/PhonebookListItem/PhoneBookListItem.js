import React from "react";
import { NavLink } from "react-router-dom";
import style from "./PhonebookListItem.module.css";
import PropTypes from "prop-types";

const PhonebookListItem = ({ contact, onRemovePersonData }) => {
  const {_id, firstName, lastName, number} = contact
  return(
    <li key={_id} className={style.listItem}>
    <NavLink to={`/api/contact/${_id}`} className={style.itemLink}>
      <span className={style.dataPerson}>{firstName} {lastName}:</span>
      <span className={style.dataPersonNumber}>{number}</span>
    </NavLink>
   
    <button className={style.buttonRemove} onClick={onRemovePersonData}>
      ✕
    </button>
  </li>
  )
}

export default PhonebookListItem;

PhonebookListItem.propTypes = {
  id: PropTypes.string,
  onRemovePersonData: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
};
