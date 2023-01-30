import { List, Link, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
export const AuthNavigation = () => {
  return (
    <List display="flex" gap="10px">
      <ListItem>
        <Link
          color="#ffffff"
          _activeLink={{ color: '#cf8632' }}
          _hover={{
            textDecoration: 'none',
            color: '#d6a976',
          }}
          as={NavLink}
          to="login"
        >
          Login
        </Link>
      </ListItem>
      <ListItem>
        <Link
          color="#ffffff"
          _activeLink={{ color: '#cf8632' }}
          _hover={{ textDecoration: 'none', color: '#d6a976' }}
          as={NavLink}
          to="register"
        >
          SignUp
        </Link>
      </ListItem>
    </List>
  );
};
