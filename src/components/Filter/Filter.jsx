import css from 'components/Filter/Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  return (
    <div className={css.filter}>
      <label className={css.label}>Find contacts by name:</label>

      <input
        className={css.input}
        type="text"
        value={filterValue}
        name="filter"
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};
