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
      bg="radial-gradient(circle, rgba(57,97,48,0.6951155462184874) 3%, rgba(0,36,14,1) 25%, rgba(65,98,78,1) 90%);"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      minH="100vh"
      maxH="100%"
    >
      <Flex
        as="header"
        p="10px"
        gap="10px"
        justifyContent="space-between"
        flexDirection={['column', 'row', null, null, null]}
        alignItems="center"
        w={['300px', '440px', '750px', '970px', '1200px']}
      >
        <Navigation />
        {token ? <AuthUserMenu /> : <AuthNavigation />}
      </Flex>
      <main>
        <Flex flexDirection="column" alignItems="center" p="10px">
          <Outlet />
        </Flex>
      </main>
      <footer>
        <Flex
          p="10px"
          w={['300px', '440px', '750px', '970px', '1200px']}
          gap="5px"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize={['xs', 'x', null, null, null]} color="#ffffff">
            @Phonebook created by
          </Text>
          <Link
            color="#cf8632"
            _hover={{ textDecoration: 'none', color: '#d6a976' }}
            href="https://github.com/Sergeyfilatyev"
            isExternal
          >
            SergeyFilatyev
          </Link>
        </Flex>
      </footer>
    </Box>
  );
};
