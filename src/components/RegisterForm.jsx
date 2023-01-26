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
    <form onSubmit={handleSubmit}>
      <label>
        Name*:
        <input
          required
          placeholder="Input name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email*:
        <input
          placeholder="Input email"
          required
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password*:
        <input
          required
          placeholder="Input password min 7 characters"
          minLength={7}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button>Register</button>
    </form>
  );
};
