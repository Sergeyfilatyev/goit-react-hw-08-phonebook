import s from './Contact.module.css';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';
export function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      <p>
        <span className={s.name}>{name}:</span>
        <span className={s.number}>{number}</span>
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
