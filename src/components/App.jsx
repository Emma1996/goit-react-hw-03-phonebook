import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
const CONTACTS_KEY = 'contacts';
class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };
  async componentDidMount() {
    const data = localStorage.getItem(CONTACTS_KEY);

    try {
      if (data) {
        this.setState({
          contacts: JSON.parse(data),
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState?.contacts.length !== this.state.contacts) {
      localStorage.setItem(CONTACTS_KEY, JSON.stringify(this.state.contacts));
    }
  }
  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };
  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };
  handleNumberChange = e => {
    this.setState({ number: e.target.value });
  };
  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, number, contacts } = this.state;

    if (name.trim() === '') {
      alert('Please enter a valid name.');
      return;
    }
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert('This contact already exists.');
      return;
    }
    const newContact = { id: nanoid(), name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  render() {
    const { name, contacts, number, filter } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: 30,
          color: '#010101',
          padding: 10,
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          onNameChange={this.handleNameChange}
          onNumberChange={this.handleNumberChange}
          onSubmit={this.handleSubmit}
          name={name}
          number={number}
        ></ContactForm>
        <h2>Contacts</h2>
        <Filter
          filter={filter}
          onFilterChange={this.handleFilterChange}
        ></Filter>
        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={this.handleDeleteContact}
        ></ContactList>
      </div>
    );
  }
}
export default App;
