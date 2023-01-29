import { IconButton, Text } from '@chakra-ui/react';
import { BiLogOut } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { selectName } from 'redux/auth/auth-selectors';

export const AuthUserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  return (
    <>
      <Text color="#ffffff">{`Welcome, ${name}!`}</Text>
      <IconButton
        aria-label="logout"
        icon={<BiLogOut size="30px" />}
        variant="outline"
        border="none"
        _hover={{ color: '#cf8632' }}
        onClick={() => dispatch(logout())}
      ></IconButton>
    </>
  );
};
