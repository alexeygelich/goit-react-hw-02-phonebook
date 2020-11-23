import React from "react";
import PropTypes from "prop-types";
//import { Test } from './Contacts.styles';

const Contacts = ({ names }) =>
  names.map(({ id, name, number }) => {
  return <li key={id}>{name}: {number}</li>;
  });

Contacts.propTypes = {
  // bla: PropTypes.string,
};

Contacts.defaultProps = {
  // bla: 'test',
};

export default Contacts;
