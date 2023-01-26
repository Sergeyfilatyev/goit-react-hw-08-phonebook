import { ContactList } from 'components/ContactList';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';

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
