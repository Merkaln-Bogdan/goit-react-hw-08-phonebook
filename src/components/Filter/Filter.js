import React from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import style from "./Filter.module.css";
import taskPhonebook from "../../redux/TaskPhonebook";
import PropTypes from "prop-types";

const Filter = ({ value, onChangeFilter }) => {
  const { t } = useTranslation();
  
  return (
    <div className={style.wrapperFilter}>
    <label className={style.labelMarkup}>
      {t("search")}
      <input
        className={style.filterField}
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </label>
  </div>
  )
};

const MapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const MapDispatchToProps = {
  onChangeFilter: taskPhonebook.changeFilter,
};

export default connect(MapStateToProps, MapDispatchToProps)(Filter);
Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
};
