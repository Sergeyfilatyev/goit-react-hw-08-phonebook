import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';
import { Filter } from './Filter/Filter';
import s from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectIsLoading } from 'redux/contacts/contacts-selectors';

export default function App() {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);
  return (
    <div className={s.box}>
      {isLoading && <h1>Loading...</h1>}
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h1 className={s.title}>Contacts</h1>
      <Filter />
      <ContactList />
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
