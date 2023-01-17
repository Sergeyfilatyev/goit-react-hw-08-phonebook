import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';
import { Filter } from './Filter/Filter';
import {
  selectError,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';
import { CirclesWithBar } from 'react-loader-spinner';
import s from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={s.box}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h1 className={s.title}>Contacts</h1>
      <Filter />
      <ContactList />
      <ToastContainer position="top-center" autoClose={3000} />
      {isLoading && (
        <CirclesWithBar
          height="100"
          width="100"
          color="#46a845"
          wrapperClass={s.loader}
          visible={true}
          outerCircleColor="#206d2a"
          ariaLabel="circles-with-bar-loading"
        />
      )}
      {error && <p className={s.error}>{error.message}</p>}
    </div>
  );
}
