import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
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
import { RiLockPasswordFill } from 'react-icons/ri';
export const LoginForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const dispatch = useDispatch();
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(login({ email, password })).then(({ error }) => {
      if (error) {
        toast({
          position: 'top',
          title: `Login failed, please try again`,
          status: 'error',
          isClosable: true,
        });
        return;
      }
      toast({
        position: 'top',
        title: `You have successfully logged in`,
        status: 'success',
        isClosable: true,
      });
    });

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
        Login
      </Button>
    </FormControl>
  );
};
