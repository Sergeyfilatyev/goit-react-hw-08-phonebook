import { Contact } from 'components/Contact/Contact';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
export function ContactList({ contacts }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
