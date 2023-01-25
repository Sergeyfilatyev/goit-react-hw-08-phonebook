import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';
import { CirclesWithBar } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectToken } from 'redux/auth/auth-selectors';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { ContactsPage } from 'pages/ContactsPage';
export default function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const token = useSelector(selectToken);

  return (
    // <div className={s.box}>
    //   <h1 className={s.title}>Phonebook</h1>
    //   <ContactForm />
    //   <h1 className={s.title}>Contacts</h1>
    //   <Filter />
    //   <ContactList />
    //   <ToastContainer position="top-center" autoClose={3000} />
    //   {isLoading && (
    //     <CirclesWithBar
    //       height="100"
    //       width="100"
    //       color="#46a845"
    //       wrapperClass={s.loader}
    //       visible={true}
    //       outerCircleColor="#206d2a"
    //       ariaLabel="circles-with-bar-loading"
    //     />
    //   )}
    //   {error && <p className={s.error}>{error.message}</p>}
    //   <RegisterForm />
    //   <LoginForm />
    // </div>
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}
