import { AuthNavigation } from 'components/AuthNavigation';
import { AuthUserMenu } from 'components/AuthUserMenu';
import { Navigation } from 'components/Navigation';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth-selectors';
import { Box, Flex, Link, Text, Spinner } from '@chakra-ui/react';
import { Suspense } from 'react';
import { selectIsLoading } from 'redux/contacts/contacts-selectors';

export const Layout = () => {
  const isLoading = useSelector(selectIsLoading);
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
        <Suspense
          fallback={
            <Spinner pos="absolute" color="#cf8632" thickness="6px" size="xl" />
          }
        >
          <Flex flexDirection="column" alignItems="center" p="10px">
            <Outlet />
          </Flex>
        </Suspense>
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
      {isLoading && (
        <Spinner
          pos="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          color="#cf8632"
          thickness="6px"
          size="xl"
        />
      )}
    </Box>
  );
};
