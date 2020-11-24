import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ value, onChange }) => (
  <label className={styles.label}>
    Find Contacts
    <input type="text" placeholder="name" value={value} onChange={(e) => onChange(e.target.value)} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Filter.defaultProps = {
  // bla: 'test',
};

export default Filter;
