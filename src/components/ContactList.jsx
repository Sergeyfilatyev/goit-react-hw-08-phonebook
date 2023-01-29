import { Contact } from 'components/Contact';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { useEffect } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
export function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const visibleContacts = filterContacts();
  return (
    <SimpleGrid
      p="10px"
      w="100%"
      maxW="1200px"
      spacing="10px"
      columns={[1, 1, 2, 2, 3]}
      justifyContent="center"
    >
      {visibleContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </SimpleGrid>
  );
}
