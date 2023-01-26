import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
export function Filter() {
  const dispatch = useDispatch();
  return (
    <label>
      Find contacts by name
      <input
        onChange={event => dispatch(setFilter(event.target.value))}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      ></input>
    </label>
  );
}
