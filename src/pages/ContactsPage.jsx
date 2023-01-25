import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';

export const ContactsPage = () => {
  return (
    <>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
      {/* {error && <p>{error.message}</p>} */}
    </>
  );
};
