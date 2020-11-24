import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import FormAddContacts from "./components/FormAddContacts";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (e, name, number) => {
    e.preventDefault();
    let isAdded = false;
    this.state.contacts.forEach((el) => {
      if (el.name === name) {
        alert(`${name} is already in contacts`);
        isAdded = true;
      }
    });
    if (isAdded) {
      return;
    }
    const item = {
      id: uuid(),
      name: name,
      number: number,
    };
    this.setState((prevState) => ({ contacts: [...prevState.contacts, item] }));
    this.setState({ name: "" });
    this.setState({ number: "" });
  };

  handleChangeFilter = ({ value }) => {
    this.setState((prevState) => {
      return {
        filter: value,
      };
    });
  };

  handleFindContact = (filter) => {
    this.setState({ filter });
  };

  getFiteredContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  handleDelete = (id) => {
    return this.setState((prevState) => ({ contacts: prevState.contacts.filter((contact) => contact.id !== id) }));
  };

  render() {
    const { filter } = this.state;
    const visibleContact = this.getFiteredContact();
    return (
      <>
        <section>
          <h2>Phonebook</h2>
          <FormAddContacts addContact={this.addContact} />
        </section>
        <section>
          <h2>Contacts</h2>
          {this.state.contacts.length > 1 ? <Filter value={filter} onChange={this.handleFindContact} /> : ""}
          <ContactList visibleContact={visibleContact} handleDelete={this.handleDelete} />
        </section>
      </>
    );
  }
}

export default App;
