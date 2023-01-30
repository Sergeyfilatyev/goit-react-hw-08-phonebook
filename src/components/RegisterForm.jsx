import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useToast,
} from '@chakra-ui/react';
import { BiShow, BiHide } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { RxAvatar } from 'react-icons/rx';
import { RiLockPasswordFill } from 'react-icons/ri';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
export const RegisterForm = () => {
  const [show, setShow] = useState(false);
  const toast = useToast();
  const handleClick = () => setShow(!show);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password })).then(({ error }) => {
      if (error) {
        toast({
          position: 'top',
          title: `Registration failed, please try again`,
          status: 'error',
          isClosable: true,
        });
        return;
      }
      toast({
        position: 'top',
        title: `Registration completed successfully`,
        status: 'success',
        isClosable: true,
      });
    });
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <FormControl
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
          placeholder="Your name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </InputGroup>
      <FormLabel m="0" color="#ffffff">
        Email{' '}
      </FormLabel>
      <InputGroup>
        <InputLeftElement children={<FiMail />}></InputLeftElement>
        <Input
          bg="gray.100"
          placeholder="Your email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </InputGroup>
      <FormLabel m="0" color="#ffffff">
        Password
      </FormLabel>
      <InputGroup>
        <InputLeftElement children={<RiLockPasswordFill />}></InputLeftElement>
        <Input
          bg="gray.100"
          placeholder="Password min 7 characters"
          minLength={7}
          type={show ? 'text' : 'password'}
          name="password"
          value={password}
          onChange={handleChange}
        />
        <InputRightElement>
          <IconButton
            aria-label="Search database"
            icon={show ? <BiHide /> : <BiShow />}
            onClick={handleClick}
          >
            {show ? 'Hide' : 'Show'}
          </IconButton>
        </InputRightElement>
      </InputGroup>

      <Button
        _hover={{ color: '#cf8632' }}
        bg="gray.100"
        marginTop="12px"
        type="submit"
      >
        SignUp
      </Button>
    </FormControl>
  );
};
