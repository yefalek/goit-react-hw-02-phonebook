import React, { Component } from "react";
import Form from "./components/ContactForm/Form";
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

  render() {
    return (
      <>
        <h2>Form Contact</h2>
        <Form onAdd={this.handleAddContact} />
      </>
    );
  }
}

export default App;
