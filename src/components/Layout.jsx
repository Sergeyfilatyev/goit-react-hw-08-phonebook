import { AuthNavigation } from 'components/AuthNavigation';
import { AuthUserMenu } from 'components/AuthUserMenu';
import { Navigation } from 'components/Navigation';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth-selectors';
import { Box, Center } from '@chakra-ui/react';
export const Layout = () => {
  const token = useSelector(selectToken);
  return (
    <>
      <header>
        <Box bg="#6b7c2c" w="100%" color="#ffffff" gap="10px">
          <Navigation />
          {token ? <AuthUserMenu /> : <AuthNavigation />}
        </Box>
      </header>
      <main>
        <Box bg="#98b33a" w="100%" color="#ffffff">
          <Outlet />
        </Box>
      </main>
      <footer>
        <Box bg="#6b7c2c" w="100%" color="#ffffff">
          @Phonebook created by SergeyFilatyev
        </Box>
      </footer>
    </>
  );
};
