import { deleteContact } from 'redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';
import { Box, Flex, GridItem, IconButton, Text } from '@chakra-ui/react';
import { RxAvatar } from 'react-icons/rx';
import { BsTelephoneFill } from 'react-icons/bs';
import { RiDeleteBin5Fill } from 'react-icons/ri';
export function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <GridItem
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      shadow="md"
      borderRadius="5px"
      p="7px"
      w={['100%', '100%', '360px', '360px', '360px']}
      bg="gray.100"
    >
      <Flex flexDirection="column" alignItems="flex-start">
        <Box display="flex" alignItems="center" gap="5px">
          <RxAvatar />
          <Text color="#cf8632" borderBottom="1px solid green" fontSize="xl">
            {name}
          </Text>
        </Box>
        <Box display="flex" alignItems="center" gap="5px">
          <BsTelephoneFill />
          <Text borderBottom="1px solid green" fontSize="xl">
            {number}
          </Text>
        </Box>
      </Flex>

      <IconButton
        borderRadius="50%"
        aria-label="delete contact"
        variant="outline"
        bg="#d6a976"
        _hover={{ bg: '#cf8632' }}
        icon={<RiDeleteBin5Fill />}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </IconButton>
    </GridItem>
  );
}
