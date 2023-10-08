import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { remove } from 'redux/sliceContact';

export const ContactList = ({ listContact }) => {
  const dispatch = useDispatch();
  return (
    <ul className={css.list}>
      {listContact.map(cont => {
        // console.log(cont);
        return (
          <li key={cont.id} className={css.listItem}>
            <p className={css.text}>
              <span className={css.phone}>
                {cont.name}: {cont.number}
              </span>
            </p>
            <button
              className={css.btn}
              type="button"
              onClick={() => {
                dispatch(remove(cont.id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  listContact: PropTypes.array.isRequired,
};
