import { useState } from 'react';
import { addContact } from 'redux/contacts/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { toast } from 'react-toastify';
import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
} from '@chakra-ui/react';
import { RxAvatar } from 'react-icons/rx';
import { BsTelephoneFill } from 'react-icons/bs';
export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      name,
      number,
    };
    const findContact = contacts.find(
      contact => contact.name === newContact.name
    );
    if (findContact) {
      toast.warning(`${newContact.name} is already in contacts`);
      return;
    }
    dispatch(addContact(newContact));
    reset();
  };
  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormControl
      width={['300px', '400px', '500px', '600px', '600px']}
      isRequired
      as="form"
      display="flex"
      flexDirection="column"
      gap="10px"
      onSubmit={handleSubmit}
    >
      <FormLabel m="0" color="#ffffff">
        Name
      </FormLabel>
      <InputGroup>
        <InputLeftElement children={<RxAvatar />}></InputLeftElement>
        <Input
          bg="gray.100"
          placeholder="Input name contact"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </InputGroup>
      <FormLabel m="0" color="#ffffff">
        Number
      </FormLabel>
      <InputGroup>
        <InputLeftElement children={<BsTelephoneFill />}></InputLeftElement>{' '}
        <Input
          bg="gray.100"
          placeholder="Input pnone number"
          type="tel"
          value={number}
          onChange={handleChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </InputGroup>

      <Button bg="gray.100" marginTop="12px" type="submit">
        Add contact
      </Button>
    </FormControl>
  );
}
