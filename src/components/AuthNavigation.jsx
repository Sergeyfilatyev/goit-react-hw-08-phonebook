import { List, Link, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
export const AuthNavigation = () => {
  return (
    <List>
      <ListItem>
        <Link as={NavLink} className="navlink" to="login">
          Login
        </Link>
      </ListItem>
      <ListItem>
        <Link as={NavLink} className="navlink" to="register">
          Sign Up
        </Link>
      </ListItem>
    </List>
  );
};
