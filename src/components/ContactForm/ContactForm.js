import { useState } from 'react';
import { addContact } from 'redux/contacts/contacts-actions';
import { useDispatch } from 'react-redux';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';
export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(newContact));
    reset();
  };
  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          value={name}
          onChange={handleChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          value={number}
          onChange={handleChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

// class ContactForm extends Component {
//   state = { name: '', number: '' };
//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.addContact({ ...this.state });
//     this.reset();
//   };
//   handleChange = ({ target: { value, name } }) => {
//     this.setState({ [name]: value });
//   };
//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };
//   render() {
//     const { name, number } = this.state;
//     return (
//       <form className={s.form} onSubmit={this.handleSubmit}>
//         <label className={s.label}>
//           Name
//           <input
//             className={s.input}
//             type="text"
//             value={name}
//             onChange={this.handleChange}
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>
//         <label className={s.label}>
//           Number
//           <input
//             className={s.input}
//             type="tel"
//             value={number}
//             onChange={this.handleChange}
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>
//         <button className={s.btn} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// export default ContactForm;
// ContactForm.propTypes = { addContact: PropTypes.func.isRequired };
