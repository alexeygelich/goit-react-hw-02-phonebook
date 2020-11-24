import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactItem.module.css";

const ContactItem = ({ el, handleDelete }) => {
  const { name, number, id } = el;
  return (
    <li className={styles.listItem}>
      {name}: {number}{" "}
      <button className={styles.button} type="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  el: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactItem;
