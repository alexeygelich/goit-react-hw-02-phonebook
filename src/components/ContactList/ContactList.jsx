import React from "react";
import PropTypes from "prop-types";
import ContactItem from "../ContactItem";

const ContactList = ({ visibleContact, handleDelete }) => (
  <ul>
    {visibleContact.map((el) => {
      return <ContactItem key={el.id} el={el} handleDelete={handleDelete} />;
    })}
  </ul>
);

ContactList.propTypes = {
  visibleContact: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
