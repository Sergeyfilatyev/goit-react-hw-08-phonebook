import s from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
export function Filter() {
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        onChange={event => dispatch(setFilter(event.target.value))}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      ></input>
    </label>
  );
}
