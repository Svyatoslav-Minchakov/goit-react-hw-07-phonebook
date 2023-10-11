import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { qwery } from 'redux/sliceFilter';

export const Filter = () => {
  const filter = useSelector(state => selectFilter(state));
  const dispatch = useDispatch();
  return (
    <>
      <input
        className={css.input}
        value={filter}
        onChange={evt => dispatch(qwery(evt.currentTarget.value))}
        type="text"
        name="filter"
        placeholder="Find contacts by name"
      />
    </>
  );
};
