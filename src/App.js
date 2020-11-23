import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import Contacts from "./components/Contacts";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  addContact = (e) => {
    e.preventDefault();
    const item = {
      id: uuid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState((prevState) => ({ contacts: [...prevState.contacts, item] }));
    this.setState({ name: "" });
    this.setState({ number: "" });
  };

  handleChangeName = (name) => {
    this.setState({ name });
  };

  handleChangeNumber = (number) => {
    this.setState({ number });
  };

  handleFindContact = (filter) => {
    this.setState({ filter });
  };

  getFiteredContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  render() {
    const { name, number, filter } = this.state;
    const visibleContact = this.getFiteredContact();
    return (
      <>
        <section>
          <h2>Phonebook</h2>
          <form onSubmit={this.addContact}>
            <label>
              Name
              <input
                type="text"
                placeholder="Name Surname"
                value={name}
                onChange={(e) => this.handleChangeName(e.target.value)}
              />
            </label>
            <label>
              Number
              <input
                type="number"
                placeholder="Phone"
                value={number}
                onChange={(e) => this.handleChangeNumber(e.target.value)}
              />
            </label>
            <button type="submit" onSubmit={this.addContact}>
              Add Contact
            </button>
          </form>
        </section>
        <section>
          <h2>Contacts</h2>
          <label>
            Find Contacts
            <input
              type="text"
              placeholder="name"
              value={filter}
              onChange={(e) => this.handleFindContact(e.target.value)}
            />
          </label>
          <ul>
            <Contacts names={visibleContact} />
          </ul>
        </section>
      </>
    );
  }
}

export default App;
