import { Component } from 'react';
import userContacts from '../data/contacts.json';
import ContactForm from './contactForm';
import ContactList from './contactList';
import Filter from './filter';

export class App extends Component {
  state = {
    contacts: userContacts,
    filter: '',
  };

  addContacts = data => {
    const nameUser = this.state.contacts.map(({ name }) => name);
    if (nameUser.includes(data.name)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };

  filterChange = event => {
    this.setState({ filter: event.target.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContacts={this.addContacts} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onfilterChange={this.filterChange} />
        <ContactList
          data={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
