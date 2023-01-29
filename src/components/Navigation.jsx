import { Box, Link, List, ListItem } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth-selectors';

export const Navigation = () => {
  const token = useSelector(selectToken);
  return (
    <Box as="nav">
      <List display="flex" gap="10px">
        <ListItem>
          <Link
            color="#ffffff"
            _activeLink={{ color: '#cf8632' }}
            _hover={{ textDecoration: 'none', color: '#d6a976' }}
            as={NavLink}
            to="/"
          >
            Home
          </Link>
        </ListItem>
        <ListItem>
          {token && (
            <Link
              color="#ffffff"
              _hover={{ textDecoration: 'none', color: '#d6a976' }}
              _activeLink={{ color: '#cf8632' }}
              as={NavLink}
              to="/contacts"
            >
              Contacts
            </Link>
          )}
        </ListItem>
      </List>
    </Box>
  );
};
