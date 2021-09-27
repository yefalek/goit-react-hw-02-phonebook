import React, { Component } from "react";
import Form from "./components/ContactForm/Form";
import ContactsList from "./components/ContactsList/ContsctsList";
import "./App.css";

class App extends Component {
  state = {
    contacts: [],
  };

  handleAddContact = (newContact) =>
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));

  handleCheckUniqueContact = (name) => {
    const { contacts } = this.state;

    const isExistContact = !!contacts.find((contact) => contact.name === name);

    isExistContact && alert("Contact is already exist");

    return !isExistContact;
  };

  handleRemoveContact = (id) =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));

  render() {
    const { contacts } = this.state;
    return (
      <>
        <h2>Form Contact</h2>
        <Form
          onAdd={this.handleAddContact}
          onCheckUnique={this.handleCheckUniqueContact}
        />
        <ContactsList contacts={contacts} onRemove={this.handleRemoveContact} />
      </>
    );
  }
}

export default App;
