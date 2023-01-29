import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
export function Filter() {
  const dispatch = useDispatch();
  return (
    <>
      <Heading as="h2" color="#ffffff" textAlign="center" py="10px">
        My phone contacts
      </Heading>
      <FormControl display="flex" flexDirection="column" alignItems="center">
        <FormLabel color="#f1d7b5">FILTER CONTACTS</FormLabel>
        <Input
          bg="gray.100"
          placeholder="Search contact by name"
          variant="outline"
          width="300px"
          onChange={event => dispatch(setFilter(event.target.value))}
          type="text"
          name="filter"
        ></Input>
      </FormControl>
    </>
  );
}
