import { deleteContact } from 'redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Flex,
  GridItem,
  Heading,
  IconButton,
  Text,
} from '@chakra-ui/react';
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
      w="320px"
      bg="gray.100"
    >
      <Flex flexDirection="column" alignItems="flex-start">
        <Box display="flex" alignItems="center" gap="5px">
          <RxAvatar />
          <Text
            borderBottom="1px solid green"
            fontSize="xl"
            fontFamily="monospace"
          >
            {name}
          </Text>
        </Box>
        <Box display="flex" alignItems="center" gap="5px">
          <BsTelephoneFill />
          <Text
            borderBottom="1px solid green"
            fontSize="xl"
            fontFamily="monospace"
          >
            {number}
          </Text>
        </Box>
      </Flex>

      <IconButton
        aria-label="delete contact"
        variant="outline"
        bg="#d5eb87"
        _hover={{ bg: '#98b33a' }}
        icon={<RiDeleteBin5Fill />}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </IconButton>
    </GridItem>
  );
}
