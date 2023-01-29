import { ContactList } from 'components/ContactList';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';

export const ContactsPage = () => {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};
