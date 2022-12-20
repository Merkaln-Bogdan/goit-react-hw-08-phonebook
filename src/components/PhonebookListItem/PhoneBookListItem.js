import React from "react";

import style from "./PhonebookListItem.module.css";
import PropTypes from "prop-types";

const PhonebookListItem = ({ _id, name, number, onRemovePersonData }) => (
  <li key={_id} className={style.listItem}>
    <span className={style.dataPerson}>{name}:</span>
    <span className={style.dataPerson}>{number}</span>
    <button className={style.buttonRemove} onClick={onRemovePersonData}>
      ✕
    </button>
  </li>
);

export default PhonebookListItem;

PhonebookListItem.propTypes = {
  id: PropTypes.string,
  onRemovePersonData: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
};
