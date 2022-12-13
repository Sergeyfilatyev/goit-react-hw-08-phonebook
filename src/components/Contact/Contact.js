import s from './Contact.module.css';
import PropTypes from 'prop-types';
export function Contact({ id, name, number, deleteContact }) {
  return (
    <li className={s.item}>
      <p>
        <span className={s.name}>{name}:</span>
        <span className={s.number}>{number}</span>
      </p>
      <button
        className={s.btn}
        type="button"
        onClick={() => deleteContact(id, name)}
      >
        Delete
      </button>
    </li>
  );
}
Contact.propTypes = {
  deleteContact: PropTypes.func.isRequired,
};
