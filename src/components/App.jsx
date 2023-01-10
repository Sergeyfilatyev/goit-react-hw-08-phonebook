import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import s from './App.module.css';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';

export default function App() {
  const contactss = useSelector(getContacts);
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // const addContact = (name, number) => {
  //   const findContact = contacts.find(contact => contact.name === name);
  //   if (findContact) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }
  //   const newContact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };
  //   setContacts(prevContacts => [...prevContacts, newContact]);
  // };

  const changeFilter = ({ target }) => {
    setFilter(target.value);
  };
  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };
  return (
    <div className={s.box}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h1 className={s.title}>Contacts</h1>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={contactss} deleteContact={deleteContact} />
    </div>
  );
}

// class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };
//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }
//   componentDidUpdate(_, prevState) {
//     const { contacts } = this.state;
//     if (contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(contacts));
//     }
//   }
//   addContact = data => {
//     const newContact = { ...data, id: nanoid() };
//     const findContact = this.state.contacts.find(
//       contact => contact.name === newContact.name
//     );
//     if (findContact) {
//       alert(`${newContact.name} is already in contacts`);
//       return;
//     }

//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, newContact],
//     }));
//   };
//   changeFilter = ({ target }) => {
//     this.setState({ filter: target.value });
//   };
//   filterContacts = () => {
//     const { filter, contacts } = this.state;
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };
//   deleteContact = (id, name) => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };
//   render() {
//     return (
//       <div className={s.box}>
//         <h1 className={s.title}>Phonebook</h1>
//         <ContactForm addContact={this.addContact} />
//         <h1 className={s.title}>Contacts</h1>
//         <Filter value={this.state.filter} onChange={this.changeFilter} />
//         <ContactList
//           contacts={this.filterContacts()}
//           deleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }
// export default App;
