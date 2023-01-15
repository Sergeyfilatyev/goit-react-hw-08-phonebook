import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import s from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
export default function App() {
  axios.defaults.baseURL = 'https://63c40c4aa9085635753089ee.mockapi.io/';
  const fetchContacts = () => axios('contacts').then(r => console.log(r.data));
  fetchContacts();
  return (
    <div className={s.box}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h1 className={s.title}>Contacts</h1>
      <Filter />
      <ContactList />
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
