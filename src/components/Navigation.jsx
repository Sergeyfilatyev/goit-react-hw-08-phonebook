import { Box, color, Link, List, ListItem } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth-selectors';

export const Navigation = () => {
  const token = useSelector(selectToken);
  return (
    <Box as="nav">
      <List display="flex" gap="10px">
        <ListItem>
          <Link className="navlink" as={NavLink} to="/">
            Home
          </Link>
        </ListItem>
        <ListItem>
          {token && (
            <Link className="navlink" as={NavLink} to="/contacts">
              Contacts
            </Link>
          )}
        </ListItem>
      </List>
    </Box>
  );
};
