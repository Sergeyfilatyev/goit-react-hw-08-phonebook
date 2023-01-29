import { Button, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { selectName } from 'redux/auth/auth-selectors';

export const AuthUserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  return (
    <>
      <Text color="#ffffff">{`Welcome, ${name}!`}</Text>
      <Button onClick={() => dispatch(logout())}>Logout</Button>
    </>
  );
};
