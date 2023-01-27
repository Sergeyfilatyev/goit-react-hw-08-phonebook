import { AuthNavigation } from 'components/AuthNavigation';
import { AuthUserMenu } from 'components/AuthUserMenu';
import { Navigation } from 'components/Navigation';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth-selectors';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
export const Layout = () => {
  const token = useSelector(selectToken);
  return (
    <Box
      bg="#98b33a"
      width="100%"
      color="#ffffff"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      h="100vh"
    >
      <Flex
        as="header"
        justifyContent="space-between"
        alignItems="center"
        w={['300px', '440px', '750px', '970px', '1200px']}
      >
        <Navigation />
        {token ? <AuthUserMenu /> : <AuthNavigation />}
      </Flex>
      <main>
        <Box p="10px">
          <Outlet />
        </Box>
      </main>
      <footer>
        <Flex
          p="10px"
          w={['300px', '440px', '750px', '970px', '1200px']}
          gap="5px"
          justifyContent="center"
        >
          <Text>@Phonebook created by</Text>
          <Link href="https://github.com/Sergeyfilatyev" isExternal>
            SergeyFilatyev
          </Link>
        </Flex>
      </footer>
    </Box>
  );
};
