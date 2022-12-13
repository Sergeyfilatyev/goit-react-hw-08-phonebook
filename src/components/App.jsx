import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import s from './App.module.css';
import { nanoid } from 'nanoid';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }
  addContact = data => {
    const newContact = { ...data, id: nanoid() };
    const findContact = this.state.contacts.find(
      contact => contact.name === newContact.name
    );
    if (findContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  changeFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };
  filterContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  deleteContact = (id, name) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    return (
      <div className={s.box}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h1 className={s.title}>Contacts</h1>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.filterContacts()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
export default App;
