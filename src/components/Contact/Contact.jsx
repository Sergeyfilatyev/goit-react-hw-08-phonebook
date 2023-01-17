import s from './Contact.module.css';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/contacts-selectors';

export function Contact({ id, name, phone }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  return (
    <li className={s.item}>
      <p>
        <span className={s.name}>{name}:</span>
        <span className={s.phone}>{phone}</span>
      </p>
      <button
        className={s.btn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
}
