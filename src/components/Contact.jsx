import { deleteContact } from 'redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';
export function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <li>
      <p>
        <span>{name}:</span>
        <span>{number}</span>
      </p>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
}
