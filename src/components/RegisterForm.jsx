import { Box, Button, FormControl, FormLabel } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
export const RegisterForm = () => {
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <Box as="form" onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <input
          placeholder="Your name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <input
          placeholder="Your email"
          required
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <input
          required
          placeholder="Password min 7 characters"
          minLength={7}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </FormControl>
      <Button>Register</Button>
    </Box>
  );
};
